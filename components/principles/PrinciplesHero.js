import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PrinciplesHero = () => {
    const scrollToPrinciples = () => {
        const principlesSection = document.getElementById('core-principles');
        principlesSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://picsum.photos/1920/1080?random=20"
                    alt="Industrial Landscape"
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
                            Наши ключевые принципы
                        </h1>
                        <h2 className="text-2xl text-primary mb-4">
                            Этика, устойчивость и инновации
                        </h2>
                        <p className="text-lg text-gray-200 mb-8">
                            Мы придерживаемся высоких стандартов корпоративной ответственности, 
                            обеспечиваем безопасность сотрудников и заботимся об окружающей среде. 
                            Наши принципы — основа устойчивого развития компании.
                        </p>
                        <button
                            onClick={scrollToPrinciples}
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg 
                                     transition-all duration-300 transform hover:scale-105"
                        >
                            Подробнее о наших принципах
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

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

            {/* Floating Badges */}
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute top-1/4 right-[10%] bg-white/10 backdrop-blur-sm p-4 rounded-lg"
            >
                <div className="text-white text-center">
                    <div className="text-2xl mb-1">🌱</div>
                    <div className="font-semibold">Экология</div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute top-1/2 right-[15%] bg-white/10 backdrop-blur-sm p-4 rounded-lg"
            >
                <div className="text-white text-center">
                    <div className="text-2xl mb-1">💡</div>
                    <div className="font-semibold">Инновации</div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-1/4 right-[20%] bg-white/10 backdrop-blur-sm p-4 rounded-lg"
            >
                <div className="text-white text-center">
                    <div className="text-2xl mb-1">🤝</div>
                    <div className="font-semibold">Партнерство</div>
                </div>
            </motion.div>
        </section>
    );
};

export default PrinciplesHero;
