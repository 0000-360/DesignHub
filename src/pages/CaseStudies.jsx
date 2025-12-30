import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import mermaid from 'mermaid'
import { FiArrowRight, FiTrendingUp, FiUsers, FiClock } from 'react-icons/fi'
import { BiRupee } from 'react-icons/bi'

const CaseStudies = () => {
    const caseStudies = [
        {
            title: 'Digital Presense for MM Tigers',
            category: 'Web Design & Branding',
            client: 'MM Tiger Skating Academy',
            challenge: 'Limited digital visibility and difficulty in showcasing academy achievements to parents.',
            solution: 'Designed a high-energy promotional website featuring student galleries, schedules, and quick inquiry forms.',
            results: [
                { metric: '50%', label: 'Increase in Inquiries', icon: <FiTrendingUp /> },
                { metric: '50+', label: 'New Student Signups', icon: <FiUsers /> },
                { metric: '1k+', label: 'Monthly Site Visitors', icon: <FiUsers /> },
                { metric: '2 weeks', label: 'Project Turnaround', icon: <FiClock /> },
            ],
            color: 'orange'
        },
        {
            title: 'Digital Growth for Aashirvadh',
            category: 'Social Media & Web Design',
            client: 'Aashirvadh Sports Academy',
            challenge: 'Building a recognized sports brand, simplifying student communication, and implementing AI solutions.',
            solution: 'Strategic social media handling, a modern website, and AI-powered automation associated with student interactions.',
            results: [
                { metric: '150%', label: 'Growth in Followers', icon: <FiUsers /> },
                { metric: '3x', label: 'Increase in Engagement', icon: <FiTrendingUp /> },
                { metric: '2k+', label: 'Monthly Website Traffic', icon: <FiTrendingUp /> },
                { metric: 'Ongoing', label: 'Campaign Duration', icon: <FiClock /> },
            ],
            color: 'blue'
        },
        {
            title: 'Academy Management for Flick',
            category: 'Web App & Dashboard',
            client: 'Flick Badminton Academy',
            challenge: 'Manual student tracking, scheduling conflicts, and lack of digital presence.',
            solution: 'Developed a promotional website and a comprehensive dashboard for student & batch management.',
            results: [
                { metric: '100%', label: 'Digital Attendance', icon: <FiUsers /> },
                { metric: '40%', label: 'Increase in Registrations', icon: <FiTrendingUp /> },
                { metric: '15hrs', label: 'Admin Time Saved/Week', icon: <FiClock /> },
                { metric: '4 weeks', label: 'Project Timeline', icon: <FiClock /> },
            ],
            color: 'pink'
        },
    ]

    // Initialize Mermaid on component mount
    useEffect(() => {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            themeVariables: {
                primaryColor: '#FF6B35',
                primaryTextColor: '#fff',
                primaryBorderColor: '#FF6B35',
                lineColor: '#666',
                secondaryColor: '#004E89',
                tertiaryColor: '#FF006E',
            }
        })
        mermaid.contentLoaded()
    }, [])

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-4">
                            Our Work
                        </p>
                        <h1 className="mb-6">Case Studies & Results</h1>
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                            Real results for real businesses. See how we've helped companies achieve
                            their goals and drive measurable growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Workflow Section - Professional Sitemap Style */}
            <section className="section-padding bg-white relative overflow-hidden">
                {/* Subtle Decorative Background */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-100 rounded-full blur-3xl"></div>
                    <div className="absolute top-40 right-20 w-80 h-80 bg-purple-100 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-40 left-1/4 w-72 h-72 bg-blue-100 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-green-100 rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-4">
                            How We Work
                        </p>
                        <h2 className="mb-6">Our Proven Workflow</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            A systematic approach that delivers consistent results for every client
                        </p>
                    </motion.div>

                    {/* Professional Sitemap-Style Workflow Diagram */}
                    <div className="max-w-7xl mx-auto mb-20">
                        <svg viewBox="0 0 1200 900" className="w-full h-auto" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.05))' }}>
                            <defs>
                                {/* Gradient Definitions */}
                                <linearGradient id="gradOrange" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
                                </linearGradient>
                                <linearGradient id="gradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 1 }} />
                                </linearGradient>
                                <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#93c5fd', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
                                </linearGradient>
                                <linearGradient id="gradNavy" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
                                </linearGradient>
                                <linearGradient id="gradSuccess" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style={{ stopColor: '#fb923c', stopOpacity: 1 }} />
                                    <stop offset="100%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
                                </linearGradient>

                                {/* Shadow Filter */}
                                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                                    <feOffset dx="0" dy="2" result="offsetblur" />
                                    <feComponentTransfer>
                                        <feFuncA type="linear" slope="0.2" />
                                    </feComponentTransfer>
                                    <feMerge>
                                        <feMergeNode />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Connection Lines - Smooth Curves */}
                            <path d="M 600 140 Q 600 180, 300 220" stroke="#cbd5e1" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                            <path d="M 600 140 L 600 220" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M 600 140 Q 600 180, 900 220" stroke="#cbd5e1" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                            {/* Discovery to sub-items */}
                            <path d="M 300 340 Q 280 380, 200 430" stroke="#fbbf24" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
                            <path d="M 300 340 L 300 520" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                            <path d="M 300 340 Q 320 420, 350 600" stroke="#fbbf24" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />

                            {/* Strategy to Services */}
                            <path d="M 600 340 Q 560 430, 480 540" stroke="#06b6d4" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
                            <path d="M 600 340 Q 640 430, 680 540" stroke="#06b6d4" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />

                            {/* Execution to Products */}
                            <path d="M 900 340 Q 860 390, 780 470" stroke="#60a5fa" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
                            <path d="M 900 340 L 900 470" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                            <path d="M 900 340 Q 940 390, 1000 470" stroke="#60a5fa" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />

                            {/* To Success */}
                            <path d="M 900 540 Q 940 620, 980 710" stroke="#fb923c" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />

                            {/* Main START Node */}
                            <g filter="url(#shadow)">
                                <circle cx="600" cy="100" r="70" fill="url(#gradNavy)" />
                                <circle cx="600" cy="100" r="70" fill="none" stroke="#93c5fd" strokeWidth="3" />
                                <text x="600" y="108" textAnchor="middle" fill="white" fontSize="24" fontWeight="700" fontFamily="Inter, sans-serif">START</text>
                            </g>

                            {/* Level 1 - Main Nodes */}
                            {/* Discovery */}
                            <g filter="url(#shadow)">
                                <circle cx="300" cy="280" r="65" fill="url(#gradNavy)" />
                                <circle cx="300" cy="280" r="65" fill="none" stroke="url(#gradOrange)" strokeWidth="4" />
                                <text x="300" y="280" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="Inter, sans-serif">Discovery</text>
                                <text x="300" y="300" textAnchor="middle" fill="#93c5fd" fontSize="13" fontWeight="500" fontFamily="Inter, sans-serif">& Research</text>
                            </g>

                            {/* Strategy */}
                            <g filter="url(#shadow)">
                                <circle cx="600" cy="280" r="65" fill="url(#gradNavy)" />
                                <circle cx="600" cy="280" r="65" fill="none" stroke="url(#gradCyan)" strokeWidth="4" />
                                <text x="600" y="290" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="Inter, sans-serif">Strategy</text>
                            </g>

                            {/* Execution */}
                            <g filter="url(#shadow)">
                                <circle cx="900" cy="280" r="65" fill="url(#gradNavy)" />
                                <circle cx="900" cy="280" r="65" fill="none" stroke="url(#gradBlue)" strokeWidth="4" />
                                <text x="900" y="290" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="Inter, sans-serif">Execution</text>
                            </g>

                            {/* Level 2 - Discovery Sub-items */}
                            <g filter="url(#shadow)">
                                <circle cx="200" cy="460" r="50" fill="url(#gradOrange)" />
                                <text x="200" y="460" textAnchor="middle" fill="white" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Client</text>
                                <text x="200" y="478" textAnchor="middle" fill="white" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Goals</text>
                            </g>

                            <g filter="url(#shadow)">
                                <circle cx="300" cy="560" r="50" fill="url(#gradOrange)" />
                                <text x="300" y="560" textAnchor="middle" fill="white" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Market</text>
                                <text x="300" y="578" textAnchor="middle" fill="white" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Analysis</text>
                            </g>

                            <g filter="url(#shadow)">
                                <circle cx="350" cy="640" r="50" fill="url(#gradOrange)" />
                                <text x="350" y="650" textAnchor="middle" fill="white" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Research</text>
                            </g>

                            {/* Level 2 - Strategy Services */}
                            <g filter="url(#shadow)">
                                <circle cx="480" cy="580" r="55" fill="url(#gradCyan)" />
                                <text x="480" y="580" textAnchor="middle" fill="white" fontSize="15" fontWeight="600" fontFamily="Inter, sans-serif">Design</text>
                                <text x="480" y="598" textAnchor="middle" fill="white" fontSize="15" fontWeight="600" fontFamily="Inter, sans-serif">Planning</text>
                            </g>

                            <g filter="url(#shadow)">
                                <circle cx="680" cy="580" r="55" fill="url(#gradCyan)" />
                                <text x="680" y="580" textAnchor="middle" fill="white" fontSize="15" fontWeight="600" fontFamily="Inter, sans-serif">Content</text>
                                <text x="680" y="598" textAnchor="middle" fill="white" fontSize="15" fontWeight="600" fontFamily="Inter, sans-serif">Strategy</text>
                            </g>

                            {/* Level 2 - Execution Products */}
                            <g filter="url(#shadow)">
                                <circle cx="780" cy="510" r="52" fill="url(#gradBlue)" />
                                <text x="780" y="510" textAnchor="middle" fill="#1e3a8a" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Website</text>
                                <text x="780" y="528" textAnchor="middle" fill="#1e3a8a" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Build</text>
                            </g>

                            <g filter="url(#shadow)">
                                <circle cx="900" cy="510" r="52" fill="url(#gradBlue)" />
                                <text x="900" y="510" textAnchor="middle" fill="#1e3a8a" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Marketing</text>
                                <text x="900" y="528" textAnchor="middle" fill="#1e3a8a" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Launch</text>
                            </g>

                            <g filter="url(#shadow)">
                                <circle cx="1000" cy="510" r="52" fill="url(#gradBlue)" />
                                <text x="1000" y="510" textAnchor="middle" fill="#1e3a8a" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">Testing</text>
                                <text x="1000" y="528" textAnchor="middle" fill="#1e3a8a" fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif">& QA</text>
                            </g>

                            {/* Final Success Node */}
                            <g filter="url(#shadow)">
                                <circle cx="980" cy="760" r="60" fill="url(#gradSuccess)" />
                                <circle cx="980" cy="760" r="60" fill="none" stroke="#fed7aa" strokeWidth="3" />
                                <text x="980" y="760" textAnchor="middle" fill="white" fontSize="17" fontWeight="700" fontFamily="Inter, sans-serif">Success</text>
                                <text x="980" y="780" textAnchor="middle" fill="white" fontSize="17" fontWeight="700" fontFamily="Inter, sans-serif">& Growth</text>
                            </g>
                        </svg>
                    </div>

                    {/* Workflow Steps Explanation */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
                        {[
                            {
                                title: 'Discovery',
                                desc: 'We learn about your business, goals, and target audience',
                                color: 'orange'
                            },
                            {
                                title: 'Strategy',
                                desc: 'We create a custom plan tailored to your specific needs',
                                color: 'blue'
                            },
                            {
                                title: 'Execution',
                                desc: 'Our team brings the strategy to life with expert implementation',
                                color: 'pink'
                            },
                            {
                                title: 'Launch',
                                desc: 'We deploy your solution and ensure everything works perfectly',
                                color: 'yellow'
                            },
                            {
                                title: 'Optimize',
                                desc: 'We continuously monitor, analyze, and improve for better results',
                                color: 'green'
                            },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-${step.color}-400 to-${step.color}-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold`}>
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-600 text-sm">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="space-y-24">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="card">
                                    {/* Header */}
                                    <div className="mb-8">
                                        <div className={`inline-block px-4 py-2 bg-${study.color}-100 text-${study.color}-600 rounded-full text-sm font-semibold mb-4`}>
                                            {study.category}
                                        </div>
                                        <h2 className="text-4xl font-bold mb-4">{study.title}</h2>
                                        <p className="text-xl text-gray-600">Client: {study.client}</p>
                                    </div>

                                    {/* Challenge & Solution */}
                                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                                            <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                                            <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                                        </div>
                                    </div>

                                    {/* Results */}
                                    <div>
                                        <h3 className="text-2xl font-bold mb-8 text-center">The Results</h3>
                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                            {study.results.map((result, i) => (
                                                <div key={i} className="text-center">
                                                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-${study.color}-400 to-${study.color}-600 rounded-2xl flex items-center justify-center text-white text-2xl`}>
                                                        {result.icon}
                                                    </div>
                                                    <div className={`text-4xl font-bold text-${study.color}-500 mb-2`}>
                                                        {result.metric}
                                                    </div>
                                                    <div className="text-gray-600 text-sm">{result.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Deliver Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="mb-6">What You Get</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Every project includes these deliverables and more
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Strategy Document', desc: 'Comprehensive plan outlining goals, tactics, and timeline' },
                            { title: 'Design Assets', desc: 'All source files, graphics, and brand materials' },
                            { title: 'Website/Platform', desc: 'Fully functional, tested, and optimized solution' },
                            { title: 'Training & Documentation', desc: 'Complete guides to manage and update your assets' },
                            { title: 'Analytics Setup', desc: 'Tracking and reporting systems to measure success' },
                            { title: 'Ongoing Support', desc: 'Continued assistance and optimization after launch' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                            >
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-gradient-to-br from-orange-500 via-pink-500 to-blue-500 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center text-white max-w-4xl mx-auto"
                    >
                        <h2 className="text-white mb-6">
                            Ready to see similar results?
                        </h2>
                        <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
                            Let's create a success story for your business. Schedule a free consultation
                            to discuss your goals and how we can help you achieve them.
                        </p>
                        <Link to="/contact">
                            <button className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 text-lg shadow-xl">
                                Start Your Project
                                <FiArrowRight />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default CaseStudies
