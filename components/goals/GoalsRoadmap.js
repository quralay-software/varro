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
        <section className="py-20 bg-gray-50" ref={ref}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-xl font-medium block mb-4">
                        {content.sectionTitle}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sans">
                        {content.mainTitle}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {content.description}
                    </p>
                </motion.div>

                <div ref={containerRef} className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary/30 via-primary to-primary/30" />

                    {/* Timeline Content */}
                    {content.milestones.map((milestone, index) => {
                        const isEven = index % 2 === 0;
                        const IconComponent = iconComponents[milestone.year];

                        return (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`flex items-center mb-16 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                            >
                                {/* Content */}
                                <div className="w-1/2 px-8">
                                    <motion.div
                                        className="bg-white p-8"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="text-primary mb-6">
                                            <IconComponent size={40} strokeWidth={1.5} />
                                        </div>
                                        <div className="text-primary font-bold text-2xl mb-4 font-sans">
                                            {milestone.year}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 text-gray-800 font-sans">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                            {milestone.description}
                                        </p>
                                        <ul className="space-y-4">
                                            {milestone.achievements.map((achievement, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="flex items-start text-lg text-gray-600"
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

                                {/* Timeline Point */}
                                <motion.div
                                    className="relative w-6 h-6"
                                    style={{
                                        scale: useTransform(scrollYProgress, [0, 1], [1, 1.5])
                                    }}
                                >
                                    <div className="w-6 h-6 bg-primary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                                    <div className="w-12 h-12 bg-primary/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-ping" />
                                </motion.div>

                                {/* Empty Space for Layout */}
                                <div className="w-1/2 px-8" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default GoalsRoadmap;
