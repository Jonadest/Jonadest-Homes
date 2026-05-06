export default function Footer() {
    return (
        <footer className="bg-brand-950 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-2xl font-bold mb-4">Jonadest Home</h3>
                    <p className="text-gray-300">
                        Your trusted partner in New Jersey real estate. Modern
                        living starts here.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-3 text-lg">Quick Links</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li>
                            <a href="#about" className="hover:text-white">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#properties" className="hover:text-white">
                                Properties
                            </a>
                        </li>
                        <li>
                            <a
                                href="#testimonials"
                                className="hover:text-white"
                            >
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-white">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3 text-lg">Connect</h4>
                    <p className="text-gray-300 mb-2">Newark, NJ 07102</p>
                    <p className="text-gray-300 mb-2">+1 (973) 555-0100</p>
                    <p className="text-gray-300">info@jonadesthome.com</p>
                </div>
            </div>

            <div className="text-center text-gray-400 text-sm mt-8">
                © {new Date().getFullYear()} Jonadest Home. All rights reserved.
            </div>
        </footer>
    );
}
