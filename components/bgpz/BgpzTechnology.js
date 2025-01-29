import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
    {
        id: 1,
        icon: '🔄',
        title: 'Разделение и очистка природного газа',
        description: 'Высокоэффективные системы сепарации и очистки газа.',
        details: [
            'Производство фракций сжиженных углеводородов',
            'Высокоточные системы фильтрации и очистки',
            'Современные катализаторы и адсорбенты'
        ],
        stats: {
            efficiency: '99.9%',
            capacity: '3.6 млрд м³/год'
        },
        color: 'from-blue-500/20 to-blue-600/20'
    },
    {
        id: 2,
        icon: '⚡',
        title: 'Газофракционирующая установка',
        description: 'Комплексная система разделения углеводородных фракций.',
        details: [
            '95% готовность по оборудованию (МО)',
            '73% строительных работ (СМР)',
            'Автоматизированное управление процессами'
        ],
        stats: {
            readiness: '95%',
            construction: '73%'
        },
        color: 'from-green-500/20 to-green-600/20'
    },
    {
        id: 3,
        icon: '🔬',
        title: 'Стабилизация конденсата',
        description: 'Современная система повышения качества продукции.',
        details: [
            'Современная система повышения качества',
            'Минимизация потерь газа',
            'Контроль качества в реальном времени'
        ],
        stats: {
            quality: '99.8%',
            recovery: '98.5%'
        },
        color: 'from-purple-500/20 to-purple-600/20'
    },
    {
        id: 4,
        icon: '🚢',
        title: 'Хранение и транспортировка',
        description: 'Комплексная инфраструктура логистики.',
        details: [
            'Собственная инфраструктура для поставок',
            'Контроль качества на всех этапах',
            'Современные системы мониторинга'
        ],
        stats: {
            storage: '50000 м³',
            delivery: '24/7'
        },
        color: 'from-yellow-500/20 to-yellow-600/20'
    }
];

const TechnologyCard = ({ tech }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
        <div className="p-6 h-full relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${tech.color}`} />
            <div className="relative z-10">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                <p className="text-gray-600 mb-4">{tech.description}</p>
                
                <ul className="space-y-3 mb-6">
                    {tech.details.map((detail, idx) => (
                        <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start"
                        >
                            <span className="text-primary mr-2">•</span>
                            <span className="text-gray-600">{detail}</span>
                        </motion.li>
                    ))}
                </ul>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                    {Object.entries(tech.stats).map(([key, value], idx) => (
                        <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                            <div className="font-bold text-primary">{value}</div>
                            <div className="text-sm text-gray-500 capitalize">{key}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </motion.div>
);

const BgpzTechnology = () => {
    return (
        <section className="section-padding">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary">Технологии</span>
                    <h2 className="text-4xl font-bold mt-2">Технологические возможности</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        БГПЗ оснащен современным оборудованием и использует передовые технологии 
                        для обеспечения эффективной и безопасной переработки газа.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {technologies.map((tech) => (
                        <TechnologyCard key={tech.id} tech={tech} />
                    ))}
                </div>

                {/* Innovation Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 
                             rounded-lg p-8 text-center"
                >
                    <div className="text-4xl mb-4">💡</div>
                    <h3 className="text-2xl font-bold mb-4">
                        Инновации в действии
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Мы постоянно инвестируем в новые технологии и модернизацию оборудования, 
                        чтобы обеспечить максимальную эффективность и экологичность производства.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default BgpzTechnology;
