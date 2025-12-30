import React from 'react'
import SEO from '../../components/SEO'
import { Link } from 'react-router-dom'

const WebDevelopment = () => {
    return (
        <>
            <SEO
                title="Custom Web Design & Development Agency Near You | DesignHub"
                description="Looking for local web developers? We build fast, responsive websites for businesses in your area. Get a custom quote today."
                canonical="https://www.designhub.com/services/web-development"
            />
            <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
                <div className="mb-12">
                    <Link to="/services" className="text-lime-600 hover:underline mb-4 inline-block">&larr; Back to Services</Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Web Development Services</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        We build robust, scalable, and secure web solutions that drive business growth. From simple landing pages to complex web applications.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Our Technology Stack</h2>
                        <ul className="space-y-3 text-gray-700">
                            <li>• React.js & Next.js Development</li>
                            <li>• Full-Stack Solutions (Node.js, Python)</li>
                            <li>• E-commerce Development</li>
                            <li>• CMS Integration</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4">Performance First</h3>
                        <p className="text-gray-600">
                            Speed matters. Our websites are optimized for Core Web Vitals, ensuring fast load times and a seamless user experience that search engines love.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WebDevelopment
