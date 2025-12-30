import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import {
    FiCode, FiPenTool, FiLayers, FiTrendingUp, FiMessageSquare,
    FiTarget, FiMail, FiBarChart, FiVideo, FiEdit3, FiGlobe,
    FiInstagram, FiArrowRight, FiCheck, FiCpu
} from 'react-icons/fi'

const Services = () => {
    const services = [
        {
            icon: <FiCode />,
            title: 'Web Design & Development',
            color: 'orange',
            shortDesc: 'Custom websites that convert visitors into customers',
            detailedDesc: [
                'We create stunning, responsive websites tailored to your brand identity and business goals.',
                'Our designs focus on user experience, ensuring visitors can easily navigate and take action.',
                'Every website is built with clean, modern code that loads fast and ranks well on search engines.',
                'We ensure mobile-first design so your site looks perfect on all devices and screen sizes.',
                'From simple landing pages to complex web applications, we deliver solutions that drive results.'
            ],
            features: [
                'Responsive Design',
                'Fast Loading Speed',
                'SEO Optimized',
                'Mobile-First Approach',
                'Custom Functionality',
                'Content Management System'
            ],
            process: ['Discovery & Planning', 'Design Mockups', 'Development', 'Testing & Launch'],
            path: '/services/web-development'
        },
        {
            icon: <FiCpu />,
            title: 'AI Solutions & Automation',
            color: 'blue',
            shortDesc: 'Leverage AI to streamline operations and enhance experiences',
            detailedDesc: [
                'Artificial Intelligence is transforming business—we help you stay ahead of the curve with practical solutions.',
                'We implement custom AI chatbots and virtual assistants to provide 24/7 customer support and engagement.',
                'Our process automation solutions reduce manual repetitive work, saving you time and operational costs.',
                'We use predictive analytics to help you make smarter, data-driven business decisions with confidence.',
                'From personalized recommendations to automated content generation, we unlock the power of AI for your brand.'
            ],
            features: [
                'Custom Chatbots',
                'Process Automation',
                'Predictive Analytics',
                'AI Content Ops',
                'Personalization Engines',
                'Data Insights'
            ],
            process: ['AI Assessment', 'Strategy Design', 'Implementation', 'Training & optimization'],
            path: '/services/ai-solutions'
        },
        {
            icon: <FiPenTool />,
            title: 'Branding & Visual Identity',
            color: 'blue',
            shortDesc: 'Build a memorable brand that stands out',
            detailedDesc: [
                'Your brand is more than just a logo—it\'s the complete visual and emotional experience of your business.',
                'We craft unique brand identities that tell your story and resonate deeply with your target audience.',
                'Our comprehensive branding includes logo design, color palettes, typography, and brand guidelines.',
                'We ensure consistency across all touchpoints, from business cards to social media and websites.',
                'A strong brand identity builds trust, recognition, and loyalty with your customers.'
            ],
            features: [
                'Logo Design',
                'Brand Guidelines',
                'Color Palette',
                'Typography System',
                'Business Cards',
                'Brand Collateral'
            ],
            process: ['Brand Discovery', 'Concept Development', 'Design Refinement', 'Delivery & Guidelines'],
            path: '/services/brand-strategy'
        },
        {
            icon: <FiLayers />,
            title: 'UI/UX Design',
            color: 'pink',
            shortDesc: 'Intuitive interfaces that users love',
            detailedDesc: [
                'Great design is invisible—users should accomplish their goals effortlessly without thinking about the interface.',
                'We conduct thorough user research to understand your audience\'s needs, behaviors, and pain points.',
                'Our designs prioritize usability, accessibility, and visual appeal to create delightful user experiences.',
                'We create wireframes, prototypes, and high-fidelity designs that are tested with real users.',
                'The result is an interface that not only looks beautiful but drives engagement and conversions.'
            ],
            features: [
                'User Research',
                'Wireframing',
                'Interactive Prototypes',
                'Usability Testing',
                'Design Systems',
                'Accessibility Compliance'
            ],
            process: ['Research & Analysis', 'Wireframing', 'Visual Design', 'Prototyping & Testing'],
            path: '/services/ui-ux-design'
        },
        {
            icon: <FiTrendingUp />,
            title: 'SEO & Digital Marketing',
            color: 'yellow',
            shortDesc: 'Get found online and grow your business',
            detailedDesc: [
                'Being online isn\'t enough—you need to be found by the right people at the right time.',
                'Our SEO strategies combine technical optimization, content creation, and link building for maximum visibility.',
                'We conduct in-depth keyword research to target terms your customers are actually searching for.',
                'Our data-driven approach tracks every metric, allowing us to continuously optimize for better results.',
                'From local SEO to national campaigns, we help you dominate search results and drive qualified traffic.'
            ],
            features: [
                'Keyword Research',
                'On-Page SEO',
                'Technical SEO',
                'Link Building',
                'Content Strategy',
                'Analytics & Reporting'
            ],
            process: ['SEO Audit', 'Strategy Development', 'Implementation', 'Monitoring & Optimization'],
            path: '/services/digital-marketing'
        },
        {
            icon: <FiMessageSquare />,
            title: 'Social Media Marketing',
            color: 'green',
            shortDesc: 'Build community and engage your audience',
            detailedDesc: [
                'Social media is where your customers spend their time—we help you meet them there with compelling content.',
                'We create and execute comprehensive social media strategies across all major platforms.',
                'Our team handles everything from content creation to community management and paid advertising.',
                'We craft engaging posts, stories, and videos that spark conversations and build brand loyalty.',
                'With detailed analytics and reporting, you\'ll see exactly how social media drives your business growth.'
            ],
            features: [
                'Content Creation',
                'Post Scheduling',
                'Community Management',
                'Paid Advertising',
                'Influencer Outreach',
                'Performance Analytics'
            ],
            process: ['Strategy Planning', 'Content Creation', 'Publishing & Engagement', 'Analysis & Optimization'],
            path: '/services/digital-marketing'
        },
        {
            icon: <FiTarget />,
            title: 'Conversion-Focused Landing Pages',
            color: 'orange',
            shortDesc: 'Turn traffic into leads and sales',
            detailedDesc: [
                'A landing page has one job: convert visitors into customers, leads, or subscribers.',
                'We design high-converting landing pages using proven psychology and persuasion principles.',
                'Every element is strategically placed to guide visitors toward your desired action.',
                'We A/B test headlines, copy, images, and CTAs to maximize your conversion rates.',
                'Whether for product launches, lead generation, or event registration, we create pages that perform.'
            ],
            features: [
                'Conversion Optimization',
                'A/B Testing',
                'Compelling Copywriting',
                'Strategic CTAs',
                'Form Optimization',
                'Analytics Integration'
            ],
            process: ['Goal Definition', 'Design & Copywriting', 'Development', 'Testing & Optimization'],
            path: '/services/web-development'
        },
        {
            icon: <FiVideo />,
            title: 'Video Editing & Production',
            color: 'blue',
            shortDesc: 'Professional videos that captivate',
            detailedDesc: [
                'Video content is the most engaging format online—we help you create videos that stop the scroll.',
                'Our team handles everything from concept development to filming, editing, and post-production.',
                'We create promotional videos, explainer videos, social media content, and corporate presentations.',
                'Every video is optimized for your target platform, whether it\'s YouTube, Instagram, or your website.',
                'With professional editing, motion graphics, and sound design, your videos will stand out from the competition.'
            ],
            features: [
                'Video Editing',
                'Motion Graphics',
                'Color Grading',
                'Sound Design',
                'Subtitles & Captions',
                'Platform Optimization'
            ],
            process: ['Concept Development', 'Filming/Sourcing', 'Editing & Effects', 'Delivery & Publishing'],
            path: '/services/content-creation'
        },
        {
            icon: <FiEdit3 />,
            title: 'Content Creation (Posters, Graphics)',
            color: 'pink',
            shortDesc: 'Eye-catching visuals for every platform',
            detailedDesc: [
                'Great content grabs attention in a crowded feed—we create visuals that make people stop and engage.',
                'Our designers create custom posters, social media graphics, infographics, and promotional materials.',
                'Every design aligns with your brand identity while being optimized for maximum engagement.',
                'We understand platform-specific requirements and best practices for Instagram, Facebook, LinkedIn, and more.',
                'From daily social posts to campaign materials, we keep your visual content fresh and on-brand.'
            ],
            features: [
                'Social Media Graphics',
                'Posters & Flyers',
                'Infographics',
                'Ad Creatives',
                'Presentation Design',
                'Print Materials'
            ],
            process: ['Brief & Research', 'Concept Design', 'Revisions', 'Final Delivery'],
            path: '/services/visual-design'
        },
        {
            icon: <FiGlobe />,
            title: 'Domain & Hosting Management',
            color: 'yellow',
            shortDesc: 'Reliable hosting and domain services',
            detailedDesc: [
                'Your website needs a solid foundation—we handle all technical aspects of domains and hosting.',
                'We help you choose the perfect domain name that reflects your brand and is easy to remember.',
                'Our hosting solutions are fast, secure, and scalable to grow with your business needs.',
                'We manage SSL certificates, backups, security updates, and technical maintenance.',
                'With 99.9% uptime and 24/7 monitoring, your website stays online and performs at its best.'
            ],
            features: [
                'Domain Registration',
                'DNS Management',
                'SSL Certificates',
                'Fast SSD Hosting',
                'Daily Backups',
                'Security Monitoring'
            ],
            process: ['Domain Selection', 'Hosting Setup', 'Configuration', 'Ongoing Management'],
            path: '/services/web-development'
        },
        {
            icon: <FiMail />,
            title: 'Email Marketing Campaigns',
            color: 'green',
            shortDesc: 'Reach customers directly in their inbox',
            detailedDesc: [
                'Email marketing delivers the highest ROI of any digital marketing channel when done right.',
                'We create beautiful, mobile-responsive email templates that reflect your brand identity.',
                'Our campaigns are strategically segmented to send the right message to the right people.',
                'We write compelling subject lines and copy that drive opens, clicks, and conversions.',
                'With detailed analytics, you\'ll see exactly how each campaign performs and contributes to revenue.'
            ],
            features: [
                'Email Template Design',
                'List Segmentation',
                'Automated Workflows',
                'A/B Testing',
                'Personalization',
                'Performance Tracking'
            ],
            process: ['Strategy & Planning', 'Template Design', 'Campaign Setup', 'Send & Analyze'],
            path: '/services/digital-marketing'
        },
        {
            icon: <FiBarChart />,
            title: 'Analytics & Reporting',
            color: 'orange',
            shortDesc: 'Data-driven insights for better decisions',
            detailedDesc: [
                'You can\'t improve what you don\'t measure—we provide clear insights into your marketing performance.',
                'We set up comprehensive tracking across your website, social media, and advertising campaigns.',
                'Our custom dashboards make it easy to see your key metrics at a glance.',
                'We provide regular reports that explain what\'s working, what\'s not, and what to do next.',
                'With actionable recommendations based on real data, you can make informed decisions that drive growth.'
            ],
            features: [
                'Google Analytics Setup',
                'Custom Dashboards',
                'Conversion Tracking',
                'ROI Analysis',
                'Monthly Reports',
                'Strategic Recommendations'
            ],
            process: ['Tracking Setup', 'Data Collection', 'Analysis', 'Reporting & Insights'],
            path: '/services/digital-marketing'
        },
        {
            icon: <FiInstagram />,
            title: 'Social Media Account Management',
            color: 'blue',
            shortDesc: 'Full-service social media handling',
            detailedDesc: [
                'Managing social media takes time and expertise—let us handle it while you focus on your business.',
                'We create a content calendar, design posts, write captions, and schedule everything in advance.',
                'Our team actively monitors your accounts, responds to comments, and engages with your community.',
                'We stay on top of trends and platform changes to keep your content fresh and relevant.',
                'Monthly reports show your growth in followers, engagement, and how social media drives business results.'
            ],
            features: [
                'Content Planning',
                'Daily Posting',
                'Community Engagement',
                'Hashtag Strategy',
                'Trend Monitoring',
                'Growth Analytics'
            ],
            process: ['Account Audit', 'Strategy Development', 'Content Creation & Posting', 'Engagement & Reporting'],
            path: '/services/digital-marketing'
        },
    ]

    return (
        <div className="overflow-hidden">
            <SEO
                title="Digital Services | Web Design, AI Solutions & Branding"
                description="Explore our data-driven services: AI Solutions, Local SEO, Web Development, and Brand Strategy designed for startups and growing businesses."
                canonical="https://www.designhub.com/services"
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
                            What We Offer
                        </p>
                        <h1 className="mb-6">Our Services</h1>
                        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                            Comprehensive digital solutions to help your business thrive online.
                            From design to marketing, we've got you covered.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="space-y-20">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Service Info */}
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className={`icon-box-${service.color} mb-6`}>
                                        <div className="text-4xl">{service.icon}</div>
                                    </div>
                                    <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                                    <p className="text-xl text-gray-600 mb-6 font-medium">
                                        {service.shortDesc}
                                    </p>

                                    {/* 5-line detailed description */}
                                    <div className="space-y-3 mb-8">
                                        {service.detailedDesc.map((line, i) => (
                                            <p key={i} className="text-gray-700 leading-relaxed flex items-start gap-3">
                                                <FiCheck className={`text-${service.color}-500 mt-1 flex-shrink-0`} />
                                                <span>{line}</span>
                                            </p>
                                        ))}
                                    </div>

                                    <Link to={service.path}>
                                        <button className="btn-primary">
                                            Learn More
                                            <FiArrowRight />
                                        </button>
                                    </Link>
                                </div>

                                {/* Service Features & Process */}
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <div className="card">
                                        <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            {service.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-2">
                                                    <div className={`w-2 h-2 rounded-full bg-${service.color}-500`}></div>
                                                    <span className="text-gray-700">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                                        <div className="space-y-4">
                                            {service.process.map((step, i) => (
                                                <div key={i} className="flex items-center gap-4">
                                                    <div className={`w-10 h-10 rounded-full bg-${service.color}-100 flex items-center justify-center text-${service.color}-600 font-bold`}>
                                                        {i + 1}
                                                    </div>
                                                    <span className="text-gray-700 font-medium">{step}</span>
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
                            Ready to get started?
                        </h2>
                        <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed">
                            Let's discuss which services are right for your business.
                            Get a free consultation and custom quote today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <button className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 text-lg shadow-xl">
                                    Get a Free Quote
                                    <FiArrowRight />
                                </button>
                            </Link>
                            <Link to="/pricing">
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-orange-500 transition-all duration-300 inline-flex items-center gap-3 text-lg">
                                    View Pricing
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

export default Services
