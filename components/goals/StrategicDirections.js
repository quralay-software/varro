import React, { useState } from 'react';
import { motion } from 'framer-motion';

const directions = [
    {
        id: 1,
        icon: '⚙️',
        title: 'Оптимизация производственных процессов',
        description: 'Повышение эффективности и автоматизация производства для достижения максимальных результатов.',
        details: [
            'Внедрение передовых технологий в добыче и переработке',
            'Снижение операционных затрат за счет автоматизации',
            'Увеличение коэффициента нефтеотдачи'
        ],
        color: 'from-blue-500/20 to-blue-600/20'
    },
    {
        id: 2,
        icon: '🌱',
        title: 'Экологическая устойчивость',
        description: 'Минимизация воздействия на окружающую среду и внедрение зеленых технологий.',
        details: [
            'Снижение выбросов парниковых газов',
            'Уменьшение потребления воды и внедрение технологий очистки',
            'Реализация программ по рекультивации земель'
        ],
        color: 'from-green-500/20 to-green-600/20'
    },
    {
        id: 3,
        icon: '🏗️',
        title: 'Развитие инфраструктуры и логистики',
        description: 'Модернизация существующей инфраструктуры и оптимизация логистических процессов.',
        details: [
            'Модернизация Боранкольского газоперерабатывающего завода',
            'Улучшение транспортных цепочек поставок',
            'Создание новых хранилищ и распределительных центров'
        ],
        color: 'from-yellow-500/20 to-yellow-600/20'
    },
    {
        id: 4,
        icon: '💡',
        title: 'Инвестиции в технологии и инновации',
        description: 'Внедрение передовых технологических решений для повышения эффективности производства.',
        details: [
            'Внедрение цифровых решений и IoT',
            'Использование искусственного интеллекта для прогнозирования производства',
            'Применение автоматизированных систем мониторинга'
        ],
        color: 'from-purple-500/20 to-purple-600/20'
    },
    {
        id: 5,
        icon: '👥',
        title: 'Социальная ответственность и развитие персонала',
        description: 'Создание благоприятных условий для сотрудников и поддержка местных сообществ.',
        details: [
            'Программы обучения и повышения квалификации сотрудников',
            'Обеспечение безопасных условий труда',
            'Развитие социальной инфраструктуры в регионах присутствия'
        ],
        color: 'from-red-500/20 to-red-600/20'
    }
];

const DirectionCard = ({ direction, isActive, onClick }) => {
    return (
        <motion.div
            layout
            onClick={onClick}
            className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer
                       ${isActive ? 'col-span-2 row-span-2' : 'col-span-1'}`}
            whileHover={{ y: -5 }}
        >
            <div className="p-6 h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${direction.color} opacity-10`} />
                <div className="relative z-10">
                    <div className="text-4xl mb-4">{direction.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{direction.title}</h3>
                    <p className="text-gray-600 mb-4">{direction.description}</p>
                    
                    <motion.div
                        initial={false}
                        animate={{ height: isActive ? 'auto' : 0 }}
                        className="overflow-hidden"
                    >
                        {isActive && (
                            <ul className="space-y-3">
                                {direction.details.map((detail, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start"
                                    >
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-600">{detail}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const StrategicDirections = () => {
    const [activeDirection, setActiveDirection] = useState(null);

    return (
        <section id="strategic-directions" className="section-padding">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary">Стратегия развития</span>
                    <h2 className="text-4xl font-bold mt-2">Ключевые направления</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Наша стратегия основана на пяти ключевых направлениях, которые обеспечивают 
                        устойчивое развитие компании и создают ценность для всех заинтересованных сторон.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {directions.map((direction) => (
                        <DirectionCard
                            key={direction.id}
                            direction={direction}
                            isActive={activeDirection === direction.id}
                            onClick={() => setActiveDirection(
                                activeDirection === direction.id ? null : direction.id
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategicDirections;
