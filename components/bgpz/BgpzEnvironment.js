import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { Leaf, Droplets, Recycle, Sprout, Battery, RefreshCw, Globe, ChevronRight } from 'lucide-react';
import { bgpzEnvironmentData } from '../../data/bgpzEnvironment';

const ICONS = {
    'Leaf': Leaf,
    'Droplets': Droplets,
    'Recycle': Recycle,
    'Sprout': Sprout,
    'Battery': Battery,
    'RefreshCw': RefreshCw,
    'Globe': Globe
};

const ProgressBar = ({ value, color, reduction }) => (
    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${value}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full ${color}`}
        />
    </div>
);

const MetricCard = ({ metric }) => {
    const IconComponent = ICONS[metric.icon] || Leaf;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-none p-8"
        >
            <div className="flex items-center mb-6">
                <div className="text-primary mr-4">
                    <IconComponent size={42} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold font-sans">{metric.title}</h3>
            </div>

            <p className="text-gray-600 text-lg mb-8">{metric.description}</p>

            <div className="mb-8">
                <ProgressBar
                    value={metric.current}
                    color={metric.color}
                    reduction={metric.reduction}
                />
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">
                        {metric.stats.current}
                    </div>
                    <div className="text-gray-600">Текущий</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800 mb-1">
                        {metric.stats.target}
                    </div>
                    <div className="text-gray-600">Цель</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-gray-800 mb-1">
                        {metric.stats.timeline}
                    </div>
                    <div className="text-gray-600">Год</div>
                </div>
            </div>
        </motion.div>
    );
};

const InitiativeCard = ({ initiative, index }) => {
    const IconComponent = ICONS[initiative.icon] || Leaf;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start p-4"
        >
            <div className="text-primary mr-4">
                <IconComponent size={32} strokeWidth={1.5} />
            </div>
            <div>
                <h4 className="text-xl font-bold font-sans mb-2">{initiative.title}</h4>
                <p className="text-gray-600 text-lg">{initiative.description}</p>
            </div>
        </motion.div>
    );
};

const BgpzEnvironment = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const data = bgpzEnvironmentData[currentLang];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-xl mb-4 block">
                        {data.section_title}
                    </span>
                    <h2 className="text-5xl font-bold font-sans mb-6">
                        {data.main_title}
                    </h2>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                        {data.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {data.metrics.map((metric, index) => (
                        <MetricCard key={index} metric={metric} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BgpzEnvironment;
