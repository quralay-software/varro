'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Zap, Lightbulb, ChevronRight } from 'lucide-react';
import { useTranslation } from 'next-i18next';
import { bgpzHistoryData } from '../../data/bgpzHistory';

const TimelineEvent = ({ event, index, data }) => {
    const Icon = event.Icon;
    const timelineData = data.timeline[index];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex items-center mb-8 sm:mb-12 last:mb-0"
        >
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="absolute left-2 sm:left-6 w-4 sm:w-5 h-4 sm:h-5 bg-primary rounded-full border-4 border-white" />

            <div className="ml-12 sm:ml-24 bg-white rounded-lg sm:rounded-none p-4 sm:p-6 md:p-8 w-full border max-w-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                    <div className="text-primary mr-4 sm:mr-6">
                        <Icon size={32} className="sm:w-12 sm:h-12" strokeWidth={1.5} />
                    </div>
                    <div>
                        <div className="text-primary font-bold text-lg sm:text-xl md:text-2xl mb-1">
                            {timelineData.year}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold font-sans">
                            {timelineData.title}
                        </h3>
                    </div>
                </div>
                <p className="text-gray-600 text-base sm:text-lg mb-4 sm:mb-6">
                    {timelineData.description}
                </p>
                <div className="space-y-2 sm:space-y-3">
                    {timelineData.achievements.map((achievement, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                            className="flex items-center"
                        >
                            <ChevronRight className="text-primary mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                            <span className="text-gray-600 text-base sm:text-lg">{achievement}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const FutureVision = ({ data }) => {
    const visionData = data.future_vision;

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative bg-white rounded-lg sm:rounded-none p-4 sm:p-6 md:p-8"
        >
            <div className="absolute right-0 top-0 w-20 sm:w-32 h-full overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 transform -rotate-45">
                        {[...Array(10)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute h-8 w-32 bg-primary"
                                style={{
                                    top: `${i * 4}rem`,
                                    right: `${-i * 2}rem`,
                                    transform: 'skew(-45deg)'
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold font-sans mb-4 sm:mb-6">
                    {visionData.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                    {visionData.description}
                </p>
                <div className="space-y-3 sm:space-y-4">
                    {visionData.goals.map((goal, index) => (
                        <div key={index} className="flex items-center">
                            <ChevronRight className="text-primary mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                            <span className="text-base sm:text-lg">{goal}</span>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const BgpzHistory = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const data = bgpzHistoryData[currentLang];

    const timelineEvents = [
        { Icon: Factory },
        { Icon: Zap }
    ];

    return (
        <section id="bgpz-history" className="section-padding bg-gray-50 py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12 md:mb-16"
                >
                    <span className="text-primary text-lg sm:text-xl font-sans">
                        {data.section_title}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans mt-2 sm:mt-3 mb-4 sm:mb-6">
                        {data.main_title}
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-3 sm:mt-4 max-w-3xl mx-auto">
                        {data.description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
                    <div className="relative max-w-2xl">
                        {timelineEvents.map((event, index) => (
                            <TimelineEvent
                                key={index}
                                event={event}
                                index={index}
                                data={data}
                            />
                        ))}
                    </div>
                    <div className="lg:mt-24">
                        <FutureVision data={data} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BgpzHistory;
