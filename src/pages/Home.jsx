import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { FiArrowRight } from 'react-icons/fi'
import websiteImg from '../assets/website_showcase.jpg'
import posterImg from '../assets/poster_showcase.jpg'
import reelsVideo from '../assets/reels_showcase.mp4'

// Services data - minimal, no icons
const services = [
    {
        title: 'Brand Strategy',
        description: 'Position your brand for success with research-driven strategy and clear messaging that resonates with your audience.'
    },
    {
        title: 'Web Development',
        description: 'Fast, responsive websites built with modern technology. Clean code, exceptional performance, seamless user experience.'
    },
    {
        title: 'AI Solutions',
        description: 'Leverage artificial intelligence to automate workflows, analyze data, and create personalized customer experiences.'
    },
    {
        title: 'Digital Marketing',
        description: 'Data-driven campaigns that deliver measurable results. SEO, content, social media, and paid advertising.'
    },
    {
        title: 'Visual Design',
        description: 'Compelling visual identities that tell your story. From logos to complete brand systems.'
    },
    {
        title: 'UX/UI Design',
        description: 'Intuitive interfaces that users love. Research-backed design decisions that drive engagement and conversion.'
    },
    {
        title: 'Content Creation',
        description: 'Strategic content that connects with your audience. Copywriting, video, photography, and more.'
    },

]

