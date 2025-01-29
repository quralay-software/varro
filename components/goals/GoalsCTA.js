import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const GoalsCTA = () => {
    return (
        <section className="section-padding relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />

            <div className="container mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-4xl font-bold mb-6">
                        Присоединяйтесь к нашему пути инноваций
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Мы всегда открыты для новых партнерств и проектов, которые помогут 
                        нам достичь наших стратегических целей и создать устойчивое будущее 
                        в нефтегазовой отрасли.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <h3 className="text-xl font-bold mb-4">Для партнеров</h3>
                            <p className="text-gray-600 mb-6">
                                Узнайте больше о возможностях сотрудничества и совместных проектах.
                            </p>
                            <Link 
                                href="/contacts" 
                                className="inline-block bg-primary hover:bg-primary/90 text-white 
                                         px-6 py-3 rounded-lg transition-all duration-300"
                            >
                                Стать партнером
                            </Link>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-lg">
                            <h3 className="text-xl font-bold mb-4">Для инвесторов</h3>
                            <p className="text-gray-600 mb-6">
                                Изучите инвестиционные возможности и перспективы роста компании.
                            </p>
                            <Link 
                                href="/contacts" 
                                className="inline-block bg-secondary hover:bg-secondary/90 text-white 
                                         px-6 py-3 rounded-lg transition-all duration-300"
                            >
                                Инвестировать
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-600">
                        <div className="flex items-center">
                            <span className="text-2xl mr-2">📍</span>
                            <span>Республика Казахстан, г. Актау, БЦ Зодиак</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-2xl mr-2">📞</span>
                            <span>+7 7292 201 909</span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-2xl mr-2">📧</span>
                            <span>ReceptDep@btmg.kz</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GoalsCTA;
