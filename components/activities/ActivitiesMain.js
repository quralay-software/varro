import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { activitiesMainContent } from '../../data/activitiesMainContent';
import { Droplets, Factory, Ship } from 'lucide-react';

const iconComponents = {
    Droplets: Droplets,
    Factory: Factory,
    Ship: Ship
};

const ActivityCard = ({ activity, isActive, onClick }) => {
    const IconComponent = iconComponents[activity.icon];
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 cursor-pointer transition-all duration-300 ${
                isActive ? 'bg-primary text-white shadow-lg' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={onClick}
        >
            <div className="text-4xl mb-4">
                <IconComponent size={40} className={isActive ? 'text-white' : 'text-primary'} />
            </div>
            <h3 className="text-2xl font-bold mb-3">{activity.title}</h3>
            <p className={`text-base leading-relaxed ${isActive ? 'text-gray-100' : 'text-gray-600'}`}>
                {activity.content.main}
            </p>
        </motion.div>
    );
};

const ActivitiesMain = () => {
    const router = useRouter();
    const content = activitiesMainContent[router.locale || "ru"];
    const [activeActivity, setActiveActivity] = useState(content.activities[0]);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);
    const containerRef = useRef(null);

    const rotateActivity = useCallback(() => {
        setActiveActivity(current => {
            const currentIndex = content.activities.findIndex(a => a.id === current.id);
            const nextIndex = (currentIndex + 1) % content.activities.length;
            return content.activities[nextIndex];
        });
    }, [content.activities]);

    const handleMouseEnter = () => {
        setIsPaused(true);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const handleActivityClick = (activity) => {
        setActiveActivity(activity);
        setIsPaused(true);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        if (!isPaused) {
            intervalRef.current = setInterval(rotateActivity, 3000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [isPaused, rotateActivity]);

    return (
        <section className="section-padding bg-gray-50">
            <div className="container mx-auto" ref={containerRef} onMouseLeave={handleMouseLeave}>
                <div className="text-center mb-12">
                    <span className="text-primary text-xl">{content.sectionTitle}</span>
                    <h2 className="text-5xl font-bold mt-3">{content.mainTitle}</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12" onMouseEnter={handleMouseEnter}>
                    {content.activities.map((activity) => (
                        <ActivityCard
                            key={activity.id}
                            activity={activity}
                            isActive={activeActivity.id === activity.id}
                            onClick={() => handleActivityClick(activity)}
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
                        onMouseEnter={handleMouseEnter}
                    >
                        <div className="space-y-8">
                            <h3 className="text-4xl font-bold">{activeActivity.title}</h3>
                            <p className="text-xl text-gray-700 leading-relaxed">{activeActivity.content.main}</p>
                            <ul className="space-y-4">
                                {activeActivity.content.details.map((detail, index) => (
                                    <li key={index} className="flex items-start text-lg">
                                        <span className="text-primary mr-3 text-xl">•</span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative h-[400px] overflow-hidden border-4 border-primary"
                        >
                            <Image
                                src={activeActivity.image}
                                alt={activeActivity.title}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ActivitiesMain;
