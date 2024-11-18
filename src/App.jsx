import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CallToAction from './components/CTA'
import Footer from './components/Footer'
import About from './components/About'
import Download from './components/Download'

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <Features />
                            <Testimonials />
                            <Pricing />
                            <CallToAction />
                        </>
                    } />
                    <Route path="/about" element={<About />} />
                    <Route path="/download" element={<Download />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}