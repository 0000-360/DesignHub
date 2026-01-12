import { Link } from 'react-router-dom'
import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa'

const services = [
    { name: 'Brand Strategy', path: '/services/brand-strategy' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'AI Solutions', path: '/services/ai-solutions' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'Visual Design', path: '/services/visual-design' },
    { name: 'UX/UI Design', path: '/services/ui-ux-design' },
    { name: 'Content Creation', path: '/services/content-creation' },
]

const company = [
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/case-studies' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
]

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-navy text-white">
            <div className="container-custom" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Brand Column - 40% */}
                    <div className="md:col-span-5">
                        <Link to="/" className="inline-block mb-6">
                            <img
                                src="/dh-logo-footer-updated.png"
                                alt="Design Hub Logo"
                                className="h-24 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-white/70 mb-8 leading-relaxed max-w-sm">
                            A marketing agency built for growth. We help startups and businesses scale with creative design and data-driven strategies.
                        </p>
                        <div className="flex gap-6">
                            <a href="https://x.com/designhub_offl" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300">
                                <FaTwitter className="text-lg" />
                            </a>
                            <a href="https://www.linkedin.com/in/design-hub-198280331/" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300">
                                <FaLinkedinIn className="text-lg" />
                            </a>
                            <a href="https://www.instagram.com/designhub_offl?igsh=MTBqZWRsM2x5eDVzcQ==" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300">
                                <FaInstagram className="text-lg" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300">
                                <FaFacebook className="text-lg" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300">
                                <FaYoutube className="text-lg" />
                            </a>
                        </div>
                    </div>

                    {/* Services Column - 30% */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-semibold mb-6">Services</h4>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <Link
                                        to={service.path}
                                        className="text-white/70 hover:text-white transition-colors"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column - 30% */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-3">
                            {company.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.path}
                                        className="text-white/70 hover:text-white transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <ul className="space-y-3 text-white/70">
                            <li>designhub360contact@gmail.com</li>
                            <li>9489828169</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                        <p className=' text-white/60 hover:text-white transition-colors'>© {currentYear} Design Hub. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link to="/privacy" className="hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms" className="hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
