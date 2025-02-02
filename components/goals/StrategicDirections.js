import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useInView } from 'react-intersection-observer';
import { Settings2, Leaf, Factory, Lightbulb, Users } from 'lucide-react';
import { strategicDirectionsData } from '../../data/strategicDirections';

const iconComponents = {
    1: Settings2,
    2: Leaf,
    3: Factory,
    4: Lightbulb,
    5: Users
};

const DirectionCard = ({ direction, isActive, onClick, isInView }) => {
    const IconComponent = iconComponents[direction.id];

    return (
        <motion.div
            layout
            onClick={onClick}
            className={`bg-white overflow-hidden cursor-pointer transition-all duration-500
                       ${isActive ? 'col-span-2 row-span-2' : 'col-span-1'}`}
            whileHover={isInView ? { y: -5, scale: 1.02 } : {}}
            transition={{ duration: 0.3 }}
        >
            <div className="p-8 h-full relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${direction.color} opacity-10`} />
                <div className="relative p-8 z-10">
                    <motion.div
                        className="text-primary mb-6"
                        initial={false}
                        animate={isActive ? { scale: 1.2 } : { scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <IconComponent size={isActive ? 48 : 36} strokeWidth={1.5} />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{direction.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">{direction.description}</p>

                    <AnimatePresence mode="wait">
                        {isActive && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ul className="space-y-4">
                                    {direction.details.map((detail, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start text-lg text-gray-600"
                                        >
                                            <div className="text-primary mr-3 mt-1.5">
                                                <div className="h-2 w-2 bg-primary rounded-full" />
                                            </div>
                                            <span className="leading-relaxed">{detail}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

const StrategicDirections = () => {
    const [activeDirection, setActiveDirection] = useState(null);
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const content = strategicDirectionsData[currentLang];

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    // Reset active direction when section is out of view
    React.useEffect(() => {
        if (!inView) {
            setActiveDirection(null);
        }
    }, [inView]);

    return (
        <section id="strategic-directions" className="py-20 bg-gray-50 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary text-xl font-medium block mb-4">
                        {content.sectionTitle}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        {content.mainTitle}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {content.description}
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    {content.directions.map((direction, index) => (
                        <motion.div
                            key={direction.id}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5 }}
                        >
                            <DirectionCard
                                direction={direction}
                                isActive={activeDirection === direction.id}
                                onClick={() => setActiveDirection(
                                    activeDirection === direction.id ? null : direction.id
                                )}
                                isInView={inView}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default StrategicDirections;
