import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { Filter, Factory, Flask, Truck, ChevronRight } from 'lucide-react';
import { bgpzTechnologyData } from '../../data/bgpzTechnology';

const ICONS = {
    'Filter': Filter,
    'Factory': Factory,
    'Flask': Flask,
    'Truck': Truck
};

const TechnologyCard = ({ tech }) => {
    // Add a default icon in case the icon name doesn't match
    const IconComponent = ICONS[tech.icon] || Factory;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-none overflow-hidden border border-gray-200"
        >
            <div className="p-8 h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-blue-900/20" />
                <div className="relative z-10">
                    <div className="text-gray-800 mb-6">
                        <IconComponent size={48} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{tech.title}</h3>
                    <p className="text-gray-700 text-lg mb-6">{tech.description}</p>

                    <ul className="space-y-4 mb-8">
                        {tech.details.map((detail, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start"
                            >
                                <ChevronRight className="text-blue-900 mr-3 h-5 w-5 mt-1 flex-shrink-0" />
                                <span className="text-gray-700 text-lg">{detail}</span>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="grid grid-cols-2 gap-6 mt-auto">
                        {Object.entries(tech.stats).map(([key, stat], idx) => (
                            <div key={key} className="text-center">
                                <div className="text-2xl font-bold text-gray-800 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-gray-700 text-lg">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const BgpzTechnology = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const data = bgpzTechnologyData[currentLang];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-900 text-xl mb-4 block">
                        {data.section_title}
                    </span>
                    <h2 className="text-gray-800 text-5xl font-bold mb-6">
                        {data.main_title}
                    </h2>
                    <p className="text-gray-700 text-xl max-w-3xl mx-auto">
                        {data.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.technologies.map((tech, index) => (
                        <TechnologyCard key={index} tech={tech} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BgpzTechnology;
