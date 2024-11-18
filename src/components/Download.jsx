import React from 'react'
import { FaApple, FaAndroid } from 'react-icons/fa'

export default function Download() {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Ready to dive in?</span>
                    <span className="block text-blue-600">Download FocusTrack today.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                        >
                            <FaApple className="w-6 h-6 mr-2" />
                            Download for iOS
                        </a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                        >
                            <FaAndroid className="w-6 h-6 mr-2" />
                            Download for Android
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            Get started with FocusTrack
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500">
                            Download FocusTrack now and take control of your productivity. Our app is available on both iOS and Android platforms, ensuring you can stay focused and achieve your goals no matter what device you're using.
                        </p>
                        <div className="mt-8 sm:flex">
                            <div className="rounded-md shadow">
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                                >
                                    Create free account
                                </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a
                                    href="#"
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                                >
                                    Contact sales
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                            <img
                                className="max-h-12"
                                src="/app-store-badge.svg"
                                alt="App Store"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                            <img
                                className="max-h-12"
                                src="/google-play-badge.svg"
                                alt="Google Play"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                            <img
                                className="max-h-12"
                                src="/trusted-app-badge.svg"
                                alt="Trusted App"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                            <img
                                className="max-h-12"
                                src="/secure-badge.svg"
                                alt="Secure"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}