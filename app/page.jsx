import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Properties from '@/components/Properties';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
    return (
        <div className="w-full overflow-hidden">
            <Hero />
            <About />
            <Services />
            <Properties />
            <Testimonials />
            <Contact />
        </div>
    );
}
