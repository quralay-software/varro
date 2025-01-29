import React from 'react';
import { motion } from 'framer-motion';

const policies = [
    {
        icon: '👥',
        title: 'Развитие персонала',
        items: [
            'Программы обучения и повышения квалификации',
            'Карьерный рост и развитие',
            'Комфортные условия труда'
        ]
    },
    {
        icon: '🏥',
        title: 'Социальная поддержка',
        items: [
            'Медицинское страхование',
            'Социальные гарантии',
            'Поддержка семей сотрудников'
        ]
    },
    {
        icon: '🤝',
        title: 'Взаимодействие с сообществами',
        items: [
            'Поддержка местных инициатив',
            'Благотворительные программы',
            'Развитие инфраструктуры'
        ]
    }
];

const SocialPolicy = () => {
    return (
        <section className="section-padding">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary">Социальная политика</span>
                    <h2 className="text-4xl font-bold mt-2">Забота о людях</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Мы уделяем особое внимание развитию наших сотрудников и поддержке местных сообществ,
                        создавая устойчивую социальную среду.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {policies.map((policy, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="text-4xl mb-4">{policy.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{policy.title}</h3>
                            <ul className="space-y-3">
                                {policy.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start text-gray-600">
                                        <span className="text-primary mr-2">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        <div className="p-4">
                            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                            <div className="text-gray-600">Сотрудников</div>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl font-bold text-primary mb-2">50+</div>
                            <div className="text-gray-600">Социальных проектов</div>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl font-bold text-primary mb-2">95%</div>
                            <div className="text-gray-600">Удовлетворенность</div>
                        </div>
                        <div className="p-4">
                            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                            <div className="text-gray-600">Поддержка</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SocialPolicy;
