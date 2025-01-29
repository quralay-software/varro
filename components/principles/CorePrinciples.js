import React, { useState } from 'react';
import { motion } from 'framer-motion';

const principles = [
    {
        id: 1,
        icon: '🌱',
        title: 'Экологическая ответственность',
        description: 'Забота об окружающей среде и устойчивое развитие.',
        details: [
            'Минимизация выбросов, оптимизация водопользования',
            'Рекультивация земель и сокращение углеродного следа',
            'Внедрение экологически чистых технологий'
        ],
        color: 'from-green-500/20 to-green-600/20'
    },
    {
        id: 2,
        icon: '💡',
        title: 'Инновации и технологическое развитие',
        description: 'Постоянное совершенствование и внедрение новых технологий.',
        details: [
            'Внедрение передовых технологий добычи и переработки',
            'Автоматизация процессов и цифровизация управления',
            'Развитие инновационной инфраструктуры'
        ],
        color: 'from-blue-500/20 to-blue-600/20'
    },
    {
        id: 3,
        icon: '📈',
        title: 'Устойчивое развитие',
        description: 'Баланс экономических и социальных аспектов.',
        details: [
            'Баланс между экономической эффективностью и социальными обязательствами',
            'Внедрение долгосрочных стратегий роста и инвестиций',
            'Развитие человеческого капитала'
        ],
        color: 'from-purple-500/20 to-purple-600/20'
    },
    {
        id: 4,
        icon: '⚡',
        title: 'Охрана труда и безопасность',
        description: 'Приоритет безопасности и здоровья сотрудников.',
        details: [
            'Соблюдение строгих стандартов HSE',
            'Регулярное обучение сотрудников и аудит рабочих процессов',
            'Модернизация систем безопасности'
        ],
        color: 'from-yellow-500/20 to-yellow-600/20'
    },
    {
        id: 5,
        icon: '🤝',
        title: 'Прозрачность и этика',
        description: 'Честное ведение бизнеса и корпоративное управление.',
        details: [
            'Соблюдение международных норм корпоративного управления',
            'Честность в ведении бизнеса и антикоррупционная политика',
            'Прозрачная отчетность и коммуникация'
        ],
        color: 'from-red-500/20 to-red-600/20'
    },
    {
        id: 6,
        icon: '🏘️',
        title: 'Взаимодействие с сообществом',
        description: 'Поддержка и развитие местных сообществ.',
        details: [
            'Поддержка местных жителей и инфраструктуры',
            'Инвестирование в образование и благотворительные проекты',
            'Создание рабочих мест и развитие региона'
        ],
        color: 'from-orange-500/20 to-orange-600/20'
    }
];

const PrincipleCard = ({ principle, isActive, onClick }) => {
    return (
        <motion.div
            layout
            onClick={onClick}
            className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer
                       ${isActive ? 'md:col-span-2 md:row-span-2' : ''}`}
            whileHover={{ y: -5 }}
        >
            <div className="p-6 h-full relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${principle.color} opacity-10`} />
                <div className="relative z-10">
                    <div className="text-4xl mb-4">{principle.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                    <p className="text-gray-600 mb-4">{principle.description}</p>
                    
                    <motion.div
                        initial={false}
                        animate={{ height: isActive ? 'auto' : 0 }}
                        className="overflow-hidden"
                    >
                        {isActive && (
                            <ul className="space-y-3">
                                {principle.details.map((detail, index) => (
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

const CorePrinciples = () => {
    const [activePrinciple, setActivePrinciple] = useState(null);

    return (
        <section id="core-principles" className="section-padding">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary">Наши принципы</span>
                    <h2 className="text-4xl font-bold mt-2">Ключевые принципы работы</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Наши принципы определяют все аспекты нашей деятельности и помогают 
                        нам достигать высоких результатов, сохраняя баланс между бизнесом, 
                        обществом и окружающей средой.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {principles.map((principle) => (
                        <PrincipleCard
                            key={principle.id}
                            principle={principle}
                            isActive={activePrinciple === principle.id}
                            onClick={() => setActivePrinciple(
                                activePrinciple === principle.id ? null : principle.id
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorePrinciples;
