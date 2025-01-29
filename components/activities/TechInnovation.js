import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
    {
        icon: '🔍',
        title: 'Современные технологии разведки',
        description: 'Использование передовых методов для выявления новых месторождений и оценки запасов.'
    },
    {
        icon: '⚡',
        title: 'Методы извлечения',
        description: 'Применение вторичных и третичных методов для увеличения объёмов добычи.'
    },
    {
        icon: '💻',
        title: 'Цифровизация производства',
        description: 'Автоматизация процессов и повышение точности прогнозирования.'
    }
];

const TechInnovation = () => {
    return (
        <section className="section-padding">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary">Инновации</span>
                    <h2 className="text-4xl font-bold mt-2">Технологии и развитие</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="text-4xl mb-4">{tech.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                            <p className="text-gray-600">{tech.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 bg-gradient-to-r from-primary to-secondary p-8 rounded-lg text-white"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Инвестиции в будущее</h3>
                            <p className="mb-4">
                                Мы постоянно инвестируем в новые технологии и инновации, чтобы 
                                оставаться лидером в отрасли и обеспечивать устойчивое развитие.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span className="mr-2">✓</span>
                                    <span>Автоматизация производственных процессов</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✓</span>
                                    <span>Внедрение AI и машинного обучения</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">✓</span>
                                    <span>Развитие зеленых технологий</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="w-48 h-48 relative">
                                <div className="absolute inset-0 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
                                <div className="absolute inset-4 bg-white bg-opacity-30 rounded-full animate-pulse delay-150"></div>
                                <div className="absolute inset-8 bg-white bg-opacity-40 rounded-full animate-pulse delay-300"></div>
                                <div className="absolute inset-12 bg-white bg-opacity-50 rounded-full animate-pulse delay-500"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechInnovation;
