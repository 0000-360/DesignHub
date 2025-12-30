import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-gradient mb-6">Blog & Resources</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Insights, tips, and industry trends
                    </p>
                </motion.div>

                <div className="glass p-12 rounded-3xl text-center">
                    <p className="text-2xl text-gray-300">Blog coming soon...</p>
                    <Link to="/" className="inline-block mt-8">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-secondary-yellow to-secondary-orange text-white font-bold"
                        >
                            Back to Home
                        </motion.button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Blog
