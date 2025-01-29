import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: 'Алексей Волков',
        position: 'Генеральный директор, КазЭнергоПром',
        comment: 'Varro Operating Group демонстрирует исключительную приверженность инновациям и устойчивому развитию. Их стратегическое видение и технологические решения впечатляют.',
        image: 'https://picsum.photos/100/100?random=11'
    },
    {
        id: 2,
        name: 'Марат Сулейменов',
        position: 'Технический директор, НефтеТрансСервис',
        comment: 'Сотрудничество с Varro Operating Group позволило нам значительно повысить эффективность наших операций и внедрить передовые экологические стандарты.',
        image: 'https://picsum.photos/100/100?random=12'
    }
];

const partners = [
    {
        name: 'КазМунайГаз',
        logo: 'https://picsum.photos/200/100?random=13',
        category: 'Нефтегазовая компания'
    },
    {
        name: 'ТехноПрогресс',
        logo: 'https://picsum.photos/200/100?random=14',
        category: 'Технологический партнер'
    },
    {
        name: 'ЭкоЭнерго',
        logo: 'https://picsum.photos/200/100?random=15',
        category: 'Экологические решения'
    },
    {
        name: 'ТрансОйл',
        logo: 'https://picsum.photos/200/100?random=16',
        category: 'Логистический партнер'
    }
];

const GoalsPartners = () => {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container mx-auto">
                {/* Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <span className="text-primary">Отзывы</span>
                        <h2 className="text-4xl font-bold mt-2">Что говорят наши партнеры</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white p-6 rounded-lg shadow-lg"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                        <p className="text-gray-600">{testimonial.position}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Partners */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-12">
                        <span className="text-primary">Партнеры</span>
                        <h2 className="text-4xl font-bold mt-2">Наши ключевые партнеры</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Мы гордимся сотрудничеством с ведущими компаниями отрасли, 
                            которые разделяют наше видение будущего.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-lg shadow-lg text-center"
                            >
                                <div className="relative h-20 mb-4">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h4 className="font-bold mb-1">{partner.name}</h4>
                                <p className="text-sm text-gray-600">{partner.category}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GoalsPartners;
