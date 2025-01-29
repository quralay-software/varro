import React from 'react';
import { motion } from 'framer-motion';

const plans = [
    {
        icon: '🔄',
        title: 'Модернизация производства',
        timeline: '2025-2027',
        description: 'Комплексная программа модернизации производственных мощностей.',
        milestones: [
            'Обновление систем очистки газа',
            'Модернизация компрессорного оборудования',
            'Внедрение энергоэффективных технологий'
        ]
    },
    {
        icon: '🤖',
        title: 'Автоматизация процессов',
        timeline: '2025-2026',
        description: 'Внедрение современных систем автоматизации и контроля.',
        milestones: [
            'Цифровизация производственных процессов',
            'Внедрение предиктивной аналитики',
            'Автоматизация системы безопасности'
        ]
    },
    {
        icon: '📈',
        title: 'Расширение мощностей',
        timeline: '2026-2027',
        description: 'Увеличение объемов переработки и расширение ресурсной базы.',
        milestones: [
            'Увеличение производительности на 20%',
            'Оптимизация логистических процессов',
            'Расширение складской инфраструктуры'
        ]
    }
];

const investments = [
    {
        category: 'Модернизация',
        amount: '$150M',
        period: '2025-2027',
        icon: '💰'
    },
    {
        category: 'Экология',
        amount: '$50M',
        period: '2025-2026',
        icon: '🌱'
    },
    {
        category: 'Автоматизация',
        amount: '$30M',
        period: '2025-2026',
        icon: '🤖'
    },
    {
        category: 'Безопасность',
        amount: '$20M',
        period: '2025-2027',
        icon: '🛡️'
    }
];

const PlanCard = ({ plan }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6"
    >
        <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">{plan.icon}</span>
            <div>
                <h3 className="text-xl font-bold">{plan.title}</h3>
                <span className="text-primary text-sm">{plan.timeline}</span>
            </div>
        </div>
        
        <p className="text-gray-600 mb-6">{plan.description}</p>

        <ul className="space-y-3">
            {plan.milestones.map((milestone, idx) => (
                <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start"
                >
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">{milestone}</span>
                </motion.li>
            ))}
        </ul>
    </motion.div>
);

const InvestmentCard = ({ investment, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="bg-white rounded-lg shadow-lg p-6 text-center"
    >
        <div className="text-3xl mb-3">{investment.icon}</div>
        <div className="text-2xl font-bold text-primary mb-2">
            {investment.amount}
        </div>
        <div className="text-gray-600 font-medium mb-1">
            {investment.category}
        </div>
        <div className="text-sm text-gray-500">
            {investment.period}
        </div>
    </motion.div>
);

const BgpzFuture = () => {
    return (
        <section className="section-padding">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary">Развитие</span>
                    <h2 className="text-4xl font-bold mt-2">Планы и инвестиции</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        БГПЗ активно инвестирует в модернизацию производства и внедрение 
                        инновационных технологий для обеспечения устойчивого развития.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {plans.map((plan, index) => (
                        <PlanCard key={index} plan={plan} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h3 className="text-2xl font-bold">Инвестиционная программа</h3>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                        Объем инвестиций по ключевым направлениям развития на 2025-2027 годы
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {investments.map((investment, index) => (
                        <InvestmentCard key={index} investment={investment} index={index} />
                    ))}
                </div>

                {/* Vision Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 
                             rounded-lg p-8 text-center"
                >
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-2xl font-bold mb-4">
                        Наше видение
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        К 2027 году БГПЗ станет одним из самых современных и экологичных 
                        газоперерабатывающих предприятий в регионе, обеспечивая высокое 
                        качество продукции и минимальное воздействие на окружающую среду.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default BgpzFuture;
