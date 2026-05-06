'use client';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Sarah & Mike',
        role: 'Homebuyers, Newark',
        quote: 'Jonadest Home made our first home purchase stress-free. Their knowledge of the neighborhood was incredible.',
        rating: 5,
    },
    {
        name: 'David L.',
        role: 'Seller, Princeton',
        quote: 'Sold our house in 10 days, above asking price! The staging advice and marketing were top-notch.',
        rating: 5,
    },
    {
        name: 'Amanda C.',
        role: 'Landlord, Hoboken',
        quote: "Their property management service is a game changer. I haven't had a single vacancy in two years.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-brand-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-brand-600 font-semibold uppercase"
                >
                    Testimonials
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold mt-2 text-gray-900"
                >
                    Trusted by Hundreds of Families
                </motion.h2>

                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm text-left"
                        >
                            <div className="text-yellow-400 text-xl mb-4">
                                {'★'.repeat(t.rating)}
                            </div>
                            <p className="text-gray-600 italic">"{t.quote}"</p>
                            <div className="mt-5 font-semibold text-gray-900">
                                {t.name}
                            </div>
                            <div className="text-sm text-gray-500">
                                {t.role}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
