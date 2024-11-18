import React from 'react'
import { motion } from 'framer-motion'

export default function CallToAction() {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-cyan-400">
            <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">Boost your productivity today.</span>
                    <span className="block">Start using FocusTrack for free.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-blue-100">
                    Join thousands of users who have improved their time management and achieved their goals with FocusTrack.
                </p>
                <motion.div
                    className="mt-8 flex justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <div className="inline-flex rounded-md shadow">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                        >
                            Download for iOS
                        </a>
                    </div>
                    <div className="ml-3 inline-flex">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
                        >
                            Download for Android
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}