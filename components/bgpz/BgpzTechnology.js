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
    const IconComponent = ICONS[tech.icon] || Factory;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg sm:rounded-none overflow-hidden border border-gray-200"
        >
            <div className="p-4 sm:p-6 md:p-8 h-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-primary/25" />
                <div className="relative z-10">
                    <div className="text-gray-800 mb-4 sm:mb-6">
                        <IconComponent size={36} className='text-primary w-9 h-9 sm:w-12 sm:h-12' strokeWidth={1.5}/>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{tech.title}</h3>
                    <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">{tech.description}</p>

                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                        {tech.details.map((detail, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start"
                            >
                                <ChevronRight className="text-blue-900 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0" />
                                <span className="text-gray-700 text-base sm:text-lg">{detail}</span>
                            </motion.li>
                        ))}
                    </ul>

                    <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-auto">
                        {Object.entries(tech.stats).map(([key, stat], idx) => (
                            <div key={key} className="text-center">
                                <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-gray-700 text-sm sm:text-base md:text-lg">
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
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                >
                    <span className="text-primary text-lg sm:text-xl mb-3 sm:mb-4 block">
                        {data.section_title}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-sans">
                        {data.main_title}
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                        {data.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {data.technologies.map((tech, index) => (
                        <TechnologyCard key={index} tech={tech} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BgpzTechnology;
