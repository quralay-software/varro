import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { servicesHeroData } from '../../data/servicesHero';

const ServicesHero = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const data = servicesHeroData[currentLang];

    const scrollToServices = () => {
        const servicesSection = document.getElementById('services-grid');
        servicesSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={data.image.src}
                    alt={data.image.alt}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            </div>

            <div className="relative h-full container mx-auto px-4">
                <div className="flex flex-col justify-center h-full max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-semibold mb-4 block">
                            {data.company}
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-arial font-sans font-bold text-white mb-4 md:mb-6">
                            {data.title}
                        </h1>
                        <h2 className="text-xl md:text-2xl text-primary mb-3 md:mb-4 font-sans">
                            {data.subtitle}
                        </h2>
                        <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl">
                            {data.description}
                        </p>
                        <button
                            onClick={scrollToServices}
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-none border-none
                                     transition-all duration-300 transform hover:scale-105"
                        >
                            {data.button}
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Key Statistics - Responsive Layout */}
            <div className="absolute md:hidden bottom-4 left-4 right-4 grid grid-cols-3 gap-2 bg-black/20 p-2 rounded-lg">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <div className="text-white text-center">
                        <div className="text-2xl font-bold mb-1">{data.stats.experience.value}</div>
                        <div className="text-xs font-semibold">{data.stats.experience.label}</div>
                    </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <div className="text-white text-center">
                        <div className="text-2xl font-bold mb-1">{data.stats.projects.value}</div>
                        <div className="text-xs font-semibold">{data.stats.projects.label}</div>
                    </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                    <div className="text-white text-center">
                        <div className="text-2xl font-bold mb-1">{data.stats.clients.value}</div>
                        <div className="text-xs font-semibold">{data.stats.clients.label}</div>
                    </div>
                </div>
            </div>

            {/* Desktop Statistics */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hidden md:block absolute top-[20%] right-[10%] bg-white/10 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-lg transform hover:scale-105 transition-transform duration-300"
            >
                <div className="text-white text-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 md:mb-2">
                        {data.stats.experience.value}
                    </div>
                    <div className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                        {data.stats.experience.label}
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="hidden md:block absolute top-[45%] right-[5%] bg-white/10 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-lg transform hover:scale-105 transition-transform duration-300"
            >
                <div className="text-white text-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 md:mb-2">
                        {data.stats.projects.value}
                    </div>
                    <div className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                        {data.stats.projects.label}
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="hidden md:block absolute top-[70%] right-[15%] bg-white/10 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-lg transform hover:scale-105 transition-transform duration-300"
            >
                <div className="text-white text-center">
                    <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 md:mb-2">
                        {data.stats.clients.value}
                    </div>
                    <div className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                        {data.stats.clients.label}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default ServicesHero;
