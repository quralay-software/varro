import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { corePrinciplesData } from '../../data/corePrinciples';
import {
    Leaf, Lightbulb, TrendingUp, Shield, Handshake, Home,
    ChevronDown, ChevronUp
} from 'lucide-react';

const icons = {
    leaf: Leaf,
    lightbulb: Lightbulb,
    'trending-up': TrendingUp,
    shield: Shield,
    handshake: Handshake,
    home: Home
};

const colorVariants = {
    green: 'from-emerald-500/20 to-emerald-600/20 hover:from-emerald-500/30 hover:to-emerald-600/30',
    blue: 'from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30',
    purple: 'from-purple-500/20 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30',
    yellow: 'from-amber-500/20 to-amber-600/20 hover:from-amber-500/30 hover:to-amber-600/30',
    red: 'from-rose-500/20 to-rose-600/20 hover:from-rose-500/30 hover:to-rose-600/30',
    orange: 'from-orange-500/20 to-orange-600/20 hover:from-orange-500/30 hover:to-orange-600/30'
};

const PrincipleCard = ({ principle, isActive, onClick }) => {
    const Icon = icons[principle.icon];
    const colorClass = colorVariants[principle.color];

    return (
        <motion.div
            layout
            onClick={onClick}
            className={`bg-white rounded-xl overflow-hidden cursor-pointer transition-shadow duration-300
                       hover:shadow-lg border border-gray-100 relative
                       ${isActive ? 'md:col-span-2 md:row-span-2' : ''}`}
            whileHover={{ y: -5 }}
            initial={false}
        >
            <div className="p-6 md:p-8 h-full" title="Click to expand">
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} transition-all duration-300`} />

                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl bg-white/80 backdrop-blur-sm
                                          shadow-sm border border-gray-100`}>
                                <Icon className="w-6 h-6 text-gray-700" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold font-sans">{principle.title}</h3>
                        </div>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                        {principle.description}
                    </p>

                    <motion.div
                        initial={false}
                        animate={{
                            height: isActive ? 'auto' : 0,
                            opacity: isActive ? 1 : 0
                        }}
                        className="overflow-hidden"
                    >
                        {isActive && (
                            <ul className="space-y-4 pt-4 border-t">
                                {principle.details.map((detail, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                        <span className="text-gray-600 leading-relaxed">
                                            {detail}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const CorePrinciples = () => {
    const [activePrinciple, setActivePrinciple] = useState(null);
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const content = corePrinciplesData[currentLang];

    return (
        <section id="core-principles" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-xl font-medium block mb-4">
                        {content.sectionTitle}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-6">
                        {content.mainTitle}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {content.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {content.principles.map((principle) => (
                        <PrincipleCard
                            key={principle.id}
                            principle={principle}
                            isActive={activePrinciple === principle.id}
                            onClick={() => setActivePrinciple(
                                activePrinciple === principle.id ? null : principle.id
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorePrinciples;
