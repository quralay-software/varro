import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const GoalsHero = () => {
    const scrollToStrategies = () => {
        const strategiesSection = document.getElementById('strategic-directions');
        strategiesSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://picsum.photos/1920/1080?random=10"
                    alt="Industrial Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
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
                            Стратегические цели Varro Operating Group
                        </h1>
                        <h2 className="text-2xl text-primary mb-4">
                            Инновации, устойчивое развитие и технологическое совершенство
                        </h2>
                        <p className="text-lg text-gray-200 mb-8">
                            Мы стремимся к увеличению эффективности добычи, развитию ресурсной базы 
                            и внедрению инноваций для создания устойчивого будущего в нефтегазовой отрасли.
                        </p>
                        <button
                            onClick={scrollToStrategies}
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg 
                                     transition-all duration-300 transform hover:scale-105"
                        >
                            Подробнее о наших стратегиях
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
        </section>
    );
};

export default GoalsHero;
