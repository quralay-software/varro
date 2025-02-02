import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useInView } from 'react-intersection-observer';
import { servicesGridData } from '../../data/servicesGrid';
import { Droplet, Factory, Ship, Leaf, Wrench, ChevronRight } from 'lucide-react';

const iconComponents = {
    Droplet: Droplet,
    Factory: Factory,
    Ship: Ship,
    Leaf: Leaf,
    Wrench: Wrench
};

const AnimatedPattern = ({ isInView }) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
            {isInView && (
                <>
                    <motion.div
                        className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
                        initial={{ x: 0, y: 0, scale: 1 }}
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 50, 0],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <motion.div
                        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
                        initial={{ x: 0, y: 0, scale: 1 }}
                        animate={{
                            x: [0, -150, 0],
                            y: [0, -100, 0],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </>
            )}
        </div>
    </div>
);

const ServiceCard = ({ service, isActive, onClick, isInView }) => {
    const IconComponent = iconComponents[service.icon];
    const [height, setHeight] = useState('auto');
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.scrollHeight + 'px');
        }
    }, [isActive]);
    
    return (
        <motion.div
            layout
            onClick={onClick}
            className={`bg-white hover:bg-gray-50 overflow-hidden cursor-pointer transition-all duration-300
                       ${isActive ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'}`}
            whileHover={isInView ? { y: -5 } : {}}
            style={{ minHeight: isActive ? height : 'auto' }}
        >
            <div className="p-8 h-full flex flex-col" ref={contentRef}>
                <motion.div 
                    className="text-primary mb-6"
                    initial={false}
                    animate={isActive ? { scale: 1.2 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <IconComponent size={isActive ? 48 : 36} strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                
                <AnimatePresence mode="wait">
                    {isActive && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-6 flex-grow"
                        >
                            <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={isActive}
                                />
                            </div>
                            <ul className="space-y-4">
                                {service.details.map((detail, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
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
            </div>
        </motion.div>
    );
};

const ServicesGrid = () => {
    const [activeId, setActiveId] = useState(null);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const { services } = servicesGridData[currentLang];

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    const rotateService = useCallback(() => {
        if (!inView) return;
        
        setActiveId(current => {
            if (current === null) return services[0].id;
            const currentIndex = services.findIndex(s => s.id === current);
            const nextIndex = (currentIndex + 1) % services.length;
            return services[nextIndex].id;
        });
    }, [services, inView]);

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

    const handleServiceClick = (id) => {
        setActiveId(activeId === id ? null : id);
        setIsPaused(true);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        if (!isPaused && inView) {
            intervalRef.current = setInterval(rotateService, 5000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [isPaused, rotateService, inView]);

    // Reset active state when section is out of view
    useEffect(() => {
        if (!inView) {
            setActiveId(null);
        }
    }, [inView]);

    return (
        <section id="services-grid" className="relative py-20 bg-gray-50 overflow-hidden">
            <AnimatedPattern isInView={inView} />
            <div className="container mx-auto px-4 relative" ref={ref}>
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            isActive={activeId === service.id}
                            onClick={() => handleServiceClick(service.id)}
                            isInView={inView}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesGrid;
