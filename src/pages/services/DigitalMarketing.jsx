import React from 'react'
import SEO from '../../components/SEO'
import { Link } from 'react-router-dom'

const DigitalMarketing = () => {
    return (
        <>
            <SEO
                title="Digital Marketing Agency | SEO, PPC & Content Marketing"
                description="Drive traffic and convert leads with our comprehensive digital marketing services. SEO, PPC, Social Media, and more."
                canonical="https://www.designhub.com/services/digital-marketing"
            />
            <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
                <div className="mb-12">
                    <Link to="/services" className="text-lime-600 hover:underline mb-4 inline-block">&larr; Back to Services</Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Digital Marketing Services</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        Amplify your brand's reach and achieve your business goals with data-driven digital marketing strategies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Marketing Solutions</h2>
                        <ul className="space-y-3 text-gray-700">
                            <li>• Search Engine Optimization (SEO)</li>
                            <li>• Pay-Per-Click Advertising (PPC)</li>
                            <li>• Social Media Marketing</li>
                            <li>• Email Marketing Campaigns</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4">Results Driven (ROI)</h3>
                        <p className="text-gray-600">
                            We focus on metrics that matter. We track, analyze, and optimize every campaign to ensure you get the best return on your investment.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DigitalMarketing
