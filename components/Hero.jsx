'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section
            id="home"
            className=" relative w-full h-screen flex items-center justify-center overflow-hidden"
        >
            <Image
                src="/hero-house.jpg"
                alt="Modern New Jersey home"
                fill
                sizes="100vw"
                className="object-cover brightness-50 z-0"
                priority
            />

            <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold leading-tight"
                >
                    Find Your <span className="text-brand-400">Dream Home</span>{' '}
                    in New Jersey
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
                >
                    Jonadest Home combines local expertise with a modern
                    approach to help you buy, sell, or rent. Experience the
                    Garden State like never before.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-10 flex gap-4 justify-center flex-wrap"
                >
                    <a
                        href="#properties"
                        className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-4 py-2 md:px-8 md:py-3  rounded-full transition-all text-sm md:text-base"
                    >
                        View Properties
                    </a>
                    <a
                        href="#contact"
                        className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-semibold px-4 py-2 md:px-8 md:py-3 rounded-full transition-all text-sm md:text-base"
                    >
                        Contact Agent
                    </a>
                </motion.div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </div>
        </section>
    );
}
