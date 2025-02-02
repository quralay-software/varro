import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { Search, Factory, Ship, RefreshCw, ChevronRight } from 'lucide-react';
import { servicesProcessData } from '../../data/servicesProcess';

const iconComponents = {
    Search,
    Pickaxe: (props) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size}
            height={props.size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={props.strokeWidth || 2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={props.className}
        >
            <path d="M16 12l-6 6M7 9l3-3 4 4-3 3M9 19l-3 3M17 7l3-3" />
            <path d="M16 12l-4-4" />
        </svg>
    ),
    Factory,
    Ship,
    RefreshCw
};

const ProcessStep = ({ step, isActive, onClick, isLast }) => {
    const IconComponent = iconComponents[step.icon];
    
    return (
        <motion.div
            className={`relative cursor-pointer ${isActive ? 'lg:col-span-2' : ''}`}
            layout
        >
            {/* Connection Line */}
            {!isLast && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full">
                    <motion.div
                        className="h-0.5 bg-primary/30"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            )}
            
            {/* Step Content */}
            <motion.div
                className={`bg-white p-8 relative z-10 h-full
                           transform transition-all duration-500 group
                           ${isActive ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-xl'}`}
                whileHover={{ y: -5 }}
                onClick={onClick}
            >
                <div className="text-primary mb-6">
                    <IconComponent 
                        size={isActive ? 48 : 40} 
                        strokeWidth={1.5}
                        className="transform transition-transform duration-500 group-hover:scale-110" 
                    />
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">{step.description}</p>
                
                <AnimatePresence>
                    {isActive && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <ul className="space-y-4">
                                {step.details.map((detail, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start text-lg text-gray-600"
                                    >
                                        <ChevronRight className="text-primary mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                                        <span className="leading-relaxed">{detail}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Step Number */}
                <div className="absolute top-6 right-6">
                    <div className="text-4xl font-bold text-gray-100">
                        {String(step.id).padStart(2, '0')}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const ServicesProcess = () => {
    const [activeStep, setActiveStep] = useState(null);
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const content = servicesProcessData[currentLang];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-xl font-medium">{content.sectionTitle}</span>
                    <h2 className="text-5xl font-bold mt-4 mb-6">{content.mainTitle}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {content.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {content.steps.map((step, index) => (
                        <ProcessStep
                            key={step.id}
                            step={step}
                            isActive={activeStep === step.id}
                            onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                            isLast={index === content.steps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesProcess;
