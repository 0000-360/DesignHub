import { useState, useEffect } from 'react'

const StatsCounter = () => {
    const [counts, setCounts] = useState({
        projects: 0,
        clients: 0,
        satisfaction: 0,
        awards: 0
    })

    useEffect(() => {
        const targets = { projects: 150, clients: 89, satisfaction: 98, awards: 12 }
        const duration = 2000
        const steps = 60
        const interval = duration / steps

        let currentStep = 0
        const timer = setInterval(() => {
            currentStep++
            const progress = currentStep / steps

            setCounts({
                projects: Math.floor(targets.projects * progress),
                clients: Math.floor(targets.clients * progress),
                satisfaction: Math.floor(targets.satisfaction * progress),
                awards: Math.floor(targets.awards * progress)
            })

            if (currentStep >= steps) {
                clearInterval(timer)
                setCounts(targets)
            }
        }, interval)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="flex flex-wrap justify-between gap-8 mt-12 mb-8 border-t border-gray-100 pt-8 w-full">
            <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{counts.projects}+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">Projects</div>
            </div>
            <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{counts.clients}+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">Clients</div>
            </div>
            <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{counts.satisfaction}%</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">Satisfaction</div>
            </div>
            <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{counts.awards}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide mt-1">Awards</div>
            </div>
        </div>
    )
}

export default StatsCounter
