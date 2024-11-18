import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'Freelance Designer',
        image: '/testimonial-1.jpg',
        quote: 'FocusTrack has completely transformed my work routine. I\'m more productive than ever!',
        rating: 5,
    },
    {
        name: 'Michael Chen',
        role: 'Software Engineer',
        image: '/testimonial-2.jpg',
        quote: 'The Pomodoro feature is a game-changer. I can now manage my time effectively and avoid burnout.',
        rating: 5,
    },
    {
        name: 'Emily Rodriguez',
        role: 'Marketing Manager',
        image: '/testimonial-3.jpg',
        quote: 'I love how FocusTrack helps me set and track my goals. It keeps me motivated and on track.',
        rating: 4,
    },
]

export default function Testimonials() {
    return (
        <div id="testimonials" className="bg-gradient-to-b from-cyan-400 to-white py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        What our users are saying
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Don't just take our word for it - hear from some of our satisfied users
                    </p>
                </div>
                <div className="mt-16">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-lg shadow-lg p-8">
                                    <div className="flex items-center">
                                        <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                                        <div className="ml-4">
                                            <div className="text-lg font-medium text-gray-900">{testimonial.name}</div>
                                            <div className="text-sm text-gray-500">{testimonial.role}</div>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-gray-600">{testimonial.quote}</p>
                                    <div className="mt-4 flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}