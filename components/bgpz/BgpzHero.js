import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { bgpzHeroData } from '../../data/bgpzHero';

const BgpzHero = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const data = bgpzHeroData[currentLang];

    const scrollToContent = () => {
        const historySection = document.getElementById('bgpz-history');
        historySection?.scrollIntoView({ behavior: 'smooth' });
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
                            onClick={scrollToContent}
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-none border-none
                                     transition-all duration-300 transform hover:scale-105"
                        >
                            {data.button}
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Mobile and Tablet Statistics */}
            <div className="absolute lg:hidden bottom-4 left-4 right-4 grid grid-cols-3 gap-2 bg-black/20 p-2 rounded-lg">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg w-full h-24 md:h-32 flex items-center justify-center">
                    <div className="text-white text-center">
                        <div className="text-2xl md:text-3xl font-bold mb-1">{data.stats.capacity.value}</div>
                        <div className="text-[10px] md:text-xs font-medium">{data.stats.capacity.label}</div>
                    </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg w-full h-24 md:h-32 flex items-center justify-center">
                    <div className="text-white text-center">
                        <div className="text-2xl md:text-3xl font-bold mb-1">{data.stats.equipment.value}</div>
                        <div className="text-[10px] md:text-xs font-medium">{data.stats.equipment.label}</div>
                    </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg w-full h-24 md:h-32 flex items-center justify-center">
                    <div className="text-white text-center">
                        <div className="text-2xl md:text-3xl font-bold mb-1">{data.stats.construction.value}</div>
                        <div className="text-[10px] md:text-xs font-medium">{data.stats.construction.label}</div>
                    </div>
                </div>
            </div>

            {/* Desktop Statistics (lg and up) */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hidden lg:block absolute top-[20%] right-[10%] bg-white/10 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 w-[300px] h-[200px] flex items-center justify-center"
            >
                <div className="text-white text-center">
                    <div className="text-5xl font-bold mb-2">
                        {data.stats.capacity.value}
                    </div>
                    <div className="text-base font-medium max-w-[200px] mx-auto">
                        {data.stats.capacity.label}
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="hidden lg:block absolute top-[40%] right-[20%] bg-white/10 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 w-[300px] h-[200px] flex items-center justify-center"
            >
                <div className="text-white text-center">
                    <div className="text-5xl font-bold mb-2">
                        {data.stats.equipment.value}
                    </div>
                    <div className="text-base font-medium max-w-[200px] mx-auto">
                        {data.stats.equipment.label}
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="hidden lg:block absolute top-[60%] right-[30%] bg-white/10 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 w-[300px] h-[200px] flex items-center justify-center"
            >
                <div className="text-white text-center">
                    <div className="text-5xl font-bold mb-2">
                        {data.stats.construction.value}
                    </div>
                    <div className="text-base font-medium max-w-[200px] mx-auto">
                        {data.stats.construction.label}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default BgpzHero;
