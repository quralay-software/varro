import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { RefreshCw, Cpu, TrendingUp, Wrench, Leaf, Shield, Target, ChevronRight } from 'lucide-react';
import { bgpzFutureData } from '../../data/bgpzFuture';

const ICONS = {
    'RefreshCw': RefreshCw,
    'Cpu': Cpu,
    'TrendingUp': TrendingUp,
    'Wrench': Wrench,
    'Leaf': Leaf,
    'Shield': Shield,
    'Target': Target
};

const PlanCard = ({ plan }) => {
    const IconComponent = ICONS[plan.icon] || RefreshCw;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-none p-8"
        >
            <div className="flex items-center mb-6">
                <div className="text-primary mr-4">
                    <IconComponent size={42} strokeWidth={1.5} />
                </div>
                <div>
                    <h3 className="text-2xl font-bold font-sans">{plan.title}</h3>
                    <span className="text-primary text-lg">{plan.timeline}</span>
                </div>
            </div>
            
            <p className="text-gray-600 text-lg mb-8">{plan.description}</p>

            <ul className="space-y-4">
                {plan.milestones.map((milestone, idx) => (
                    <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start"
                    >
                        <ChevronRight className="text-primary mr-3 h-5 w-5 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 text-lg">{milestone}</span>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

const InvestmentCard = ({ investment, index }) => {
    const IconComponent = ICONS[investment.icon] || Wrench;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-none p-8 text-center"
        >
            <div className="text-primary mb-4">
                <IconComponent size={48} strokeWidth={1.5} />
            </div>
            <div className="text-2xl font-bold text-primary mb-2">
                {investment.amount}
            </div>
            <div className="text-gray-800 font-bold text-lg mb-1 font-sans">
                {investment.category}
            </div>
            <div className="text-gray-600 text-lg">
                {investment.period}
            </div>
        </motion.div>
    );
};

const BgpzFuture = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const data = bgpzFutureData[currentLang];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-xl mb-4 block">
                        {data.section_title}
                    </span>
                    <h2 className="text-5xl font-bold font-sans mb-6">
                        {data.main_title}
                    </h2>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                        {data.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {data.plans.map((plan, index) => (
                        <PlanCard key={index} plan={plan} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h3 className="text-3xl font-bold font-sans mb-4">
                        {data.investment_title}
                    </h3>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                        {data.investment_description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {data.investments.map((investment, index) => (
                        <InvestmentCard key={index} investment={investment} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 bg-white rounded-none p-12 text-center"
                >
                    <div className="text-primary mb-6">
                        <Target size={64} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-3xl font-bold font-sans mb-6">
                        {data.vision_title}
                    </h3>
                    <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                        {data.vision_description}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default BgpzFuture;
