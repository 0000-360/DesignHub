import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiAward, FiUsers, FiTarget, FiHeart, FiTrendingUp, FiArrowRight } from 'react-icons/fi'
import SEOContent from '../components/SEOContent'

import SEO from '../components/SEO'

const About = () => {
    // ... (values array)
    const values = [
        {
            icon: <FiTarget />,
            title: 'Results-Driven',
            description: 'We measure success by your success. Every strategy is designed to deliver measurable, tangible results that impact your bottom line.',
            color: 'orange'
        },
        {
            icon: <FiUsers />,
            title: 'Client-Focused',
            description: 'Your goals become our goals. We work as an extension of your team, dedicated to understanding and achieving what matters most to you.',
            color: 'blue'
        },
        {
            icon: <FiHeart />,
            title: 'Passionate Excellence',
            description: 'We love what we do, and it shows. Our team brings creativity, expertise, and genuine enthusiasm to every project.',
            color: 'pink'
        },
        {
            icon: <FiTrendingUp />,
            title: 'Continuous Growth',
            description: 'The digital landscape evolves constantly, and so do we. We stay ahead of trends to keep your business competitive.',
            color: 'green'
        },
    ]

    const industries = [
        { icon: '🛍️', name: 'E-Commerce' },
        { icon: '🎓', name: 'Education & EdTech' },
        { icon: '🏥', name: 'Health & Wellness' },
        { icon: '🏡', name: 'Real Estate' },
        { icon: '🚀', name: 'Tech Startups' },
        { icon: '✈️', name: 'Travel & Hospitality' },
        { icon: '🍽️', name: 'Food & Beverage' },
        { icon: '⚖️', name: 'Legal & Finance' },
    ]

    return (
        <div className="overflow-hidden">
            <SEO
                title="About DesignHub | Data-Driven Design & Local SEO Experts"
                description="Meet DesignHub, the AI-powered agency helping startups and local businesses grow. We combine human creativity with data-driven strategies."
                canonical="https://www.designhub.com/about"
            />

            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-4">
                            About Us
                        </p>
                        <h1 className="mb-6">We're Design Hub</h1>
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                            A team of passionate creatives, strategists, and developers dedicated to
                            helping businesses grow through exceptional digital experiences.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story - Professional Design */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="mb-6">Our Story</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From a group of ambitious students to a leading digital force for businesses worldwide
                        </p>
                    </motion.div>

                    {/* Timeline & Story Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Left: Story Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xl">
                                        1
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">The Beginning</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        We started as a group of youngest, passionate creators with a simple belief: the digital world needs fresh perspectives.
                                        Fueled by late-night coding sessions and a shared vision, we set out to prove that age is just a number when it comes to innovation.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                                        2
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">Our Evolution</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        What began as a small circle of friends has evolved into a dynamic full-service agency. We've turned our youthful energy into
                                        our greatest asset, staying ahead of trends because we live them every day. We don't just follow the digital wave; we ride it.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                                        3
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3">Today & Beyond</h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        Today, we are proud to be one of the youngest successful teams in the industry. helping businesses of all sizes find their
                                        voice in the modern era. We bring the same fearless creativity and strategic thinking to every project, proving that the future belongs to the bold.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Key Highlights */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="card bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-500">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center text-white text-2xl flex-shrink-0">
                                        🎯
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                                        <p className="text-gray-700">
                                            To inject youthful energy and modern innovation into every business, creating digital experiences that are as dynamic as the world we live in.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center text-white text-2xl flex-shrink-0">
                                        👁️
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Our Vision</h4>
                                        <p className="text-gray-700">
                                            To be the trusted voice of the next generation in digital storytelling, redefining what is possible for businesses worldwide.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="card bg-gradient-to-br from-pink-50 to-pink-100 border-l-4 border-pink-500">
                                <div className="flex items-start gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-pink-500 flex items-center justify-center text-white text-2xl flex-shrink-0">
                                        ⚡
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">What Drives Us</h4>
                                        <p className="text-gray-700">
                                            The hunger to create, the courage to innovate, and the boundless energy of a young team committed to your success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Impact Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid md:grid-cols-4 gap-8 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl"
                    >
                        {[
                            { number: '2024', label: 'Founded' },
                            { number: '15+', label: 'Projects Delivered' },
                            { number: '10+', label: 'Happy Clients' },
                            { number: '99%', label: 'On-Time Delivery Rate' },
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl font-bold text-gradient-multi mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SEO Content Section */}
            <SEOContent />

            {/* Industries We Serve */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="mb-6">Industries We Serve</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Specialized expertise across diverse sectors
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="card text-center p-8 hover:shadow-lg transition-all"
                            >
                                <div className="text-5xl mb-4">
                                    {industry.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-800">{industry.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-padding">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="mb-6">Our Values</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                            >
                                <div className={`icon-box-${value.color} mb-6`}>
                                    <div className="text-3xl">{value.icon}</div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Promise */}
            <section className="section-padding bg-white">
                <div className="container-custom max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="mb-6">What We Promise</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: 'Transparent Communication',
                                desc: "You'll always know what we're working on, why we're doing it, and what results to expect. No jargon, no surprises."
                            },
                            {
                                title: 'Data-Driven Decisions',
                                desc: "Every recommendation is backed by research, analytics, and proven best practices. We don't guess—we know."
                            },
                            {
                                title: 'On-Time Delivery',
                                desc: 'We respect your time and deadlines. When we commit to a timeline, we deliver on it.'
                            },
                            {
                                title: 'Measurable Results',
                                desc: 'We track every metric that matters to your business and provide clear, actionable reports on our progress.'
                            },
                            {
                                title: 'Honest Advice',
                                desc: "If something won't work for your business, we'll tell you. We're here to help you succeed, not just sell services."
                            },
                            {
                                title: 'Ongoing Support',
                                desc: "Our relationship doesn't end at launch. We're committed to your long-term success and continuous improvement."
                            },
                        ].map((promise, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-xl">
                                        ✓
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{promise.title}</h3>
                                    <p className="text-gray-600">{promise.desc}</p>
                                </div>
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
                            Let's work together
                        </h2>
                        <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
                            Ready to take your business to the next level? Let's start a conversation
                            about your goals and how we can help you achieve them.
                        </p>
                        <Link to="/contact">
                            <button className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 text-lg shadow-xl">
                                Get in Touch
                                <FiArrowRight />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default About
