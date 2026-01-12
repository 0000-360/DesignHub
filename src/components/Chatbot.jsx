import { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import avatarImage from '../assets/ai_avatar_assistant.png';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hi! I am the DesignHub AI assistant. Ask me anything about our services, case studies, or company!' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Auto-popup after 2 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: userMessage.content }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Format sources slightly better if available
            let answerText = data.answer;

            setMessages(prev => [...prev, { role: 'assistant', content: answerText }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I am having trouble connecting to the server. Please ensure the backend is running.' }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, rotateX: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20, rotateX: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 w-[350px] md:w-[400px] h-[550px] flex flex-col mb-4 overflow-hidden relative"
                    >
                        {/* Gradient Glow Effect behind */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-blue-500/10 pointer-events-none" />

                        {/* Header */}
                        <div className="bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] p-4 flex items-center justify-between text-white shadow-md relative z-10">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/25 p-1 rounded-full backdrop-blur-sm border border-white/30">
                                    <img src={avatarImage} alt="AI Avatar" className="w-10 h-10 rounded-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">DesignHub AI</h3>
                                    <div className="flex items-center gap-1.5 opacity-90">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                        <p className="text-xs font-medium">Online & Ready</p>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/20 rounded-full transition-all active:scale-95"
                            >
                                <FaTimes className="text-lg" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 scrollbar-hide relative z-10">
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3.5 rounded-2xl shadow-sm relative ${msg.role === 'user'
                                                ? 'bg-gradient-to-br from-[#FF6B35] to-[#FF8C61] text-white rounded-br-none'
                                                : 'bg-white border border-gray-100 text-gray-800 rounded-bl-none'
                                            }`}
                                    >
                                        {msg.role === 'assistant' && (
                                            <div className="absolute -left-2 -bottom-2 w-4 h-4 bg-white transform rotate-45 border-b border-l border-gray-100"></div>
                                        )}
                                        {msg.role === 'user' && (
                                            <div className="absolute -right-2 -bottom-2 w-4 h-4 bg-[#FF8C61] transform rotate-45"></div>
                                        )}
                                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                                    </div>
                                </motion.div>
                            ))}

                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-bl-none shadow-sm flex gap-1.5 items-center">
                                        <motion.div
                                            key="dot1"
                                            animate={{ y: [0, -6, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                                            className="w-2.5 h-2.5 bg-[#FF6B35] rounded-full"
                                        />
                                        <motion.div
                                            key="dot2"
                                            animate={{ y: [0, -6, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
                                            className="w-2.5 h-2.5 bg-[#FF6B35]/70 rounded-full"
                                        />
                                        <motion.div
                                            key="dot3"
                                            animate={{ y: [0, -6, 0] }}
                                            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                                            className="w-2.5 h-2.5 bg-[#FF6B35]/40 rounded-full"
                                        />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-100 relative z-10">
                            <div className="relative shadow-sm rounded-xl">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your question..."
                                    className="w-full pl-4 pr-12 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 outline-none transition-all placeholder:text-gray-400 text-sm"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#FF6B35] text-white rounded-lg hover:bg-[#E55A2A] disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 shadow-md"
                                >
                                    <FaPaperPlane className="text-sm" />
                                </button>
                            </div>
                            <div className="text-center mt-2">
                                <p className="text-[10px] text-gray-400">Powered by DesignHub</p>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Float Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative btn-primary rounded-full w-16 h-16 !p-0 shadow-glow-orange flex items-center justify-center text-2xl z-50 overflow-hidden border-[3px] border-white ring-4 ring-orange-500/20"
            >
                {/* Pulse Ring */}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-orange-400 opacity-20"></span>
                )}

                {isOpen ? (
                    <FaTimes className="text-white drop-shadow-md" />
                ) : (
                    <img src={avatarImage} alt="Chat" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
                )}
            </motion.button>
        </div>
    );
};

export default Chatbot;
