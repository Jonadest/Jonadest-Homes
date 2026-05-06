'use client';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Buy a Home',
        desc: 'Access exclusive listings and expert negotiation.',
        icon: '🏡',
    },
    {
        title: 'Sell a Home',
        desc: "Maximize your property's value with data-driven pricing.",
        icon: '💰',
    },
    {
        title: 'Rentals',
        desc: 'Find the perfect rental, from condos to luxury estates.',
        icon: '🔑',
    },
    {
        title: 'Property Management',
        desc: 'Hassle-free management for landlords.',
        icon: '📋',
    },
];

export default function Services() {
    return (
        <section className="py-20 bg-brand-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-brand-600 font-semibold uppercase"
                >
                    Services
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mt-2 text-gray-900"
                >
                    Everything You Need, All in One Place
                </motion.h2>

                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((svc, i) => (
                        <motion.div
                            key={svc.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all text-left"
                        >
                            <div className="text-4xl mb-4">{svc.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                {svc.title}
                            </h3>
                            <p className="mt-2 text-gray-600">{svc.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
