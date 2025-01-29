import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const activities = [
    {
        id: 1,
        title: 'Добыча нефти и газа',
        icon: '🛢️',
        content: {
            main: 'Компания ведёт работы на месторождении Толкын площадью 49 км², обладающем значительными запасами углеводородов.',
            details: [
                'Добыча ведётся вахтовым методом, обеспечивая непрерывность производства',
                'Внедрение передовых методов разведки и бурения',
                'Повышение коэффициента извлечения нефти'
            ]
        },
        image: 'https://picsum.photos/800/600?random=1'
    },
    {
        id: 2,
        title: 'Переработка газа',
        icon: '⚙️',
        content: {
            main: 'Боранкольский газоперерабатывающий завод (БГПЗ) перерабатывает попутный и природный газ, обеспечивая выпуск продукции высокой чистоты.',
            details: [
                'Запуск в 2007 году, модернизация в 2024',
                'Производственная мощность — 3,6 млрд м³ газа в год',
                'Современная установка стабилизации конденсата'
            ]
        },
        image: 'https://picsum.photos/800/600?random=2'
    },
    {
        id: 3,
        title: 'Продажа и экспорт',
        icon: '🚢',
        content: {
            main: 'Продукция компании реализуется на внутреннем рынке Казахстана и экспортируется в страны региона.',
            details: [
                'Оптимизация логистических процессов',
                'Эффективное распределение продукции',
                'Работа с ключевыми клиентами'
            ]
        },
        image: 'https://picsum.photos/800/600?random=3'
    }
];

const ActivityCard = ({ activity, isActive, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                isActive ? 'bg-primary text-white shadow-lg' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={onClick}
        >
            <div className="text-4xl mb-4">{activity.icon}</div>
            <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
            <p className={`text-sm ${isActive ? 'text-gray-100' : 'text-gray-600'}`}>
                {activity.content.main}
            </p>
        </motion.div>
    );
};

const ActivitiesMain = () => {
    const [activeActivity, setActiveActivity] = useState(activities[0]);

    return (
        <section className="section-padding bg-gray-50">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <span className="text-primary">Основные направления</span>
                    <h2 className="text-4xl font-bold mt-2">Наша деятельность</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    {activities.map((activity) => (
                        <ActivityCard
                            key={activity.id}
                            activity={activity}
                            isActive={activeActivity.id === activity.id}
                            onClick={() => setActiveActivity(activity)}
                        />
                    ))}
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeActivity.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold">{activeActivity.title}</h3>
                            <p className="text-gray-700">{activeActivity.content.main}</p>
                            <ul className="space-y-3">
                                {activeActivity.content.details.map((detail, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-primary mr-2">•</span>
                                        <span className="text-gray-700">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[400px] rounded-lg overflow-hidden">
                            <Image
                                src={activeActivity.image}
                                alt={activeActivity.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ActivitiesMain;
