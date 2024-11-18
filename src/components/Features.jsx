import React from 'react'
import { ClockIcon, ChartBarIcon, CheckCircleIcon, BoltIcon } from '@heroicons/react/24/outline'


const features = [
    {
        name: 'Time Tracking',
        description: 'Easily track your time spent on tasks and projects.',
        icon: ClockIcon,
    },
    {
        name: 'Productivity Analytics',
        description: 'Gain insights into your work patterns and productivity trends.',
        icon: ChartBarIcon,
    },
    {
        name: 'Goal Setting',
        description: 'Set and track your personal and professional goals.',
        icon: CheckCircleIcon,
    },
    {
        name: 'Pomodoro Technique',
        description: 'Use the proven Pomodoro method to boost your focus and productivity.',
        icon: BoltIcon,
    },
]

export default function Features() {
    return (
        <div id="features" className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to boost productivity
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        FocusTrack provides a comprehensive set of tools to help you manage your time and increase your productivity.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}