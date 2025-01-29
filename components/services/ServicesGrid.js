import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        id: 1,
        icon: '🛢️',
        title: 'Добыча нефти и газа',
        description: 'Комплексный подход к разведке и добыче углеводородов с использованием современных технологий.',
        details: [
            'Использование передовых технологий разведки и бурения',
            'Повышение коэффициента нефтеотдачи месторождений',
            'Экологически безопасные методы добычи'
        ],
        image: 'https://picsum.photos/800/600?random=2'
    },
    {
        id: 2,
        icon: '⚡',
        title: 'Переработка и хранение газа',
        description: 'Эффективное управление газоперерабатывающими мощностями и инфраструктурой хранения.',
        details: [
            'Управление Боранкольским газоперерабатывающим заводом (БГПЗ)',
            'Производство и разделение углеводородных фракций',
            'Транспортировка и хранение газа для внутреннего рынка и экспорта'
        ],
        image: 'https://picsum.photos/800/600?random=3'
    },
    {
        id: 3,
        icon: '🚢',
        title: 'Продажа и логистика',
        description: 'Оптимизированные решения по поставке нефтегазовых продуктов на внутренний и международный рынки.',
        details: [
            'Поставка нефти и газа на внутренний рынок и международным клиентам',
            'Оптимизация логистических цепочек для минимизации затрат',
            'Контракты с ведущими энергетическими компаниями'
        ],
        image: 'https://picsum.photos/800/600?random=4'
    },
    {
        id: 4,
        icon: '🌿',
        title: 'Управление безопасностью и охраной окружающей среды',
        description: 'Комплексный подход к обеспечению безопасности и защите окружающей среды.',
        details: [
            'Контроль выбросов и сокращение воздействия на природу',
            'Утилизация отходов и экономное использование ресурсов',
            'Внедрение передовых HSE-стандартов'
        ],
        image: 'https://picsum.photos/800/600?random=5'
    },
    {
        id: 5,
        icon: '🔧',
        title: 'Техническое обслуживание и модернизация',
        description: 'Профессиональное обслуживание и модернизация нефтегазовой инфраструктуры.',
        details: [
            'Ремонт и обслуживание инфраструктуры нефтегазовых объектов',
            'Модернизация оборудования для повышения эффективности',
            'Цифровизация процессов управления производством'
        ],
        image: 'https://picsum.photos/800/600?random=6'
    }
];

const ServiceCard = ({ service, isActive, onClick }) => {
    return (
        <motion.div
            layout
            onClick={onClick}
            className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300
                       ${isActive ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}
            whileHover={{ y: -5 }}
        >
            <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                
                <AnimatePresence>
                    {isActive && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4"
                        >
                            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <ul className="space-y-2">
                                {service.details.map((detail, index) => (
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
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

const ServicesGrid = () => {
    const [activeService, setActiveService] = useState(null);

    return (
        <section id="services-grid" className="section-padding">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary">Наши услуги</span>
                    <h2 className="text-4xl font-bold mt-2">Комплексные решения</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Мы предоставляем полный спектр услуг в нефтегазовой отрасли, 
                        от разведки и добычи до переработки и поставки конечным потребителям.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            isActive={activeService === service.id}
                            onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
