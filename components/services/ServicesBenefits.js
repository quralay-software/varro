import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
    {
        icon: '🚀',
        title: 'Экспертиза и инновации',
        description: 'Применяем передовые технологии добычи и переработки для максимальной эффективности.'
    },
    {
        icon: '🌍',
        title: 'Экологическая ответственность',
        description: 'Минимизация выбросов и рациональное использование природных ресурсов.'
    },
    {
        icon: '🔧',
        title: 'Современная инфраструктура',
        description: 'Боранкольский ГПЗ и высокопроизводительное оборудование мирового класса.'
    },
    {
        icon: '🤝',
        title: 'Гибкость и надежность',
        description: 'Индивидуальный подход к каждому клиенту и долгосрочное партнёрство.'
    }
];

const ServicesBenefits = () => {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary">Преимущества</span>
                    <h2 className="text-4xl font-bold mt-2">Почему выбирают нас</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Varro Operating Group предлагает комплексный подход к решению задач 
                        в нефтегазовой отрасли, основанный на опыте и инновациях.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Card */}
                            <div className="bg-white rounded-lg p-6 shadow-lg h-full 
                                          transform transition-all duration-300 hover:-translate-y-2">
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>

                            {/* Connecting Lines (except for last item) */}
                            {index < benefits.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">15+</div>
                        <div className="text-gray-600">Лет опыта</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">100+</div>
                        <div className="text-gray-600">Специалистов</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">50+</div>
                        <div className="text-gray-600">Партнеров</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                        <div className="text-gray-600">Поддержка</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesBenefits;
