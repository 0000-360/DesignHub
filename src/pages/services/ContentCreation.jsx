import React from 'react'
import SEO from '../../components/SEO'
import { Link } from 'react-router-dom'

const ContentCreation = () => {
    return (
        <>
            <SEO
                title="Content Marketing Agency | Copywriting & Strategy"
                description="Engage your audience with high-quality content. Our content creation services include blog writing, copywriting, video production, and more."
                canonical="https://www.designhub.com/services/content-creation"
            />
            <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
                <div className="mb-12">
                    <Link to="/services" className="text-lime-600 hover:underline mb-4 inline-block">&larr; Back to Services</Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">Content Creation Services</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        Content is king. We help you create compelling content that educates, entertains, and inspires your audience to take action.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Content Services</h2>
                        <ul className="space-y-3 text-gray-700">
                            <li>• SEO Copywriting & Blog Writing</li>
                            <li>• Video Production & Editing</li>
                            <li>• Social Media Content</li>
                            <li>• Email Newsletters</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4">Storytelling</h3>
                        <p className="text-gray-600">
                            We help you tell your brand's story in a way that resonates with your audience. Authentic, engaging, and impactful content.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContentCreation
