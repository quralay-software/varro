import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { environmentalContent } from '../../data/environmentalContent';
import { Wind, Droplets, Recycle } from 'lucide-react';

const iconComponents = {
    Wind: Wind,
    Droplets: Droplets,
    Recycle: Recycle
};

const ProgressBar = ({ progress }) => (
    <div className="w-full bg-gray-200 h-3">
        <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-primary h-3"
        />
    </div>
);

const Environmental = () => {
    const router = useRouter();
    const content = environmentalContent[router.locale || "ru"];

    return (
        <section className="section-padding bg-gray-50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary text-xl">{content.sectionTitle}</span>
                    <h2 className="text-5xl font-bold mt-3">{content.mainTitle}</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl font-bold mb-6">
                            {content.heading}
                        </h3>
                        <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                            {content.description}
                        </p>
                        
                        <div className="space-y-8">
                            {content.initiatives.map((initiative, index) => {
                                const IconComponent = iconComponents[initiative.icon];
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                        className="bg-white p-6"
                                    >
                                        <div className="flex items-center gap-4 mb-4">
                                            <IconComponent size={32} className="text-primary" />
                                            <div className="flex-1">
                                                <div className="flex justify-between mb-2">
                                                    <h4 className="text-xl font-bold">{initiative.title}</h4>
                                                    <span className="text-primary text-xl font-semibold">{initiative.progress}%</span>
                                                </div>
                                                <ProgressBar progress={initiative.progress} />
                                            </div>
                                        </div>
                                        <p className="text-lg text-gray-600 leading-relaxed ml-14">
                                            {initiative.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] overflow-hidden"
                    >
                        <Image
                            src="/images/img-4.JPG"
                            alt="Environmental Initiatives"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                <div className="grid grid-cols-3 gap-6 text-center">
                                    {content.stats.map((stat, index) => (
                                        <div key={index}>
                                            <div className="text-4xl font-bold mb-2">{stat.value}</div>
                                            <div className="text-lg">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Environmental;
