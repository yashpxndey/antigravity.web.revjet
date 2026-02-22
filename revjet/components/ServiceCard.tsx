'use client';

import { motion } from 'framer-motion';
import { RevJetService } from '@/data/products';
import { CheckCircle2 } from 'lucide-react';

export default function ServiceCard({ service, index }: { service: RevJetService, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="group relative bg-revjet-bg-secondary border border-revjet-border rounded-2xl overflow-hidden hover:border-revjet-accent/50 transition-colors"
        >
            {/* Decorative Gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-revjet-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-revjet-accent transition-colors">
                        {service.name}
                    </h3>
                    <span className="px-3 py-1 text-xs font-semibold bg-revjet-accent/10 text-revjet-accent rounded-full border border-revjet-accent/20">
                        {service.metric}
                    </span>
                </div>

                <p className="text-revjet-text-secondary leading-relaxed mb-8">
                    {service.description}
                </p>

                <ul className="space-y-3 mb-10">
                    {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-revjet-text-primary">
                            <CheckCircle2 className="w-4 h-4 text-revjet-accent" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <button className="w-full py-4 bg-transparent border border-revjet-border text-white text-sm font-semibold rounded-xl group-hover:bg-revjet-accent group-hover:border-revjet-accent transition-all duration-300">
                    Learn More →
                </button>
            </div>
        </motion.div>
    );
}
