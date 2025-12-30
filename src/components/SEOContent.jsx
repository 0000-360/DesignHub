import { motion } from 'framer-motion'
import { FiCpu, FiLayout, FiMapPin, FiTrendingUp, FiSearch, FiZap } from 'react-icons/fi'

const SEOContent = () => {
    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="container-custom">
                {/* Main Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-sm tracking-wide mb-6">
                        <FiZap className="w-4 h-4" />
                        POWERED BY INTELLECT
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                        Transform Your Brand with an <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            AI-Powered Marketing Agency
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        In today’s fast-paced digital landscape, standing out requires more than just a website—it requires intelligence.
                        We combine creative web design with data-driven strategies to build a strong online presence that
                        attracts targeted traffic and converts visitors into loyal customers.
                    </p>
                </motion.div>

                {/* Content Blocks */}
                <div className="space-y-24">

                    {/* Block 1: Strategy & AI */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center text-2xl mb-6">
                                <FiSearch />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Strategic SEO & Content Marketing</h3>
                            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    Effective marketing starts with being found. Our approach to <strong>startup marketing strategies</strong> goes beyond basic keywords.
                                    We focus on understanding user intent.
                                </p>
                                <p>
                                    By researching long-tail keywords—specific phrases like "digital marketing agency for startups" or "<strong>best local branding firm</strong>"—we connect you with niche users who are ready to engage.
                                    Whether it’s answering "What is a digital marketing agency?" or <strong>optimizing for voice search</strong>, our content speaks directly to your audience’s needs.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2 bg-gradient-to-br from-orange-50 to-orange-100 rounded-[3rem] p-8 lg:p-12"
                        >
                            <div className="bg-white rounded-2xl shadow-xl p-8 transform rotate-2 hover:rotate-0 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-4 border-b border-gray-100 pb-4">
                                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    <span className="text-xs text-gray-400 font-mono ml-auto">analysis.json</span>
                                </div>
                                <div className="space-y-3 font-mono text-sm text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Target Audience</span>
                                        <span className="text-green-600">Identified</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Keyword Intent</span>
                                        <span className="text-blue-600">High Value</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Growth Potential</span>
                                        <div className="w-24 bg-gray-100 rounded-full h-4 overflow-hidden">
                                            <div className="bg-orange-500 h-full w-[90%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Block 2: AI Analytics */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-[3rem] p-8 lg:p-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full blur-[100px] opacity-20"></div>
                            <div className="relative z-10 space-y-4">
                                {['Automated Keyword Discovery', 'Real-time Trend Analysis', 'Predictive User Behavior', 'Conversion Optimization'].map((item, i) => (
                                    <div key={i} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-sm flex items-center gap-4">
                                        <FiCpu className="text-purple-600" />
                                        <span className="font-semibold text-gray-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl mb-6">
                                <FiTrendingUp />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">The Power of AI-Driven SEO Analytics</h3>
                            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    We integrate cutting-edge technology into every campaign. Our <strong>AI-driven SEO analytics</strong> tools process vast amounts of data to uncover trends that traditional methods miss.
                                </p>
                                <p>
                                    This automated keyword discovery allows us to identify high-impact, conversational terms that match how people naturally search today.
                                    We use AI for content optimization at scale, suggesting improvements to metadata and readability while you sleep.
                                </p>
                                <p className="text-sm text-gray-500 italic border-l-4 border-purple-200 pl-4">
                                    Note: While AI supercharges our efficiency, we always apply a human touch to ensure every piece of content remains authentic and on-brand.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Block 3: Design & Local */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-100"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center text-2xl mb-6">
                                <FiLayout />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Web Design That Builds Trust</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Did you know that 50% of users say website design influences their perception of a company?
                                Our design hub focuses on <strong>web design and branding</strong> that is both beautiful and purposeful.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                                    Mobile-responsive layouts
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                                    Fast load times (Core Web Vitals)
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                                    Conversion-focused UX
                                </li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-100"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-2xl mb-6">
                                <FiMapPin />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Local SEO Solutions</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                For local businesses, dominating the neighborhood search is essential. Our <strong>local SEO solutions</strong> ensure you appear exactly where your community is looking.
                            </p>
                            <div className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4 mb-2">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <FiMapPin />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-800">Marketing Agency Near Me</div>
                                    <div className="text-xs text-gray-400">Top Result • 0.8s</div>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500 mt-4">
                                We optimize your Google Business Profile and target location-specific terms to help you build trust with neighbors.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SEOContent
