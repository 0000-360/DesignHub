import React from 'react'
import SEO from '../../components/SEO'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCpu, FiMessageSquare, FiTrendingUp, FiSettings, FiCheckCircle, FiArrowRight, FiShield, FiZap } from 'react-icons/fi'

const AISolutions = () => {
    return (
        <>
            <SEO
                title="AI Solutions & Automation Agency | Chatbots & Workflows | DesignHub360"
                description="Future-proof your business with custom AI solutions from DesignHub360. We build chatbots, automate workflows, and provide predictive analytics for startups."
                canonical="https://www.designhub360.in/services/ai-solutions"
            />
            <div className="overflow-hidden">
                {/* Hero Section */}
                <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-bold text-sm tracking-wide mb-6">
                                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                                    AI-POWERED GROWTH
                                </div>
                                <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
                                    Smarter Business with <span className="text-blue-600">Artificial Intelligence</span>
                                </h1>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                    Don't just work harder—work smarter. We help startups and local businesses assist customers, automate tasks, and predict trends using cutting-edge AI.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link to="/contact">
                                        <button className="btn-primary bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700">
                                            Book an AI Audit
                                            <FiArrowRight />
                                        </button>
                                    </Link>
                                    <Link to="/case-studies">
                                        <button className="btn-outline text-blue-600 border-blue-600 hover:bg-blue-50">
                                            View Use Cases
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
                                <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-blue-100">
                                    <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                            <FiCpu className="text-2xl" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">AI Assistant</h3>
                                            <p className="text-sm text-green-500 flex items-center gap-1">
                                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                                Online & Learning
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 p-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl text-sm text-gray-700 w-3/4">
                                            How can I reduce my operational costs next quarter?
                                        </div>
                                        <div className="bg-blue-600 p-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl text-sm text-white ml-auto w-3/4 shadow-lg shadow-blue-200">
                                            Based on your data, automating customer support and inventory tracking could save you 22% in overhead.
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl text-sm text-gray-700 w-3/4">
                                            That sounds great. Can you implement this?
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Core Services Section */}
                <section className="section-padding bg-white">
                    <div className="container-custom">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-4xl font-bold mb-4">Core AI Services</h2>
                            <p className="text-xl text-gray-600">
                                Practical, scalable AI solutions designed for real business impact.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <FiMessageSquare />,
                                    title: "Intelligent Chatbots",
                                    desc: "24/7 customer support that feels human. Handle inquiries, book appointments, and capture leads automatically.",
                                    features: ["Natural Language Processing", "Multi-platform (Web, WhatsApp)", "Lead Pre-qualification"]
                                },
                                {
                                    icon: <FiSettings />,
                                    title: "Workflow Automation",
                                    desc: "Connect your apps and automate repetitive tasks. From data entry to invoice processing, let AI handle the busy work.",
                                    features: ["Zapier/Make Integration", "Custom Python Scripts", "Error Reduction"]
                                },
                                {
                                    icon: <FiTrendingUp />,
                                    title: "Predictive Analytics",
                                    desc: "Stop guessing. Use historical data to predict future trends, customer behavior, and inventory needs.",
                                    features: ["Sales Forecasting", "Customer Churn Prediction", "Market Trend Analysis"]
                                }
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 rounded-3xl border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.desc}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                                <FiCheckCircle className="text-green-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ / PAA Section (SEO Goldmine) */}
                <section className="section-padding bg-gray-50">
                    <div className="container-custom max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Common Questions About AI</h2>
                            <p className="text-gray-600">Everything you need to know about integrating AI into your business.</p>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    q: "How can AI help my small business?",
                                    a: "AI levels the playing field. It allows small teams to deliver 24/7 support via chatbots, generate professional marketing content in seconds, and automate hours of manual data entry, freeing you up to focus on strategy."
                                },
                                {
                                    q: "Is implementing AI expensive?",
                                    a: "Not anymore. We specialize in scalable solutions. You can start with a simple automation or chatbot for a fraction of the cost of hiring new staff, with immediate ROI through time savings."
                                },
                                {
                                    q: "Is my data secure with AI?",
                                    a: "Security is our top priority. We implement enterprise-grade encryption and ensure that your proprietary data is never used to train public models without your explicit consent."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 rounded-2xl shadow-sm"
                                >
                                    <h3 className="text-xl font-bold mb-3 flex items-start gap-3">
                                        <span className="text-blue-600 mt-1">?</span>
                                        {item.q}
                                    </h3>
                                    <p className="text-gray-600 pl-7">{item.a}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-blue-600 text-white">
                    <div className="container-custom text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Automate Your Growth?</h2>
                        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Schedule a free consultation. We'll identify the highest-impact AI opportunities for your specific business.
                        </p>
                        <Link to="/contact">
                            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all shadow-lg text-lg">
                                Get Your AI Roadmap
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    )
}

export default AISolutions
