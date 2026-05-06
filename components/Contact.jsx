'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-12 md:py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-brand-600 font-semibold uppercase text-center text-sm md:text-base"
                >
                    Contact Us
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-2 text-gray-900"
                >
                    Let's Find Your Perfect Home
                </motion.h2>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                >
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        required
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 text-sm md:text-base"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        required
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 text-sm md:text-base"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={form.phone}
                        onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                        }
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 sm:col-span-2 lg:col-span-1 text-sm md:text-base"
                    />
                    <div className="sm:col-span-2">
                        <textarea
                            rows={4}
                            placeholder="Tell us about your dream home..."
                            value={form.message}
                            onChange={(e) =>
                                setForm({ ...form, message: e.target.value })
                            }
                            required
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-400 resize-none text-sm md:text-base"
                        />
                    </div>
                    <div className="sm:col-span-2 flex flex-col items-center">
                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 md:px-10 py-3 rounded-full transition-all disabled:opacity-50 text-sm md:text-base"
                        >
                            {status === 'sending'
                                ? 'Sending...'
                                : 'Send Message'}
                        </button>
                        {status === 'success' && (
                            <p className="mt-3 text-green-600 font-medium text-sm md:text-base">
                                Message sent successfully!
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="mt-3 text-red-500 font-medium text-sm md:text-base">
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
