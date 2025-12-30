import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiCheck } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData)

        // SEO Tracking: Fire GA4 Event
        if (window.gtag) {
            window.gtag('event', 'generate_lead', {
                'event_category': 'form',
                'event_label': 'contact_page',
                'value': formData.budget // Optional: track estimated value
            });
            console.log('GA4 Event Fired: generate_lead');
        }

        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
    }

    const contactInfo = [
        {
            icon: <FiMail />,
            title: 'Email Us',
            details: ['designhub360contact@gmail.com', 'avin3215@gmail.com'],
            color: 'orange'
        },
        {
            icon: <FiPhone />,
            title: 'Call Us',
            details: ['9489828169', '9047389144'],
            color: 'blue'
        },
    ]

    const services = [
        'Web Design & Development',
        'Branding & Visual Identity',
        'UI/UX Design',
        'SEO & Digital Marketing',
        'Social Media Marketing',
        'Video Editing',
        'Content Creation',
        'Other'
    ]

    const budgets = [
        'Under ₹5,000',
        '₹5,000 - ₹10,000',
        '₹10,000 - ₹25,000',
        '₹25,000 - ₹50,000',
        '₹50,000+'
    ]

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
                            Get In Touch
                        </p>
                        <h1 className="mb-6">Let's Start a Conversation</h1>
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                            Ready to grow your business? Fill out the form below and we'll get back to you
                            within 24 hours with a custom proposal.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="sticky top-32"
                            >
                                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

                                <div className="space-y-6 mb-12">
                                    {contactInfo.map((info, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex gap-4"
                                        >
                                            <div className={`w-14 h-14 rounded-2xl bg-${info.color}-100 flex items-center justify-center text-${info.color}-500 text-2xl flex-shrink-0`}>
                                                {info.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                                                {info.details.map((detail, i) => (
                                                    <p key={i} className="text-gray-600">{detail}</p>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Social Media */}
                                <div>
                                    <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                                    <div className="flex gap-3">
                                        
                                        <a href="https://x.com/designhub_offl#" aria-label="Follow us on Twitter" className="w-12 h-12 rounded-full bg-blue-100 hover:bg-blue-500 text-blue-500 hover:text-white flex items-center justify-center transition-all duration-300">
                                            <FaTwitter />
                                        </a>
                                        <a href="https://www.instagram.com/designhub_offl?igsh=MTBqZWRsM2x5eDVzcQ==" aria-label="Follow us on Instagram" className="w-12 h-12 rounded-full bg-pink-100 hover:bg-pink-500 text-pink-500 hover:text-white flex items-center justify-center transition-all duration-300">
                                            <FaInstagram />
                                        </a>
                                        <a href="https://www.linkedin.com/in/design-hub-198280331/" aria-label="Connect with us on LinkedIn" className="w-12 h-12 rounded-full bg-green-100 hover:bg-green-600 text-green-600 hover:text-white flex items-center justify-center transition-all duration-300">
                                            <FaLinkedinIn />
                                        </a>
                                    </div>
                                </div>

                                {/* Quick Response Promise */}
                                <div className="mt-12 p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
                                            <FiCheck />
                                        </div>
                                        <h3 className="font-bold text-lg">Quick Response Guarantee</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        We respond to all inquiries within 24 hours during business days.
                                        Urgent requests? Call us directly!
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="card"
                            >
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <FiCheck className="text-4xl text-green-500" />
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
                                        <p className="text-xl text-gray-600 mb-8">
                                            We've received your message and will get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="btn-primary"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                                                    placeholder="Naveen"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                                                    placeholder="gmail@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                                                    placeholder="9489828169"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Company Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors"
                                                    placeholder="Your Company"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Service Interested In *
                                                </label>
                                                <select
                                                    name="service"
                                                    required
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors appearance-none bg-white"
                                                >
                                                    <option value="">Select a service</option>
                                                    {services.map((service, index) => (
                                                        <option key={index} value={service}>{service}</option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Budget Range
                                                </label>
                                                <select
                                                    name="budget"
                                                    value={formData.budget}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-full border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors appearance-none bg-white"
                                                >
                                                    <option value="">Select budget range</option>
                                                    {budgets.map((budget, index) => (
                                                        <option key={index} value={budget}>{budget}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Project Details *
                                            </label>
                                            <textarea
                                                name="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows="6"
                                                className="w-full px-4 py-3 rounded-3xl border-2 border-gray-200 focus:border-orange-500 focus:outline-none transition-colors resize-none"
                                                placeholder="Tell us about your project, goals, and timeline..."
                                            ></textarea>
                                        </div>

                                        <button type="submit" className="btn-primary w-full justify-center text-xl">
                                            Send Message
                                            <FiSend />
                                        </button>

                                        <p className="text-sm text-gray-500 text-center">
                                            By submitting this form, you agree to our Privacy Policy and Terms of Service.
                                        </p>
                                    </form>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alternative Contact Methods */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="mb-6">Other Ways to Reach Us</h2>
                    </motion.div>

                    <div className="flex flex-col md:flex-row justify-center gap-8">


                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="card text-center flex-1 max-w-md"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl">
                                📅
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Schedule a Call</h3>
                            <p className="text-gray-600 mb-6">
                                Book a free 30-minute consultation at your convenience
                            </p>
                            <a href="tel:9489828169" className="inline-block">
                                <button className="btn-outline">
                                    Call Now
                                </button>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="card text-center flex-1 max-w-md"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center text-white text-3xl">
                                ❓
                            </div>
                            <h3 className="text-2xl font-bold mb-3">FAQ</h3>
                            <p className="text-gray-600 mb-6">
                                Find quick answers to common questions
                            </p>
                            <Link to="/pricing" className="inline-block">
                                <button className="btn-outline">
                                    View FAQ
                                </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
