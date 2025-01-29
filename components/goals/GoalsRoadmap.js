import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
    {
        year: 2025,
        title: 'Автоматизация добычи и переработки',
        description: 'Внедрение передовых систем автоматизации и цифрового контроля на всех этапах производства.',
        achievements: [
            'Цифровизация 80% производственных процессов',
            'Внедрение предиктивной аналитики',
            'Сокращение операционных затрат на 30%'
        ],
        icon: '🤖'
    },
    {
        year: 2027,
        title: 'Завершение модернизации Боранкольского ГПЗ',
        description: 'Полное обновление технологической базы и увеличение мощности переработки.',
        achievements: [
            'Увеличение мощности переработки на 50%',
            'Модернизация систем очистки',
            'Оптимизация энергопотребления'
        ],
        icon: '🏭'
    },
    {
        year: 2030,
        title: '100% использование экологически безопасных технологий',
        description: 'Достижение максимальной экологической эффективности во всех процессах.',
        achievements: [
            'Нулевой углеродный след',
            'Полная переработка отходов',
            'Использование возобновляемых источников энергии'
        ],
        icon: '🌿'
    }
];

const GoalsRoadmap = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section className="section-padding bg-gray-50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary">Дорожная карта</span>
                    <h2 className="text-4xl font-bold mt-2">Путь к успеху</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Наша дорожная карта определяет ключевые этапы развития компании 
                        и достижения стратегических целей.
                    </p>
                </motion.div>

                <div ref={containerRef} className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20" />
                    
                    {/* Timeline Content */}
                    {milestones.map((milestone, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`flex items-center mb-16 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                {/* Content */}
                                <div className="w-1/2 px-8">
                                    <div className="bg-white rounded-lg shadow-lg p-6">
                                        <div className="text-4xl mb-4">{milestone.icon}</div>
                                        <div className="text-primary font-bold text-xl mb-2">
                                            {milestone.year}
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                                        <p className="text-gray-600 mb-4">{milestone.description}</p>
                                        <ul className="space-y-2">
                                            {milestone.achievements.map((achievement, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="flex items-start"
                                                >
                                                    <span className="text-primary mr-2">•</span>
                                                    <span className="text-gray-600">{achievement}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Timeline Point */}
                                <div className="relative">
                                    <motion.div
                                        className="w-6 h-6 bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                            scale: useTransform(scrollYProgress, [0, 1], [1, 1.5])
                                        }}
                                    />
                                </div>

                                {/* Empty Space for Layout */}
                                <div className="w-1/2 px-8" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default GoalsRoadmap;
