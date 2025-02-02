import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { techInnovationContent } from '../../data/techInnovationContent';
import { Search, Zap, Cpu, CheckCircle2 } from 'lucide-react';

const iconComponents = {
    Search: Search,
    Zap: Zap,
    Cpu: Cpu
};

const TechInnovation = () => {
    const router = useRouter();
    const content = techInnovationContent[router.locale || "ru"];

    return (
        <section className="section-padding">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-xl">{content.sectionTitle}</span>
                    <h2 className="text-5xl font-bold mt-3">{content.mainTitle}</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {content.technologies.map((tech, index) => {
                        const IconComponent = iconComponents[tech.icon];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="bg-white p-8 hover:shadow-xl transition-shadow"
                            >
                                <div className="text-4xl mb-6">
                                    <IconComponent size={48} className="text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">{tech.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 bg-gradient-to-r from-primary to-secondary p-10 text-white"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h3 className="text-3xl font-bold mb-6">{content.investment.title}</h3>
                            <p className="text-xl mb-8 leading-relaxed">
                                {content.investment.description}
                            </p>
                            <ul className="space-y-4">
                                {content.investment.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-lg">
                                        <CheckCircle2 className="mr-3 h-6 w-6 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="w-56 h-56 relative">
                                <div className="absolute inset-0 bg-white bg-opacity-20 rounded-full animate-pulse"></div>
                                <div className="absolute inset-4 bg-white bg-opacity-30 rounded-full animate-pulse delay-150"></div>
                                <div className="absolute inset-8 bg-white bg-opacity-40 rounded-full animate-pulse delay-300"></div>
                                <div className="absolute inset-12 bg-white bg-opacity-50 rounded-full animate-pulse delay-500"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechInnovation;
