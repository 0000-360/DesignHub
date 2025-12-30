import React from 'react'
import SEO from '../../components/SEO'
import { Link } from 'react-router-dom'

const UIUXDesign = () => {
    return (
        <>
            <SEO
                title="UI/UX Design Services | User Interface & Experience Design | DesignHub360"
                description="Create intuitive and engaging digital experiences with DesignHub360's UI/UX design services. We focus on user-centric design principles."
                canonical="https://www.designhub360.in/services/ui-ux-design"
            />
            <div className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
                <div className="mb-12">
                    <Link to="/services" className="text-lime-600 hover:underline mb-4 inline-block">&larr; Back to Services</Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">UI/UX Design Services</h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        User experience is at the heart of everything digital. We design interfaces that are not only visually appealing but also easy to use and navigate.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Our Process</h2>
                        <ul className="space-y-3 text-gray-700">
                            <li>• User Research & Personas</li>
                            <li>• Wireframing & Prototyping</li>
                            <li>• User Testing & Iteration</li>
                            <li>• High-Fidelity UI Design</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4">User-Centric Approach</h3>
                        <p className="text-gray-600">
                            We put your users first. By understanding their needs and behaviors, we create digital products that solve problems and delight users.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UIUXDesign
