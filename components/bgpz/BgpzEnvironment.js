import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
    {
        title: 'Снижение выбросов CO₂',
        current: 75,
        target: 100,
        reduction: true,
        color: 'bg-green-500',
        icon: '🌱',
        description: 'Внедрение новых технологий переработки позволило значительно снизить выбросы CO₂.',
        stats: {
            current: '-25%',
            target: '-40%',
            timeline: '2025'
        }
    },
    {
        title: 'Экономия воды',
        current: 80,
        target: 100,
        reduction: true,
        color: 'bg-blue-500',
        icon: '💧',
        description: 'Замкнутые циклы водопользования обеспечивают существенную экономию водных ресурсов.',
        stats: {
            current: '-20%',
            target: '-30%',
            timeline: '2024'
        }
    },
    {
        title: 'Переработка отходов',
        current: 85,
        target: 100,
        reduction: false,
        color: 'bg-yellow-500',
        icon: '♻️',
        description: 'Программа по рекультивации земель и уменьшению отходов производства.',
        stats: {
            current: '85%',
            target: '95%',
            timeline: '2026'
        }
    }
];

const initiatives = [
    {
        icon: '🌿',
        title: 'Зеленые технологии',
        description: 'Внедрение экологически чистых технологий производства'
    },
    {
        icon: '🔋',
        title: 'Энергоэффективность',
        description: 'Оптимизация энергопотребления и использование возобновляемых источников'
    },
    {
        icon: '🔄',
        title: 'Циркулярная экономика',
        description: 'Максимальное использование вторичных ресурсов'
    },
    {
        icon: '🌍',
        title: 'Экомониторинг',
        description: 'Постоянный контроль воздействия на окружающую среду'
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
        
        <p className="text-gray-600 mb-6">{metric.description}</p>

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
                    {metric.stats.target}
                </div>
                <div className="text-sm text-gray-500">Цель</div>
            </div>
            <div>
                <div className="text-lg font-bold text-secondary">
                    {metric.stats.timeline}
                </div>
                <div className="text-sm text-gray-500">Год</div>
            </div>
        </div>
    </motion.div>
);

const InitiativeCard = ({ initiative, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-lg shadow-lg p-6"
    >
        <div className="text-3xl mb-4">{initiative.icon}</div>
        <h3 className="text-lg font-bold mb-2">{initiative.title}</h3>
        <p className="text-gray-600">{initiative.description}</p>
    </motion.div>
);

const BgpzEnvironment = () => {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary">Экология</span>
                    <h2 className="text-4xl font-bold mt-2">Экологическая ответственность</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Мы стремимся минимизировать воздействие на окружающую среду, внедряя 
                        современные технологии и следуя принципам устойчивого развития.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {metrics.map((metric, index) => (
                        <MetricCard key={index} metric={metric} />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {initiatives.map((initiative, index) => (
                        <InitiativeCard key={index} initiative={initiative} index={index} />
                    ))}
                </div>

                {/* Environmental Commitment */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center"
                >
                    <div className="text-4xl mb-4">🌍</div>
                    <h3 className="text-2xl font-bold mb-4">
                        Наши обязательства
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        БГПЗ придерживается самых высоких экологических стандартов и постоянно 
                        инвестирует в природоохранные мероприятия, обеспечивая устойчивое 
                        развитие производства.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default BgpzEnvironment;
