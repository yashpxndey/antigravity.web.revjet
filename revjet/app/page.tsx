import HeroCanvasAnimation from '@/components/HeroCanvasAnimation';
import ProductShowcase from '@/components/ProductShowcase';
import FeatureSection from '@/components/FeatureSection';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
    return (
        <main className="relative min-h-screen bg-revjet-bg-primary">
            {/* Sticky Navigation Placeholder */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center bg-gradient-to-bottom from-black/50 to-transparent pointer-events-none">
                <div className="text-xl font-display font-bold text-white pointer-events-auto cursor-pointer">
                    REV<span className="text-revjet-accent">JET</span>
                </div>
                <div className="flex gap-8 items-center pointer-events-auto">
                    {['Platform', 'Solutions', 'Performance', 'Engine'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-revjet-text-secondary hover:text-white transition-colors">
                            {item}
                        </a>
                    ))}
                    <button className="px-5 py-2.5 bg-revjet-accent text-xs font-bold rounded-lg hover:bg-revjet-accent/80 transition-all">
                        GET STARTED
                    </button>
                </div>
            </nav>

            <div id="platform">
                <HeroCanvasAnimation />
            </div>

            <div id="solutions">
                <ProductShowcase />
            </div>

            <div id="performance">
                <FeatureSection />
            </div>

            <div id="engine">
                <FinalCTA />
            </div>

            <footer className="py-20 px-6 border-t border-revjet-border text-center">
                <div className="text-revjet-text-secondary text-sm">
                    © 2026 RevJet Revenue Operations. All rights reserved. Precision engineered for RevOps scale.
                </div>
            </footer>
        </main>
    );
}
