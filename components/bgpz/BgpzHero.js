import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BgpzHero = () => {
    const scrollToContent = () => {
        const historySection = document.getElementById('bgpz-history');
        historySection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/bgpz/hero-bg.jpg"
                    alt="Боранкольский ГПЗ"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-4">
                <div className="flex flex-col justify-center h-full max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-semibold mb-4 block">
                            Varro Operating Group
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Боранкольский газоперерабатывающий завод (БГПЗ)
                        </h1>
                        <h2 className="text-2xl text-primary mb-4">
                            Высокие технологии переработки газа
                        </h2>
                        <p className="text-lg text-gray-200 mb-8 max-w-2xl">
                            БГПЗ — один из ведущих газоперерабатывающих заводов Казахстана, 
                            обеспечивающий переработку попутного и природного газа с использованием 
                            передовых технологий и соблюдением высоких экологических стандартов.
                        </p>
                        <button
                            onClick={scrollToContent}
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg 
                                     transition-all duration-300 transform hover:scale-105"
                        >
                            Подробнее о заводе
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Animated Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2" />
                </div>
            </motion.div>

            {/* Key Statistics */}
            <div className="absolute bottom-12 right-12 grid grid-cols-1 gap-4">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                >
                    <div className="text-white text-center">
                        <div className="text-2xl font-bold">3.6</div>
                        <div className="text-sm">млрд м³/год</div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                >
                    <div className="text-white text-center">
                        <div className="text-2xl font-bold">95%</div>
                        <div className="text-sm">готовность МО</div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="bg-white/10 backdrop-blur-sm p-4 rounded-lg"
                >
                    <div className="text-white text-center">
                        <div className="text-2xl font-bold">73%</div>
                        <div className="text-sm">готовность СМР</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BgpzHero;
