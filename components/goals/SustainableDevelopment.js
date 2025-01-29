import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
    {
        title: 'Снижение выбросов CO₂',
        current: 40,
        target: 100,
        unit: '%',
        color: 'bg-green-500',
        icon: '🌱'
    },
    {
        title: 'Рост объемов переработки газа',
        current: 75,
        target: 100,
        unit: '%',
        color: 'bg-blue-500',
        icon: '⚡'
    },
    {
        title: 'Объем инвестиций в технологии',
        current: 60,
        target: 100,
        unit: 'M$',
        color: 'bg-purple-500',
        icon: '💰'
    }
];

const ProgressBar = ({ value, color }) => (
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
        <div className="mb-4">
            <ProgressBar value={(metric.current / metric.target) * 100} color={metric.color} />
        </div>
        <div className="flex justify-between text-sm text-gray-600">
            <span>Текущий: {metric.current}{metric.unit}</span>
            <span>Цель: {metric.target}{metric.unit}</span>
        </div>
    </motion.div>
);

const SustainableDevelopment = () => {
    return (
        <section className="section-padding">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary">Устойчивое развитие</span>
                    <h2 className="text-4xl font-bold mt-2">Наш вклад в будущее</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Мы стремимся к устойчивому развитию через внедрение экологически 
                        чистых технологий и ответственное использование ресурсов.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        <div className="text-3xl font-bold text-primary mb-2">85%</div>
                        <div className="text-gray-600">Переработка отходов</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                        <div className="text-3xl font-bold text-primary mb-2">50%</div>
                        <div className="text-gray-600">Энергоэффективность</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                        <div className="text-3xl font-bold text-primary mb-2">30%</div>
                        <div className="text-gray-600">Экономия воды</div>
                    </div>
                    <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                        <div className="text-3xl font-bold text-primary mb-2">100+</div>
                        <div className="text-gray-600">Эко-инициатив</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SustainableDevelopment;
