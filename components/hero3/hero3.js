import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'next-i18next';
import { hero3Data } from '../../data/hero3';

const Hero3 = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const data = hero3Data[currentLang];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 1.1, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="static-hero-s2">
            {/* Mobile Version */}
            <div className="block md:hidden relative h-[80vh] min-h-[600px] overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${data.image.src})`
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                </div>
                <div className="relative h-full container mx-auto px-4 py-20">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col justify-center h-full"
                    >
                        <motion.div variants={itemVariants} className="mb-4">
                            {data.subtitle.split(' через ').map((part, index) => (
                                <span 
                                    key={index} 
                                    className="text-primary font-semibold block"
                                >
                                    {part}
                                </span>
                            ))}
                        </motion.div>
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl font-arial font-sans font-bold text-white mb-6"
                        >
                            {data.title}
                        </motion.h2>
                    </motion.div>
                </div>
                {/* Mobile Stats */}
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 bg-black/20 p-2 rounded-lg">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                        <div className="text-white text-center">
                            <div className="text-2xl font-bold mb-1">{data.stats.years}</div>
                            <div className="text-xs font-semibold">{data.stats.yearsLabel}</div>
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                        <div className="text-white text-center">
                            <div className="text-2xl font-bold mb-1">{data.stats.projects}</div>
                            <div className="text-xs font-semibold">{data.stats.projectsLabel}</div>
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                        <div className="text-white text-center">
                            <div className="text-2xl font-bold mb-1">{data.stats.clients}</div>
                            <div className="text-xs font-semibold">{data.stats.clientsLabel}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Version (Original) */}
            <div className="hidden md:block">
                <div className="hero-container">
                    <div className="hero-inner">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-12 col-lg-6 col-md-10 col-12">
                                    <motion.div
                                        className="wpo-static-hero-inner mt-24"
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                        style={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                            padding: '20px',
                                            borderRadius: '10px',
                                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                                        }}
                                    >
                                        <motion.span variants={itemVariants} className="d-flex flex-column">
                                            {data.subtitle.split(' через ').map((part, index) => (
                                                <span key={index} className="d-md-inline d-block" style={{ color: '#D9916A'}}>
                                                    {part}
                                                </span>
                                            ))}
                                        </motion.span>
                                        <motion.h2
                                            className="title"
                                            variants={itemVariants}
                                            style={{ color: 'white'}}
                                        >
                                            {data.title}
                                        </motion.h2>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <motion.div
                    className="slider-img-4 border-none shadow-none"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        backgroundImage: `url(${data.image.src})`,
                        border: 'none',
                        shadow: 'none'
                    }}
                />
            </div>
        </section>
    );
};

export default Hero3;
