import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-cyan-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0">
                            <img className="h-8 w-8" src="/logo.svg" alt="FocusTrack" />
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/" className="text-white hover:bg-cyan-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                                <Link to="/about" className="text-white hover:bg-cyan-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                                <a href="#features" className="text-white hover:bg-cyan-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Features</a>
                                <a href="#testimonials" className="text-white hover:bg-cyan-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Testimonials</a>
                                <a href="#pricing" className="text-white hover:bg-cyan-600 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Link to="/download" className="bg-white text-blue-500 hover:bg-blue-100 px-4 py-2 rounded-md text-sm font-medium">Download App</Link>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-cyan-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="text-white hover:bg-cyan-600 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                        <Link to="/about" className="text-white hover:bg-cyan-600 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">About</Link>
                        <Link to="/features" className="text-white hover:bg-cyan-600 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Features</Link>
                        <a href="/testimonials" className="text-white hover:bg-cyan-600 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Testimonials</a>
                        <a href="/pricing" className="text-white hover:bg-cyan-600 hover:bg-opacity-75 block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
                        <Link to="/download" className="bg-white text-blue-500 hover:bg-blue-100 block px-3 py-2 rounded-md text-base font-medium">Download App</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}