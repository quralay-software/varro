import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ActivitiesOverview = () => {
    return (
        <section className="section-padding">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="wpo-section-title">
                            <span className="text-primary">Общий обзор</span>
                            <h2 className="text-4xl font-bold mb-4">
                                Varro Operating Group
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Varro Operating Group — компания, занимающаяся добычей, переработкой и 
                                продажей нефти и газа. Наша основная цель — максимизация ресурсной базы 
                                и увеличение эффективности за счёт инновационных технологий.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-4">
                                Стратегический фокус компании направлен на рациональное управление 
                                природными ресурсами и соблюдение высоких экологических стандартов 
                                в процессе производства.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] rounded-lg overflow-hidden"
                    >
                        <Image
                            src="https://picsum.photos/800/600"
                            alt="Varro Operations"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ActivitiesOverview;
