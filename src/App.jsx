import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loading from './components/Loading'
// // import Chatbot from './components/Chatbot'

// ...

// <Chatbot />

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const CaseStudies = lazy(() => import('./pages/CaseStudies'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Blog = lazy(() => import('./pages/Blog'))
const Pricing = lazy(() => import('./pages/Pricing'))

// Service Pages
const BrandStrategy = lazy(() => import('./pages/services/BrandStrategy'))
const WebDevelopment = lazy(() => import('./pages/services/WebDevelopment'))
const DigitalMarketing = lazy(() => import('./pages/services/DigitalMarketing'))
const VisualDesign = lazy(() => import('./pages/services/VisualDesign'))
const UIUXDesign = lazy(() => import('./pages/services/UIUXDesign'))
const ContentCreation = lazy(() => import('./pages/services/ContentCreation'))
const AISolutions = lazy(() => import('./pages/services/AISolutions'))

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-offwhite">
                <Navbar />
                <div className="pt-24">
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/case-studies" element={<CaseStudies />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/pricing" element={<Pricing />} />

                            {/* Service Routes */}
                            <Route path="/services/brand-strategy" element={<BrandStrategy />} />
                            <Route path="/services/web-development" element={<WebDevelopment />} />
                            <Route path="/services/ai-solutions" element={<AISolutions />} />
                            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
                            <Route path="/services/visual-design" element={<VisualDesign />} />
                            <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
                            <Route path="/services/content-creation" element={<ContentCreation />} />
                            <Route path="/services/ai-solutions" element={<AISolutions />} />
                        </Routes>
                    </Suspense>
                </div>
                <Footer />
                {/* <Chatbot /> */}
            </div>
        </Router>
    )
}

export default App