const Home = () => {




    return (
        <div className="overflow-hidden">
            <SEO
                title="DesignHub360 | AI Marketing & Web Design Agency in India"
                description="DesignHub360 is India's premier AI-powered marketing agency specializing in web design, local SEO, and brand strategy for growing businesses."
                canonical="https://www.designhub360.in/"
            />
            {/* Organization Schema for Brand Signals */}
            {/* LocalBusiness Schema for Local SEO */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "DesignHub360",
                    "url": "https://www.designhub360.in",
                    "logo": "https://www.designhub360.in/dh-logo-final.png",
                    "image": "https://www.designhub360.in/dh-logo-final.png",
                    "description": "DesignHub360 is India's premier AI-powered marketing agency specializing in web design, local SEO, and brand strategy.",
                    "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "IN"
                    },
                    "priceRange": "$$",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91 94898 28169",
                        "contactType": "customer service"
                    },
                    "sameAs": [
                        "https://www.instagram.com/designhub360",
                        "https://www.linkedin.com/company/designhub360",
                        "https://x.com/designhub_offl"
                    ]
                })}
            </script>
            {/* Hero Section - Playful Professional */}
            <section className="min-h-screen flex items-center bg-white overflow-hidden relative pt-20 lg:pt-0">

                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50/50 rounded-l-[100px] hidden lg:block -z-0"></div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left Content */}
                        <div className="max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-[#FF6B35] font-bold text-sm tracking-wide mb-8">
                                    <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse"></span>
                                    #1 AI-POWERED CREATIVE AGENCY
                                </div>

                                <h1 className="text-5xl lg:text-7xl font-display font-bold text-black leading-[1.1] mb-8">
                                    We build brands that <br />
                                    <span className="relative inline-block text-[#FF6B35]">
                                        pop
                                        <svg className="absolute -bottom-2 w-full h-3 text-[#FF6B35]" viewBox="0 0 100 20" preserveAspectRatio="none">
                                            <path d="M0 15 Q 50 20 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                                        </svg>
                                    </span>
                                    <span className="inline-block ml-4 text-black">and perform.</span>
                                </h1>

                                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                                    Injecting personality into professional strategies. We help bold startups and local businesses scale with AI-powered analytics, custom web design, and results-driven digital marketing services that delight users and convert visitors.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <Link to="/services">
                                        <button className="btn-primary rounded-full shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1">
                                            Start Your Project
                                            <FiArrowRight />
                                        </button>
                                    </Link>
                                    <Link to="/contact">
                                        <button className="px-8 py-4 rounded-full border-2 border-gray-200 text-black font-bold hover:border-black hover:bg-gray-50 transition-all flex items-center gap-3">
                                            View Portfolio
                                            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-xs">
                                                <FiArrowRight />
                                            </span>
                                        </button>
                                    </Link>
                                </div>


                            </motion.div>
                        </div>

                        {/* Right Image - Abstract Creative Composition */}
                        <div className="relative h-[600px] w-full flex items-center justify-center">

                            {/* Floating Decorative Elements Behind */}
                            <motion.div
                                animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 right-0 lg:-right-20 w-48 h-48 bg-orange-100 rounded-full blur-3xl opacity-60 z-0"
                            ></motion.div>
                            <motion.div
                                animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-0 left-0 lg:-left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-60 z-0"
                            ></motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="relative z-10 w-full max-w-md aspect-square"
                            >
                                {/* Main Organic Shape Container */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FFF0E6] to-white rounded-[40px] shadow-2xl skew-y-1 hover:skew-y-0 transition-transform duration-500 flex items-center justify-center overflow-hidden border border-white">

                                    {/* Animated Gradient Grids/Orbs */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNGRjZCNTMiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-50"
                                    ></motion.div>

                                    {/* Central Abstract Element */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="relative z-20 w-48 h-48 bg-white/40 backdrop-blur-xl rounded-full border border-white/60 shadow-lg flex items-center justify-center"
                                    >
                                        <div className="text-center">
                                            <div className="text-5xl mb-1 filter drop-shadow-md">✨</div>
                                            <div className="font-bold text-lg text-gray-800 tracking-tight">Creative<br />Powerhouse</div>
                                        </div>

                                        {/* Orbiting Dot */}
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 rounded-full"
                                        >
                                            <div className="w-4 h-4 bg-[#FF6B35] rounded-full absolute -top-2 left-1/2 transform -translate-x-1/2 shadow-lg"></div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Floating Stats Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute bottom-16 -right-4 lg:right-10 bg-white p-5 rounded-2xl shadow-xl z-20 border border-gray-100 max-w-[200px]"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-bold text-lg">
                                        ₹
                                    </div>
                                    <div className="text-sm font-bold text-gray-800">ROI Focused</div>
                                </div>
                                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "85%" }}
                                        transition={{ duration: 1.5, delay: 0.8 }}
                                        className="h-full bg-blue-500 rounded-full"
                                    ></motion.div>
                                </div>
                            </motion.div>

                            {/* Abstract Floating Emoji */}
                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-24 left-0 lg:left-10 text-6xl filter drop-shadow-xl z-20 transform -rotate-12"
                            >
                                🚀
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Marquee Section */}
            <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
                <div className="container-custom mb-8 text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">Trusted by innovative companies</p>
                </div>

                <div className="w-full overflow-hidden">
                    <motion.div
                        className="flex items-center gap-20 w-max"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        {/* Duplicate lists for seamless looping */}
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex items-center gap-20 shrink-0">
                                <img
                                    src="/client-mm-tigers-new.png"
                                    alt="MM Tigers Sports Academy"
                                    className="h-40 w-auto object-contain"
                                />
                                <img
                                    src="/client-flick-badminton.jpg"
                                    alt="Flick Badminton Academy"
                                    className="h-40 w-auto object-contain"
                                />
                                <img
                                    src="/client-think-rite-academy.jpg"
                                    alt="Think Rite Academy"
                                    className="h-40 w-auto object-contain"
                                />
                                <img
                                    src="/client-appu-pattasu-new.png"
                                    alt="Appu Pattasu Kadai"
                                    className="h-40 w-auto object-contain"
                                />
                                <img
                                    src="/logo.jpg"
                                    alt="Aashirvadh Sports Academy"
                                    className="h-40 w-auto object-contain"
                                />

                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Section - Staggered Layout */}
            <section style={{ paddingTop: '120px', paddingBottom: '120px' }} className="bg-white">
                <div className="container-custom">
                    <div className="mb-20">
                        <p className="text-sm uppercase tracking-wider text-black-light font-medium mb-4">
                            What We Do
                        </p>
                        <h2 className="max-w-2xl">
                            Services designed for growth
                        </h2>
                    </div>

                    {/* Staggered Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`card-service ${index % 3 === 0 ? 'md:col-span-2' : ''}`}
                            >
                                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                                <p className="text-black-light leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <Link
                                    to="/services"
                                    className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                                >
                                    Learn more
                                    <FiArrowRight />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <Link to="/services">
                            <button className="btn-secondary">
                                View All Services
                                <FiArrowRight />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Creative Work Section - Showcase */}
            <section className="py-24 bg-gradient-to-b from-white to-orange-50/30 overflow-hidden relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                <div className="absolute -left-20 top-40 w-72 h-72 bg-orange-200/20 rounded-full blur-[100px]"></div>
                <div className="absolute -right-20 bottom-40 w-72 h-72 bg-blue-200/20 rounded-full blur-[100px]"></div>

                <div className="container-custom relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-sm uppercase tracking-wider text-[#FF6B35] font-bold mb-4">Portfolio</p>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Latest Creative Work</h2>
                            <p className="text-gray-600 text-lg">
                                From pixel-perfect websites to viral reels and stunning posters, we create digital assets that capture attention.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                        {/* 1. Website Showcase */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-gray-100 bg-white">
                                <img src={websiteImg} alt="Website Project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                                {/* Overlay Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-orange-400 font-bold text-sm mb-2">Web Design & Development</p>
                                        <h3 className="text-white text-2xl font-bold mb-4">Skating Academy Promotional Website</h3>
                                        <a
                                            href="https://www.mmtigerssportsacademy.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full text-center px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-[#FF6B35] hover:text-white transition-colors mb-3"
                                        >
                                            Visit Website
                                        </a>
                                       
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 2. Poster Design */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-gray-100 bg-white">
                                <img src={posterImg} alt="Poster Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-orange-400 font-bold text-sm mb-2">Dashboard</p>
                                        <h3 className="text-white text-2xl font-bold mb-2">For Student analysis</h3>
                                        <a
                                            href="https://v0-badminton-academy-dashboard.vercel.app/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full text-center px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-[#FF6B35] hover:text-white transition-colors"
                                        >
                                            Visit Website
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 3. Reels Editing */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ y: -10 }}
                            className="group"
                        >
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-gray-100 bg-black">
                                <video src={reelsVideo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loop muted playsInline autoPlay />

                                {/* Play Icon Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                                    </div>
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-orange-400 font-bold text-sm mb-2">Video Editing</p>
                                        <h3 className="text-white text-2xl font-bold mb-2">Viral Instagram Reel</h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Process Section - Horizontal Timeline */}
            <section style={{ paddingTop: '120px', paddingBottom: '120px' }} className="bg-white-warm">
                <div className="container-custom">
                    <div className="mb-20">
                        <p className="text-sm uppercase tracking-wider text-black-light font-medium mb-4">
                            Our Process
                        </p>
                        <h2 className="max-w-2xl">
                            Simple, proven approach
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-16">
                        <div>
                            <div className="font-mono text-sm text-black-light mb-4">01</div>
                            <h4 className="mb-4">Discover & Strategy</h4>
                            <p className="text-black-light leading-relaxed">
                                We dive deep into your business goals, target audience, and competitive landscape to create a winning strategy.
                            </p>
                        </div>
                        <div>
                            <div className="font-mono text-sm text-black-light mb-4">02</div>
                            <h4 className="mb-4">Design & Build</h4>
                            <p className="text-black-light leading-relaxed">
                                Our expert team brings your vision to life with stunning designs and robust development.
                            </p>
                        </div>
                        <div>
                            <div className="font-mono text-sm text-black-light mb-4">03</div>
                            <h4 className="mb-4">Launch & Scale</h4>
                            <p className="text-black-light leading-relaxed">
                                We launch your project and continue optimizing for growth and maximum ROI.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section - Added for SEO Content Depth */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-sm uppercase tracking-wider text-orange-500 font-bold mb-4">Why Choose DesignHub360?</p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Expertise that drives real business results</h2>
                        <p className="text-gray-600 leading-relaxed">
                            In a crowded digital landscape, you need a partner who understands both the art of design and the science of marketing. Our AI-driven approach ensures your brand not only looks exceptional but performs exceptionally.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <h4 className="text-xl font-bold mb-3">AI-Powered Insights</h4>
                            <p className="text-gray-600 text-sm">We leverage cutting-edge artificial intelligence to analyze market trends and optimize your campaigns for maximum ROI.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <h4 className="text-xl font-bold mb-3">Custom Web Design</h4>
                            <p className="text-gray-600 text-sm">No templates here. We build fast, responsive, and SEO-friendly websites tailored specifically to your brand identity.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <h4 className="text-xl font-bold mb-3">Local SEO Experts</h4>
                            <p className="text-gray-600 text-sm">Valid strategies to help you dominate local search results and connect with customers in your specific geographic area.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <h4 className="text-xl font-bold mb-3">Holistic Growth</h4>
                            <p className="text-gray-600 text-sm">From brand strategy to content creation, we handle every aspect of your digital presence to ensure consistent growth.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Minimal */}

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
                            Ready to grow<br />
                            your brand?
                        </h2>
                        <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
                            Let's create something amazing together. Get in touch and
                            let's discuss how we can help your business reach new heights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <button className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 text-lg shadow-xl">
                                    Start Your Project
                                    <FiArrowRight />
                                </button>
                            </Link>
                            <Link to="/pricing">
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300 inline-flex items-center gap-3 text-lg">
                                    Learn More
                                    <FiArrowRight />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Home
