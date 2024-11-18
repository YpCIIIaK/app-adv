import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <a href="#features" className="text-base text-gray-300 hover:text-white">
                                            Features
                                        </a>
                                    </li>
                                    <li>
                                        <Link to="/download" className="text-base text-gray-300 hover:text-white">
                                            Download
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#pricing" className="text-base text-gray-300 hover:text-white">
                                            Pricing
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <a href="#" className="text-base text-gray-300 hover:text-white">
                                            Help Center
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-base text-gray-300 hover:text-white">
                                            API Documentation
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-base text-gray-300 hover:text-white">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <Link to="/about" className="text-base text-gray-300 hover:text-white">
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#" className="text-base text-gray-300 hover:text-white">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-base text-gray-300 hover:text-white">
                                            Careers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                                <ul className="mt-4 space-y-4">
                                    <li>
                                        <a href="#" className="text-base text-gray-300 hover:text-white">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-base text-gray-300 hover:text-white">
                                            Terms of Service
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 xl:mt-0">
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                            Subscribe to our newsletter
                        </h3>
                        <p className="mt-4 text-base text-gray-300">
                            Get the latest news and updates from FocusTrack.
                        </p>
                        <form className="mt-4 sm:flex sm:max-w-md">
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                required
                                className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                                placeholder="Enter your email"
                            />
                            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8">
                    <p className="text-base text-gray-400 xl:text-center">
                        &copy; 2023 FocusTrack, Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}