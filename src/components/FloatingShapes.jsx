import { motion } from 'framer-motion'

const FloatingShapes = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Orange Circle */}
            <motion.div
                className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20 blur-3xl"
                animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Blue Square */}
            <motion.div
                className="absolute top-40 left-20 w-48 h-48 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl opacity-20 blur-2xl"
                animate={{
                    rotate: [0, 90, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Pink Circle */}
            <motion.div
                className="absolute bottom-32 right-1/4 w-56 h-56 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-20 blur-3xl"
                animate={{
                    y: [0, -40, 0],
                    x: [0, -30, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Yellow Triangle-ish */}
            <motion.div
                className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl opacity-20 blur-2xl"
                animate={{
                    rotate: [0, -45, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Green Circle */}
            <motion.div
                className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-br from-green-400 to-green-600 rounded-full opacity-15 blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Small accent shapes */}
            <motion.div
                className="absolute top-1/4 right-1/3 w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full opacity-30 blur-xl"
                animate={{
                    y: [0, -20, 0],
                    x: [0, 15, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute bottom-1/3 right-1/2 w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl opacity-25 blur-2xl"
                animate={{
                    rotate: [0, 180, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    )
}

export default FloatingShapes
