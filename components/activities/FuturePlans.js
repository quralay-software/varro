import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const plans = [
    {
        year: '2024',
        title: 'Модернизация БГПЗ',
        description: 'Завершение второго этапа модернизации Боранкольского газоперерабатывающего завода.'
    },
    {
        year: '2025',
        title: 'Разведка новых месторождений',
        description: 'Начало геологоразведочных работ на новых перспективных участках.'
    },
    {
        year: '2026',
        title: 'Цифровая трансформация',
        description: 'Внедрение цифровых двойников и AI-систем управления производством.'
    },
    {
        year: '2027',
        title: 'Зеленые технологии',
        description: 'Переход на возобновляемые источники энергии в инфраструктуре.'
    }
];

const FuturePlans = () => {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary">Развитие</span>
                    <h2 className="text-4xl font-bold mt-2">Будущие планы</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Наша стратегия развития направлена на устойчивый рост и инновационное развитие
                        производства с учетом экологических и социальных аспектов.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6"
                            >
                                <div className="flex-shrink-0 w-24 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center">
                                    <span className="text-xl font-bold text-primary">{plan.year}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                                    <p className="text-gray-600">{plan.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative h-[600px] rounded-lg overflow-hidden">
                            <Image
                                src="https://picsum.photos/800/1200?random=5"
                                alt="Future Vision"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-4">Наше видение будущего</h3>
                                    <p className="text-gray-200">
                                        Мы стремимся стать лидером в области устойчивого развития 
                                        нефтегазовой отрасли, внедряя инновационные решения и заботясь 
                                        об окружающей среде.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-3xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FuturePlans;
