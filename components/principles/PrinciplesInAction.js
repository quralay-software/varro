import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cases = [
    {
        title: 'Экологические инициативы',
        description: 'За последние 5 лет мы достигли значительного прогресса в снижении воздействия на окружающую среду.',
        stats: [
            { label: 'Снижение выбросов', value: '-20%' },
            { label: 'Экономия воды', value: '-30%' },
            { label: 'Переработка отходов', value: '85%' }
        ],
        image: 'https://picsum.photos/800/600?random=21'
    },
    {
        title: 'Безопасность производства',
        description: 'Постоянное совершенствование систем безопасности и обучение персонала.',
        stats: [
            { label: 'Дней без происшествий', value: '365+' },
            { label: 'Обученных сотрудников', value: '100%' },
            { label: 'Инвестиции в HSE', value: '$5M' }
        ],
        image: 'https://picsum.photos/800/600?random=22'
    },
    {
        title: 'Социальные проекты',
        description: 'Активное участие в развитии местных сообществ и поддержка социальных инициатив.',
        stats: [
            { label: 'Социальные проекты', value: '50+' },
            { label: 'Благополучатели', value: '10K+' },
            { label: 'Инвестиции', value: '$2M' }
        ],
        image: 'https://picsum.photos/800/600?random=23'
    }
];

const CaseCard = ({ caseItem, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
        <div className="relative h-48">
            <Image
                src={caseItem.image}
                alt={caseItem.title}
                fill
                className="object-cover"
            />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold mb-3">{caseItem.title}</h3>
            <p className="text-gray-600 mb-6">{caseItem.description}</p>
            <div className="grid grid-cols-3 gap-4">
                {caseItem.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                        <div className="text-primary font-bold text-xl">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
);

const PrinciplesInAction = () => {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary">Принципы в действии</span>
                    <h2 className="text-4xl font-bold mt-2">Реальные результаты</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Наши принципы — это не просто слова. Мы ежедневно воплощаем их в жизнь 
                        через конкретные проекты и инициативы.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((caseItem, index) => (
                        <CaseCard key={index} caseItem={caseItem} index={index} />
                    ))}
                </div>

                {/* Video Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden"
                >
                    <div className="p-8 text-center">
                        <h3 className="text-2xl font-bold mb-4">
                            Наши корпоративные ценности
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Узнайте больше о том, как мы воплощаем наши принципы в жизнь 
                            через конкретные действия и проекты.
                        </p>
                        <div className="relative h-[400px] rounded-lg overflow-hidden">
                            <Image
                                src="https://picsum.photos/1920/1080?random=24"
                                alt="Corporate Values"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="bg-primary/90 hover:bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center">
                                    <span className="text-2xl">▶️</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PrinciplesInAction;
