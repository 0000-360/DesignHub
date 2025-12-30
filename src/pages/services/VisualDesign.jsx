import React from 'react'
import SEO from '../../components/SEO'
import { Link } from 'react-router-dom'

const VisualDesign = () => {
    return (
        <>
            <SEO
                title="Visual Design Services | Graphic Design & Branding"
                description="Captivate your audience with stunning visual design. From logos to marketing collateral, we create visuals that tell your story."
                canonical="https://www.designhub.com/services/visual-design"
            />
            <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
                <div className="mb-12">
                    <Link to="/services" className="text-lime-600 hover:underline mb-4 inline-block">&larr; Back to Services</Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Visual Design Services</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        We create visually compelling designs that communicate your brand's message effectively and emotionally connect with your audience.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Design Services</h2>
                        <ul className="space-y-3 text-gray-700">
                            <li>• Logo & Brand Identity Design</li>
                            <li>• Marketing Collateral & Print Design</li>
                            <li>• Illustration & Iconography</li>
                            <li>• Motion Graphics</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4">Aesthetics Meet Function</h3>
                        <p className="text-gray-600">
                            Our designs aren't just beautiful; they are strategic. We ensure every visual element serves a purpose and reinforces your brand identity.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisualDesign
