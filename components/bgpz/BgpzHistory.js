import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
    {
        year: 2007,
        title: 'Завершение I этапа строительства',
        description: 'Достигнута проектная мощность в 3,6 млрд м³ газа в год.',
        icon: '🏭',
        achievements: [
            'Запуск основных производственных мощностей',
            'Создание базовой инфраструктуры',
            'Формирование команды специалистов'
        ]
    },
    {
        year: 2024,
        title: 'II этап модернизации',
        description: 'Начало масштабной программы по повышению эффективности производства.',
        icon: '⚡',
        achievements: [
            'Внедрение новых технологий очистки',
            'Автоматизация производственных процессов',
            'Оптимизация энергопотребления'
        ]
    },
    {
        year: 2025,
        title: 'Технологическое развитие',
        description: 'Внедрение инновационных технологий стабилизации конденсата.',
        icon: '💡',
        achievements: [
            'Новые системы стабилизации конденсата',
            'Повышение качества продукции',
            'Расширение производственных возможностей'
        ]
    }
];

const TimelineEvent = ({ event, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="relative flex items-center mb-12 last:mb-0"
    >
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

        {/* Year Circle */}
        <div className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-white" />

        {/* Content */}
        <div className="ml-24 bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
            <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">{event.icon}</span>
                <div>
                    <div className="text-primary font-bold text-xl">{event.year}</div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                </div>
            </div>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <div className="space-y-2">
                {event.achievements.map((achievement, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                        className="flex items-center"
                    >
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-600">{achievement}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    </motion.div>
);

const BgpzHistory = () => {
    return (
        <section id="bgpz-history" className="section-padding bg-gray-50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary">История развития</span>
                    <h2 className="text-4xl font-bold mt-2">История БГПЗ</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        С момента основания БГПЗ постоянно развивается, внедряя новые технологии 
                        и повышая эффективность производства.
                    </p>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {timelineEvents.map((event, index) => (
                        <TimelineEvent key={index} event={event} index={index} />
                    ))}
                </div>

                {/* Future Vision */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 text-center bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto"
                >
                    <div className="text-4xl mb-4">🔮</div>
                    <h3 className="text-2xl font-bold mb-4">Взгляд в будущее</h3>
                    <p className="text-gray-600">
                        БГПЗ продолжает развиваться, внедряя инновационные технологии и 
                        расширяя производственные мощности. Наша цель — стать одним из самых 
                        современных и экологичных газоперерабатывающих предприятий в регионе.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default BgpzHistory;
