import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { Rocket, Globe, Settings, Handshake } from 'lucide-react';
import { servicesBenefitsData } from '../../data/servicesBenefits';

const iconComponents = {
    Rocket,
    Globe,
    Settings,
    Handshake
};

const BenefitCard = ({ benefit, index, total }) => {
    const IconComponent = iconComponents[benefit.icon];
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
        >
            {/* Card */}
            <div className="bg-white p-8 h-full transform transition-all duration-500 
                          hover:shadow-xl hover:-translate-y-2">
                <div className="text-primary mb-6">
                    <IconComponent size={40} strokeWidth={1.5} 
                        className="transform transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>

            {/* Connecting Lines (except for last item) */}
            {index < total - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8">
                    <motion.div
                        className="h-0.5 bg-primary/30"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    />
                </div>
            )}
        </motion.div>
    );
};

const StatItem = ({ stat, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
        }}
        className="text-center group"
    >
        <motion.div 
            className="text-5xl font-bold text-primary mb-3"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
        >
            {stat.value}
        </motion.div>
        <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
    </motion.div>
);

const ServicesBenefits = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const content = servicesBenefitsData[currentLang];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-xl font-medium">{content.sectionTitle}</span>
                    <h2 className="text-5xl font-bold mt-4 mb-6">{content.mainTitle}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {content.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {content.benefits.map((benefit, index) => (
                        <BenefitCard
                            key={index}
                            benefit={benefit}
                            index={index}
                            total={content.benefits.length}
                        />
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
                    {content.stats.map((stat, index) => (
                        <StatItem key={index} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesBenefits;
