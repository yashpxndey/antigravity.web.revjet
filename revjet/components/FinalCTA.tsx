'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
    return (
        <section className="py-40 px-6 bg-revjet-bg-primary relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-revjet-accent/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-6xl md:text-7xl font-display font-bold text-white tracking-tight"
                >
                    Build Your <span className="text-revjet-accent">Revenue Engine</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mt-8 text-2xl text-revjet-text-secondary"
                >
                    Unify, optimize, and scale revenue operations with the industry’s most advanced RevOps stack.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-16 flex flex-col md:flex-row gap-6 justify-center"
                >
                    <button className="px-10 py-5 bg-revjet-accent hover:bg-[#F43F5E] text-white text-lg font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_40px_rgba(225,29,72,0.5)]">
                        Book a Demo ↓
                    </button>
                    <button className="px-10 py-5 bg-transparent border border-revjet-border hover:border-revjet-text-secondary text-white text-lg font-bold rounded-2xl transition-all">
                        Technical Specs
                    </button>
                </motion.div>
            </div>

            {/* Decorative anti-gravity particles for final CTA */}
            <div className="mt-32 border-t border-revjet-border pt-10 flex justify-center gap-10 grayscale opacity-30 select-none">
                {['Salesforce', 'HubSpot', 'Outreach', 'Gong', 'Clari'].map((brand) => (
                    <span key={brand} className="text-sm font-semibold tracking-widest text-[#9BA3C7]">{brand}</span>
                ))}
            </div>
        </section>
    );
}
