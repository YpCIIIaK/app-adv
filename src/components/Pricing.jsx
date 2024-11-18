import React from 'react'
import { CheckIcon } from '@heroicons/react/24/outline'

const plans = [
    {
        name: 'Free',
        price: '$0',
        features: [
            'Basic time tracking',
            'Limited goal setting',
            'Basic productivity reports',
            '1 Pomodoro timer',
        ],
        cta: 'Get Started',
        mostPopular: false,
    },
    {
        name: 'Premium',
        price: '$9.99',
        features: [
            'Advanced time tracking',
            'Unlimited goal setting',
            'Detailed productivity analytics',
            'Multiple Pomodoro timers',
            'Priority support',
        ],
        cta: 'Start Free Trial',
        mostPopular: true,
    },
    {
        name: 'Team',
        price: '$19.99',
        features: [
            'Everything in Premium',
            'Team collaboration',
            'Project management',
            'Admin controls',
            'API access',
        ],
        cta: 'Contact Sales',
        mostPopular: false,
    },
]

export default function Pricing() {
    return (
        <div id="pricing" className="bg-gray-900">
            <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
                <div className="text-center">
                    <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">Pricing</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                        The right price for you, whoever you are
                    </p>
                    <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
                        Choose the plan that fits your needs. All plans come with a 14-day free trial.
                    </p>
                </div>
            </div>

            <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
                <div className="relative z-0">
                    <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-2/3"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
                            {plans.map((plan, planIdx) => (
                                <div
                                    key={plan.name}
                                    className={`${
                                        plan.mostPopular
                                            ? 'bg-white ring-2 ring-blue-500 shadow-xl'
                                            : 'bg-gray-800 lg:mt-8'
                                    } rounded-lg shadow-md px-6 py-8 mx-auto max-w-sm lg:max-w-none lg:mx-0`}
                                >
                                    <h3
                                        className={`text-center text-2xl font-semibold ${
                                            plan.mostPopular ? 'text-gray-900' : 'text-white'
                                        }`}
                                    >
                                        {plan.name}
                                    </h3>
                                    <p className="mt-4 text-center">
                    <span
                        className={`text-4xl font-extrabold ${
                            plan.mostPopular ? 'text-gray-900' : 'text-white'
                        }`}
                    >
                      {plan.price}
                    </span>
                                        <span
                                            className={`text-base font-medium ${
                                                plan.mostPopular ? 'text-gray-500' : 'text-gray-400'
                                            }`}
                                        >
                      /month
                    </span>
                                    </p>
                                    <ul className="mt-8 space-y-4">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start">
                                                <div className="flex-shrink-0">
                                                    <CheckIcon
                                                        className={`h-6 w-6 ${
                                                            plan.mostPopular ? 'text-blue-500' : 'text-blue-400'
                                                        }`}
                                                        aria-hidden="true"
                                                    />
                                                </div>
                                                <p
                                                    className={`ml-3 text-base ${
                                                        plan.mostPopular ? 'text-gray-700' : 'text-gray-300'
                                                    }`}
                                                >
                                                    {feature}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8">
                                        <div className="rounded-lg shadow-md">
                                            <a
                                                href="#"
                                                className={`block w-full text-center rounded-lg border border-transparent px-6 py-3 text-base font-medium ${
                                                    plan.mostPopular
                                                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                                                        : 'bg-gray-700 text-white hover:bg-gray-600'
                                                }`}
                                            >
                                                {plan.cta}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}