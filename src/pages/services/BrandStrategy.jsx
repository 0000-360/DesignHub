import React from 'react'
import SEO from '../../components/SEO'
import { Link } from 'react-router-dom'

const BrandStrategy = () => {
    return (
        <>
            <SEO
                title="Creative Brand Strategy & Identity Design | DesignHub360"
                description="Elevate your brand with world-class strategy and visual identity design from DesignHub360. We craft compelling brand stories that resonate."
                canonical="https://www.designhub360.in/services/brand-strategy"
            />
            <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
                <div className="mb-12">
                    <Link to="/services" className="text-lime-600 hover:underline mb-4 inline-block">&larr; Back to Services</Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Brand Strategy Services</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        Define your identity and build lasting brand equity with our data-driven brand strategy services. We help you connect with your audience and stand out in the market.
                    </p>
                </div>

                {/* Content Sections Placeholder */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Core Services</h2>
                        <ul className="space-y-3 text-gray-700">
                            <li>• Brand Positioning & Messaging</li>
                            <li>• Brand Identity Development</li>
                            <li>• Market Research & Competitor Analysis</li>
                            <li>• Brand Architecture</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4">Why Invest in Brand Strategy?</h3>
                        <p className="text-gray-600">
                            A strong brand strategy is the foundation of your business. It aligns your internal culture with your external image, ensuring consistency and building trust with your customers.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandStrategy
