'use client';

import { motion } from 'framer-motion';
import { features } from '@/data/products';

export default function FeatureSection() {
    return (
        <section className="py-32 px-6 bg-[#05070C] overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-32">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-16 ${feature.position === 'right' ? 'md:flex-row-reverse' : ''
                            }`}
                    >
                        {/* Visual Placeholder for RevOps visuals */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2 aspect-video bg-revjet-bg-secondary rounded-3xl border border-revjet-border relative overflow-hidden flex items-center justify-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-revjet-accent/5 to-transparent" />
                            <div className="text-revjet-text-primary/10 font-display text-9xl select-none italic font-bold">
                                RevJet
                            </div>
                            <div className="w-3/4 h-1/2 bg-revjet-bg-primary rounded-2xl border border-revjet-border flex items-center justify-center overflow-hidden">
                                {/* This would be an illustration or UI mock */}
                                <div className="w-full h-full bg-gradient-to-r from-revjet-accent/20 via-transparent to-revjet-accent/20 animate-pulse" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: feature.position === 'left' ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full md:w-1/2"
                        >
                            <h3 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                                {feature.title}
                            </h3>
                            <p className="mt-6 text-xl text-revjet-text-secondary leading-relaxed">
                                {feature.description}
                            </p>
                            <div className="mt-10 flex gap-4">
                                <div className="w-12 h-1 bg-revjet-accent" />
                                <span className="text-xs font-bold uppercase tracking-widest text-revjet-text-primary">
                                    Proprietary Algorithm
                                </span>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
}
