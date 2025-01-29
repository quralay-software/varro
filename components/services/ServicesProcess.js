import React, { useState } from 'react';
import { motion } from 'framer-motion';

const processSteps = [
    {
        id: 1,
        icon: '🔍',
        title: 'Анализ месторождений',
        description: 'Комплексное исследование потенциальных месторождений с использованием современных технологий разведки.',
        details: [
            'Геологическая разведка',
            'Оценка запасов',
            'Анализ рисков'
        ]
    },
    {
        id: 2,
        icon: '⛏️',
        title: 'Разведка и добыча',
        description: 'Применение эффективных методов добычи с учетом особенностей месторождения.',
        details: [
            'Бурение скважин',
            'Оптимизация добычи',
            'Мониторинг процессов'
        ]
    },
    {
        id: 3,
        icon: '⚡',
        title: 'Переработка и хранение',
        description: 'Переработка сырья на современном оборудовании БГПЗ с соблюдением всех стандартов.',
        details: [
            'Очистка газа',
            'Фракционирование',
            'Хранение продукции'
        ]
    },
    {
        id: 4,
        icon: '🚢',
        title: 'Логистика и поставки',
        description: 'Организация эффективной системы доставки продукции потребителям.',
        details: [
            'Транспортировка',
            'Оптимизация маршрутов',
            'Контроль качества'
        ]
    },
    {
        id: 5,
        icon: '🔄',
        title: 'Поддержка и оптимизация',
        description: 'Постоянное улучшение процессов и техническая поддержка на всех этапах.',
        details: [
            'Техобслуживание',
            'Модернизация',
            'Консультации'
        ]
    }
];

const ProcessStep = ({ step, isActive, onClick }) => {
    return (
        <motion.div
            className={`relative cursor-pointer ${isActive ? 'lg:col-span-2' : ''}`}
            whileHover={{ scale: 1.02 }}
            onClick={onClick}
        >
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-primary/30 -translate-y-1/2" />
            
            {/* Step Content */}
            <div className={`bg-white rounded-lg shadow-lg p-6 relative z-10
                           transition-all duration-300 ${isActive ? 'ring-2 ring-primary' : 'hover:shadow-xl'}`}>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <ul className="space-y-2">
                            {step.details.map((detail, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center text-gray-600"
                                >
                                    <span className="text-primary mr-2">•</span>
                                    {detail}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

const ServicesProcess = () => {
    const [activeStep, setActiveStep] = useState(null);

    return (
        <section className="section-padding">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary">Процесс работы</span>
                    <h2 className="text-4xl font-bold mt-2">Как мы работаем</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Наш процесс работы построен на принципах эффективности, 
                        безопасности и экологической ответственности.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {processSteps.map((step) => (
                        <ProcessStep
                            key={step.id}
                            step={step}
                            isActive={activeStep === step.id}
                            onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesProcess;
