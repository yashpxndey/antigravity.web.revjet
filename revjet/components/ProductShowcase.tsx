'use client';

import { revjetServices } from '@/data/products';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

export default function ProductShowcase() {
    return (
        <section className="py-32 px-6 bg-revjet-bg-primary">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-revjet-accent font-semibold tracking-widest text-xs uppercase"
                    >
                        The Revenue Engine
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-4 text-5xl md:text-6xl font-display font-bold text-white"
                    >
                        Powering Performance
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-6 text-xl text-revjet-text-secondary max-w-2xl mx-auto"
                    >
                        Streamline your GTM operations with precision-engineered modules designed for enterprise scale.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {revjetServices.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
