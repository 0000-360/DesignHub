import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiCheck, FiX, FiArrowRight, FiStar } from 'react-icons/fi'

const Pricing = () => {
    const pricingTiers = [
        {
            name: 'Static Website',
            price: '₹3,000',
            period: '(negotiable)',
            description: 'Professional static website with minimal design (Content provided by client)',
            popular: false,
            color: 'blue',
            features: [
                { included: true, text: 'Static Website ' },
                { included: true, text: 'Mobile Responsive Design' },
                { included: true, text: 'Minimal Design' },
                { included: true, text: 'Basic SEO Setup' },
                { included: true, text: 'Development Time: 2 weeks' },
                { included: true, text: 'Domain & Hosting(negotiable)' },
                { included: true, text: '24/7 Priority Support' },
                { included: false, text: 'Social Media Management' },
                { included: false, text: 'Graphic Design' },
                { included: false, text: 'Video Editing' },
                { included: false, text: 'Paid Advertising' },
                { included: false, text: 'Advanced Analytics' },
                { included: false, text: 'Priority Support' },
            ]
        },
        {
            name: 'Professional Website',
            price: '₹15,000',
            period: '(negotiable)',
            description: 'Full-featured dynamic website with CMS and advanced functionality',
            popular: true,
            color: 'orange',
            features: [
                { included: true, text: 'Dynamic Website (Admin Panel)' },
                { included: true, text: 'Advanced Responsive Design' },
                { included: true, text: 'Comprehensive SEO Strategy' },
                { included: true, text: 'Domain + Premium Hosting' },
                { included: true, text: 'SSL + Security Monitoring' },
                { included: true, text: 'Monthly Analytics Reports' },
                { included: true, text: 'Development Time: 3-4 Weeks' },
                { included: true, text: '24/7 Priority Support' },
                { included: false, text: 'Content Creation' },
                { included: false, text: 'Video Editing' },
                { included: false, text: 'Paid Advertising' },
                { included: false, text: 'Priority Chat Support' },
                { included: false, text: 'Dedicated Account Manager' },
            ]
        },
        {
            name: 'Enterprise',
            price: 'Custom',
            period: '',
            description: 'Complete digital solution for established businesses and brands',
            popular: false,
            color: 'pink',
            features: [
                { included: true, text: 'Unlimited Pages & Features' },
                { included: true, text: 'Custom Web Application' },
                { included: true, text: 'Advanced SEO + Content Strategy' },
                { included: true, text: 'Premium Hosting + CDN' },
                { included: true, text: 'Enterprise Security Suite' },
                { included: true, text: 'Email Marketing (Unlimited)' },
                { included: true, text: 'All Social Media Platforms' },
                { included: true, text: 'Daily Posting + Stories' },
                { included: true, text: 'Unlimited Graphics & Posters' },
                { included: true, text: 'Unlimited Video Editing' },
                { included: true, text: 'Full Paid Ads Management (Unlimited spend)' },
                { included: true, text: 'Real-time Analytics Dashboard' },
                { included: true, text: 'Dedicated Account Manager' },
                { included: true, text: '24/7 Priority Support' },
            ]
        },
    ]

    const addOns = [
        {
            title: 'Extra Social Media Platform',
            price: '₹300/month',
            description: 'Add management for one additional social platform'
        },
        {
            title: 'Additional Video Editing',
            price: '₹350/video',
            description: 'Professional editing for promotional or explainer videos'
        },
        {
            title: 'Custom Poster/Graphic Design',
            price: '₹250/design',
            description: 'One-off custom graphics for campaigns or events'
        },
        {
            title: 'Extra Website Pages',
            price: '₹500/page',
            description: 'Add custom pages to your existing website'
        },
        {
            title: 'Email Campaign Setup',
            price: '₹500',
            description: 'One-time setup for automated email workflows'
        },
        {
            title: 'Branding Package',
            price: '₹1,500',
            description: 'Complete brand identity with logo, guidelines, and assets'
        },
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
                            Transparent Pricing
                        </p>
                        <h1 className="mb-6">Simple, Honest Pricing</h1>
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                            Choose the plan that fits your business needs. All plans include our core services
                            with flexible options to scale as you grow.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Tiers */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {pricingTiers.map((tier, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative ${tier.popular
                                    ? 'lg:-mt-8 lg:mb-8'
                                    : ''
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                        <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                                            <FiStar className="text-yellow-300" />
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className={`card h-full ${tier.popular
                                    ? 'border-2 border-orange-500 shadow-2xl'
                                    : ''
                                    }`}>
                                    <div className="text-center mb-8">
                                        <h3 className="text-3xl font-bold mb-2">{tier.name}</h3>
                                        <p className="text-gray-600 mb-6">{tier.description}</p>
                                        <div className="flex items-end justify-center gap-2">
                                            <span className={`text-5xl font-bold text-${tier.color}-500`}>
                                                {tier.price}
                                            </span>
                                            {tier.period && (
                                                <span className="text-gray-500 text-xl mb-2">{tier.period}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-8">
                                        {tier.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                {feature.included ? (
                                                    <FiCheck className={`text-${tier.color}-500 mt-1 flex-shrink-0`} />
                                                ) : (
                                                    <FiX className="text-gray-300 mt-1 flex-shrink-0" />
                                                )}
                                                <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                                                    {feature.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link to="/contact" className="block">
                                        <button className={`w-full ${tier.popular
                                            ? 'btn-primary'
                                            : 'btn-outline'
                                            }`}>
                                            {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                                            <FiArrowRight />
                                        </button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Add-Ons Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-4">
                            Flexible Options
                        </p>
                        <h2 className="mb-6">Add-On Services</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Customize your plan with additional services as needed
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {addOns.map((addon, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-xl font-bold mb-2">{addon.title}</h3>
                                <div className="text-3xl font-bold text-orange-500 mb-4">
                                    {addon.price}
                                </div>
                                <p className="text-gray-600">{addon.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding">
                <div className="container-custom max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="mb-6">Frequently Asked Questions</h2>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {

                                q: 'What are the payment terms?',
                                a: 'We typically require a 20% advance to start the project, with the remaining 80% due upon project completion and before the final launch.'
                            },
                            {
                                q: 'Is hosting and domain included?',
                                a: 'For the Professional plan, hosting and domain are included for the first year. For the Static plan, we can assist you in purchasing them, or you can provide your own credentials.'
                            },
                            {
                                q: 'Can I add more pages later?',
                                a: 'Yes! You can add extra pages at any time for a flat fee (₹500/page). We can also expand your site\'s functionality as your business grows.'
                            },
                            {
                                q: 'How do renewals work?',
                                a: 'If we manage your hosting/domain, there is an annual renewal fee starting from the second year. If you manage them yourself, you pay your provider directly.'
                            },
                            {
                                q: 'Do you provide support after launch?',
                                a: 'Yes, we provide 24/7 priority support for Professional plans. For Static plans, we offer paid maintenance packages for updates and changes.'
                            },
                            {
                                q: 'How long does it take to build?',
                                a: 'A Static Website typically takes 2 weeks, while a Dynamic Website takes 3-4 weeks depending on the complexity and how quickly we receive your content.'
                            },
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                            >
                                <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
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
                            Still have questions?
                        </h2>
                        <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
                            Schedule a free consultation to discuss your needs and get a custom quote.
                            We'll help you choose the perfect plan for your business.
                        </p>
                        <Link to="/contact">
                            <button className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 text-lg shadow-xl">
                                Schedule Free Consultation
                                <FiArrowRight />
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Pricing
