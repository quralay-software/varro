import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useInView } from 'react-intersection-observer';
import { Cpu, Factory, Leaf } from 'lucide-react';
import { goalsRoadmapData } from '../../data/goalsRoadmap';

const iconComponents = {
    2025: Cpu,
    2027: Factory,
    2030: Leaf
};

const GoalsRoadmap = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const content = goalsRoadmapData[currentLang];

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    return (
        <section className="py-8 lg:py-12 bg-gray-50" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 lg:mb-12"
                >
                    <span className="text-primary text-lg lg:text-xl font-medium block mb-2 lg:mb-3">
                        {content.sectionTitle}
                    </span>
                    <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-3 lg:mb-4">
                        {content.mainTitle}
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {content.description}
                    </p>
                </motion.div>

                <div ref={containerRef} className="relative">
                    <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 transform lg:-translate-x-1/2">
                        <div className="absolute inset-0 w-[1px] bg-primary/50" />
                        {content.milestones.map((_, index) => (
                            <div key={index} className="absolute -left-[3px]" style={{ top: `${(index * 100) / (content.milestones.length - 1)}%` }}>
                                <div className="relative w-[7px] h-[7px] rounded-full border border-primary bg-white" />
                                <div className="absolute top-[2px] left-[2px] w-[3px] h-[3px] bg-primary rounded-full" />
                                {index < content.milestones.length - 1 && (
                                    <div className="absolute top-[3px] left-[3px] w-[1px] bg-primary/50"
                                         style={{
                                             height: `${100 / (content.milestones.length - 1)}%`,
                                             transform: 'translateX(-50%)'
                                         }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {content.milestones.map((milestone, index) => {
                        const isEven = index % 2 === 0;
                        const IconComponent = iconComponents[milestone.year];

                        const marginClass = index === 1 ? '-mt-12' : index === 2 ? '-mt-12' : '';

                        return (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`flex items-start mb-6 lg:mb-8
                                    flex-col pl-12 lg:pl-0 ${marginClass}
                                    ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                            >
                                <div className="w-full lg:w-1/2 px-0 lg:px-6">
                                    <motion.div
                                        className="bg-white p-5 lg:p-6 rounded-lg shadow-sm"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="text-primary mb-3">
                                            <IconComponent size={32} strokeWidth={1.5} />
                                        </div>
                                        <div className="text-primary font-bold text-xl lg:text-2xl mb-2 font-sans">
                                            {milestone.year}
                                        </div>
                                        <h3 className="text-xl lg:text-2xl font-bold mb-2 text-gray-800 font-sans">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-3">
                                            {milestone.description}
                                        </p>
                                        <ul className="space-y-2">
                                            {milestone.achievements.map((achievement, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="flex items-start text-base lg:text-lg text-gray-600"
                                                >
                                                    <div className="text-primary mr-3 mt-1.5">
                                                        <div className="h-2 w-2 bg-primary rounded-full" />
                                                    </div>
                                                    <span className="leading-relaxed">{achievement}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                </div>

                                <motion.div
                                    className="left-0 lg:left-1/2 w-8 h-8 lg:w-6 lg:h-6"
                                    style={{
                                        scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]),
                                        transform: `translateX(${isEven ? '0' : '0'}) translateY(2rem)`,
                                        ['@media (min-width: 1024px)']: {
                                            transform: 'translateX(-50%) translateY(0)'
                                        }
                                    }}
                                >
                                </motion.div>

                                <div className="hidden lg:block lg:w-1/2 lg:px-6" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default GoalsRoadmap;
