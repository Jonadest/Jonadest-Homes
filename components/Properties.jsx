'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const featured = [
    {
        id: 1,
        title: 'Modern Loft in Jersey City',
        price: '$625,000',
        beds: 2,
        baths: 2,
        sqft: '1,200',
        img: '/property1.jpg',
    },
    {
        id: 2,
        title: 'Colonial in Montclair',
        price: '$890,000',
        beds: 4,
        baths: 3,
        sqft: '2,800',
        img: '/property2.jpg',
    },
    {
        id: 3,
        title: 'Hoboken Waterfront Condo',
        price: '$799,000',
        beds: 2,
        baths: 2,
        sqft: '1,450',
        img: '/property3.jpg',
    },
];

export default function Properties() {
    return (
        <section id="properties" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-brand-600 font-semibold uppercase text-center"
                >
                    Featured Properties
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold text-center mt-2 text-gray-900"
                >
                    Handpicked Just for You
                </motion.h2>

                <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featured.map((prop, i) => (
                        <motion.div
                            key={prop.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all"
                        >
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={prop.img}
                                    alt={prop.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span className="absolute top-4 left-4 bg-brand-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    Featured
                                </span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">
                                    {prop.title}
                                </h3>
                                <p className="text-brand-600 font-bold text-2xl mt-2">
                                    {prop.price}
                                </p>
                                <div className="flex items-center gap-4 mt-3 text-gray-500 text-sm">
                                    <span>{prop.beds} Beds</span>
                                    <span>{prop.baths} Baths</span>
                                    <span>{prop.sqft} sqft</span>
                                </div>
                                <a
                                    href="#contact"
                                    className="mt-4 block text-center bg-gray-100 hover:bg-brand-50 text-brand-700 font-medium py-2 rounded-lg transition-colors"
                                >
                                    Request a Tour
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a
                        href="#contact"
                        className="inline-block border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white font-semibold px-8 py-3 rounded-full transition-all"
                    >
                        View All Listings
                    </a>
                </div>
            </div>
        </section>
    );
}
