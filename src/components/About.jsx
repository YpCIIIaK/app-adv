import React from 'react'

export default function About() {
    return (
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="relative max-w-xl mx-auto">
                <svg
                    className="absolute left-full transform translate-x-1/2"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <svg
                    className="absolute right-full bottom-0 transform -translate-x-1/2"
                    width={404}
                    height={404}
                    fill="none"
                    viewBox="0 0 404 404"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="85737c0e-0916-41d7-917f-596dc7edfa27"
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width={404} height={404} fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
                </svg>
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">About FocusTrack</h2>
                    <p className="mt-4 text-lg leading-6 text-gray-500">
                        FocusTrack is a revolutionary productivity app designed to help you manage your time, track your progress, and achieve your goals.
                    </p>
                </div>
                <div className="mt-12">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Our Mission</h3>
                            <p className="mt-2 text-base text-gray-500">
                                At FocusTrack, our mission is to empower individuals and teams to maximize their productivity and achieve their full potential. We believe that with the right tools and insights, anyone can improve their focus, manage their time more effectively, and accomplish their goals.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Our Story</h3>
                            <p className="mt-2 text-base text-gray-500">
                                FocusTrack was born out of a personal need for a comprehensive productivity tool. Our founders, struggling with time management and procrastination, couldn't find an app that combined all the features they needed. So, they decided to create one themselves.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Our Approach</h3>
                            <p className="mt-2 text-base text-gray-500">
                                We've combined proven productivity techniques like the Pomodoro method with cutting-edge technology to create a powerful, yet easy-to-use app. FocusTrack adapts to your work style, providing personalized insights and recommendations to help you work smarter, not harder.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Join Us</h3>
                            <p className="mt-2 text-base text-gray-500">
                                Whether you're a student, professional, entrepreneur, or anyone looking to boost their productivity, FocusTrack is here to help. Join our community of focused achievers and start your journey to peak productivity today.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}