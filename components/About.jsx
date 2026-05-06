'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <p className="text-brand-600 font-semibold tracking-wide uppercase">
                        About Us
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                        Modern Real Estate,
                        <br /> Rooted in Jersey
                    </h2>
                    <p className="mt-5 text-gray-600 leading-relaxed">
                        Jonadest Home was founded with a clear mission: to bring
                        honesty, technology, and a personal touch to New
                        Jersey's property market. From the suburbs of Montclair
                        to the shores of Asbury Park, our team of local experts
                        guides you through every step.
                    </p>
                    <ul className="mt-6 space-y-3 text-gray-700">
                        <li className="flex items-center gap-2">
                            <span className="text-brand-500 text-xl">✓</span>{' '}
                            15+ years of NJ market experience
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-brand-500 text-xl">✓</span>{' '}
                            5,000+ satisfied families
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-brand-500 text-xl">✓</span>{' '}
                            Award-winning service 2024
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
                >
                    <Image
                        src="/about-team.jpg"
                        alt="Jonadest Home team"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
