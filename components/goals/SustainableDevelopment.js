import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useInView } from 'react-intersection-observer';
import { Leaf, Gauge, Coins } from 'lucide-react';
import { sustainableDevelopmentData } from '../../data/sustainableDevelopment';

const iconComponents = {
    0: Leaf,
    1: Gauge,
    2: Coins
};

const ProgressBar = ({ value, color }) => {
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: false
    });

    return (
        <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden" ref={ref}>
            <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${value}%` } : { width: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className={`h-full ${color}`}
            />
        </div>
    );
};

const MetricCard = ({ metric, index }) => {
    const IconComponent = iconComponents[index];
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8"
            whileHover={{ y: -5 }}
        >
            <div className="flex items-center mb-6">
                <div className="text-primary mr-4">
                    <IconComponent size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold font-sans">{metric.title}</h3>
            </div>
            <div className="mb-6">
                <ProgressBar value={(metric.current / metric.target) * 100} color={metric.color} />
            </div>
            <div className="flex justify-between text-lg text-gray-600">
                <span>
                    <span className="font-medium">{metric.current}{metric.unit}</span>
                    <span className="text-gray-400 ml-1">Current</span>
                </span>
                <span>
                    <span className="font-medium">{metric.target}{metric.unit}</span>
                    <span className="text-gray-400 ml-1">Target</span>
                </span>
            </div>
        </motion.div>
    );
};

const StatCard = ({ stat, index }) => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-8 bg-white"
            whileHover={{ y: -5 }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-4xl font-bold text-primary mb-4 font-sans"
            >
                {stat.value}
            </motion.div>
            <div className="text-lg text-gray-600">{stat.label}</div>
        </motion.div>
    );
};

const SustainableDevelopment = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const content = sustainableDevelopmentData[currentLang];

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    return (
        <section className="py-20 bg-gray-50" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-xl font-medium block mb-4">
                        {content.sectionTitle}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sans">
                        {content.mainTitle}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {content.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {content.metrics.map((metric, index) => (
                        <MetricCard key={index} metric={metric} index={index} />
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {content.additionalStats.map((stat, index) => (
                        <StatCard key={index} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SustainableDevelopment;
