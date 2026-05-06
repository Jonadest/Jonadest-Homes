'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300  ${
                scrolled || menuOpen
                    ? 'bg-white shadow-md py-2'
                    : 'bg-transparent py-2 md:py-3'
            }`}
        >
            <div className=" mx-auto px-4 sm:px-6 flex items-center">
                {/* Logo - aligned left with proper spacing */}
                <Link
                    href="/"
                    className="relative w-52 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-16 sm:h-18 md:h-20 lg:h-24 shrink-0"
                >
                    <Image
                        src="/logo.png"
                        alt="Jonadest Home"
                        fill
                        sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                {/* Desktop Navigation - pushes to the right */}
                <nav
                    className={`hidden lg:flex items-center space-x-8 xl:space-x-10 font-medium text-base ml-auto ${
                        scrolled || menuOpen
                            ? 'text-gray-700'
                            : 'text-brand-300'
                    }`}
                >
                    <a
                        href="#about"
                        className="hover:text-brand-600 transition-colors"
                    >
                        About
                    </a>
                    <a
                        href="#properties"
                        className="hover:text-brand-600 transition-colors"
                    >
                        Properties
                    </a>
                    <a
                        href="#testimonials"
                        className="hover:text-brand-600 transition-colors"
                    >
                        Testimonials
                    </a>
                    <a
                        href="#contact"
                        className="hover:text-brand-600 transition-colors"
                    >
                        Contact
                    </a>
                </nav>

                {/* Desktop CTA Button */}
                <a
                    href="#contact"
                    className="hidden lg:inline-block bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-2.5 rounded-full transition-all text-sm xl:text-base whitespace-nowrap ml-8 xl:ml-10"
                >
                    Get in Touch
                </a>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden relative w-10 h-10 flex items-center justify-center z-50 ml-auto"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    <div className="flex flex-col gap-1.5">
                        <span
                            className={`block w-7 h-0.5 bg-brand-300 transition-all duration-300 origin-center ${
                                menuOpen ? 'rotate-45 translate-y-2' : ''
                            }`}
                        />
                        <span
                            className={`block w-7 h-0.5 bg-brand-300 transition-all duration-300 ${
                                menuOpen ? 'opacity-0 scale-x-0' : ''
                            }`}
                        />
                        <span
                            className={`block w-7 h-0.5 bg-brand-300 transition-all duration-300 origin-center ${
                                menuOpen ? '-rotate-45 -translate-y-2' : ''
                            }`}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={` fixed inset-0 bg-brand-100 z-40 transition-all duration-300 lg:hidden ${
                    menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <div className="flex flex-col justify-center h-full pt-20 px-6">
                    {/* Mobile Navigation */}
                    <nav className="flex flex-col space-y-1">
                        <a
                            href="#home"
                            onClick={handleLinkClick}
                            className="text-gray-800 font-medium text-xl py-4 px-4 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-all"
                        >
                            Home
                        </a>

                        <a
                            href="#about"
                            onClick={handleLinkClick}
                            className="text-gray-800 font-medium text-xl py-4 px-4 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-all"
                        >
                            About
                        </a>

                        <div className="h-px bg-gray-100" />
                        <a
                            href="#properties"
                            onClick={handleLinkClick}
                            className="text-gray-800 font-medium text-xl py-4 px-4 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-all"
                        >
                            Properties
                        </a>
                        <div className="h-px bg-gray-100" />
                        <a
                            href="#testimonials"
                            onClick={handleLinkClick}
                            className="text-gray-800 font-medium text-xl py-4 px-4 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-all"
                        >
                            Testimonials
                        </a>
                        <div className="h-px bg-gray-100" />
                        <a
                            href="#contact"
                            onClick={handleLinkClick}
                            className="text-gray-800 font-medium text-xl py-4 px-4 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-all"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Mobile CTA */}
                    <div className="mt-8 px-4">
                        <a
                            href="#contact"
                            onClick={handleLinkClick}
                            className="block w-full text-center bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-4 rounded-xl transition-all text-lg"
                        >
                            Get in Touch
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-10 px-4 text-center text-sm text-gray-400">
                        <p>Newark, NJ 07102</p>
                        <p className="mt-1">+1 (973) 555-0100</p>
                    </div>
                </div>
            </div>
        </header>
    );
}
