import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
    {
        title: 'Уровень выбросов CO₂',
        current: 60,
        target: 100,
        reduction: true,
        color: 'bg-green-500',
        icon: '🌱',
        stats: {
            current: '-40%',
            goal: 'к 2025 году',
            trend: 'Снижение'
        }
    },
    {
        title: 'Безопасность производства',
        current: 95,
        target: 100,
        reduction: false,
        color: 'bg-blue-500',
        icon: '⚡',
        stats: {
            current: '95%',
            goal: 'соответствие стандартам',
            trend: 'Рост'
        }
    },
    {
        title: 'Потребление воды',
        current: 70,
        target: 100,
        reduction: true,
        color: 'bg-cyan-500',
        icon: '💧',
        stats: {
            current: '-30%',
            goal: 'к 2024 году',
            trend: 'Снижение'
        }
    },
    {
        title: 'Энергоэффективность',
        current: 80,
        target: 100,
        reduction: false,
        color: 'bg-yellow-500',
        icon: '⚡',
        stats: {
            current: '+80%',
            goal: 'эффективность',
            trend: 'Рост'
        }
    }
];

const ProgressBar = ({ value, color, reduction }) => (
    <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${value}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full ${color}`}
        />
    </div>
);

const MetricCard = ({ metric }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6"
    >
        <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">{metric.icon}</span>
            <h3 className="text-xl font-bold">{metric.title}</h3>
        </div>
        
        <div className="mb-6">
            <ProgressBar 
                value={metric.current} 
                color={metric.color} 
                reduction={metric.reduction}
            />
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
            <div>
                <div className="text-lg font-bold text-primary">
                    {metric.stats.current}
                </div>
                <div className="text-sm text-gray-500">Текущий</div>
            </div>
            <div>
                <div className="text-lg font-bold text-gray-700">
                    {metric.stats.goal}
                </div>
                <div className="text-sm text-gray-500">Цель</div>
            </div>
            <div>
                <div className="text-lg font-bold text-secondary">
                    {metric.stats.trend}
                </div>
                <div className="text-sm text-gray-500">Тренд</div>
            </div>
        </div>
    </motion.div>
);

const PrinciplesStats = () => {
    return (
        <section className="section-padding">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary">Почему это важно</span>
                    <h2 className="text-4xl font-bold mt-2">Измеримые результаты</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Мы постоянно отслеживаем ключевые показатели эффективности наших 
                        принципов и их влияние на бизнес, общество и окружающую среду.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {metrics.map((metric, index) => (
                        <MetricCard key={index} metric={metric} />
                    ))}
                </div>

                {/* Additional Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12"
                >
                    <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                        <div className="text-3xl font-bold text-primary mb-2">100%</div>
                        <div className="text-gray-600">Соответствие стандартам</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                        <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                        <div className="text-gray-600">Обученных сотрудников</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                        <div className="text-3xl font-bold text-primary mb-2">50+</div>
                        <div className="text-gray-600">Эко-проектов</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                        <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                        <div className="text-gray-600">Мониторинг</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PrinciplesStats;
