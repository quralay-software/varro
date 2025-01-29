import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const initiatives = [
    {
        title: 'Снижение выбросов CO₂',
        description: 'Внедрение технологий для минимизации углеродного следа',
        progress: 75
    },
    {
        title: 'Водопользование',
        description: 'Оптимизация использования водных ресурсов',
        progress: 85
    },
    {
        title: 'Управление отходами',
        description: 'Современные методы переработки и утилизации',
        progress: 90
    }
];

const ProgressBar = ({ progress }) => (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
        <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-primary h-2.5 rounded-full"
        />
    </div>
);

const Environmental = () => {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <span className="text-primary">Экология</span>
                    <h2 className="text-4xl font-bold mt-2">Экологическая ответственность</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">
                            Наш вклад в защиту окружающей среды
                        </h3>
                        <p className="text-gray-700 mb-8">
                            Мы реализуем комплексные меры по снижению воздействия на окружающую среду
                            и обеспечению устойчивого развития производства. Наши программы направлены
                            на сохранение природных ресурсов и экосистем.
                        </p>
                        
                        <div className="space-y-6">
                            {initiatives.map((initiative, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <div className="flex justify-between mb-2">
                                        <h4 className="font-semibold">{initiative.title}</h4>
                                        <span className="text-primary">{initiative.progress}%</span>
                                    </div>
                                    <ProgressBar progress={initiative.progress} />
                                    <p className="text-sm text-gray-600 mt-2">
                                        {initiative.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] rounded-lg overflow-hidden"
                    >
                        <Image
                            src="https://picsum.photos/800/1000?random=4"
                            alt="Environmental Initiatives"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-3xl font-bold">75%</div>
                                        <div className="text-sm">Снижение выбросов</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">85%</div>
                                        <div className="text-sm">Переработка воды</div>
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold">90%</div>
                                        <div className="text-sm">Утилизация отходов</div>
                                    </div>
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
