'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Intro() {
    const [visible, setVisible] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const seen = sessionStorage.getItem('seenIntro');

        if (seen) {
            setVisible(false);
            return;
        }

        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setVisible(false);
                sessionStorage.setItem('seenIntro', 'true');
            }, 700); // fade out duration
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${
                fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
        >
            {/* Cinematic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black" />

            {/* Glow Effect */}
            <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full animate-glowMove" />

            {/* Logo */}
            <div className="relative animate-zoomCinematic">
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={260}
                    height={260}
                    priority
                    className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                />
            </div>
        </div>
    );
}
