import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const testimonials = [
    {
        id: 1,
        name: 'Александр Петров',
        position: 'Директор по развитию, ЭнергоПром',
        comment: 'Сотрудничество с Varro Operating Group позволило нам оптимизировать процессы поставок и значительно повысить эффективность работы.',
        image: 'https://picsum.photos/100/100?random=1'
    },
    {
        id: 2,
        name: 'Елена Смирнова',
        position: 'Главный инженер, ГазТех',
        comment: 'Высокий профессионализм команды и современные технологические решения выделяют Varro Operating Group среди других компаний отрасли.',
        image: 'https://picsum.photos/100/100?random=2'
    },
    {
        id: 3,
        name: 'Михаил Иванов',
        position: 'Технический директор, НефтеСервис',
        comment: 'Благодаря партнерству с Varro Operating Group мы смогли реализовать сложный проект модернизации производства в кратчайшие сроки.',
        image: 'https://picsum.photos/100/100?random=3'
    }
];

const cases = [
    {
        title: 'Модернизация БГПЗ',
        description: 'Успешное внедрение новых технологий переработки газа, повысившее эффективность на 30%.',
        image: 'https://picsum.photos/800/600?random=7',
        stats: {
            efficiency: '+30%',
            time: '12 месяцев',
            investment: '$50M'
        }
    },
    {
        title: 'Оптимизация добычи',
        description: 'Внедрение умных технологий мониторинга, приведшее к увеличению добычи на 25%.',
        image: 'https://picsum.photos/800/600?random=8',
        stats: {
            production: '+25%',
            savings: '$2M/год',
            automation: '85%'
        }
    },
    {
        title: 'Экологический проект',
        description: 'Реализация программы по снижению выбросов CO2 и повышению экологической безопасности.',
        image: 'https://picsum.photos/800/600?random=9',
        stats: {
            reduction: '-40%',
            investment: '$30M',
            impact: 'Значительный'
        }
    }
];

const ServicesCases = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 1,
            spacing: 16,
        },
        breakpoints: {
            '(min-width: 768px)': {
                slides: { perView: 2, spacing: 16 },
            },
            '(min-width: 1024px)': {
                slides: { perView: 3, spacing: 16 },
            },
        },
    });

    return (
        <section className="section-padding bg-gray-50">
            <div className="container mx-auto">
                {/* Cases Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="text-center mb-12">
                        <span className="text-primary">Кейсы</span>
                        <h2 className="text-4xl font-bold mt-2">Наши достижения</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cases.map((case_, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={case_.image}
                                        alt={case_.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">{case_.title}</h3>
                                    <p className="text-gray-600 mb-4">{case_.description}</p>
                                    <div className="grid grid-cols-3 gap-4">
                                        {Object.entries(case_.stats).map(([key, value], i) => (
                                            <div key={i} className="text-center">
                                                <div className="text-primary font-bold">{value}</div>
                                                <div className="text-sm text-gray-500">{key}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-12">
                        <span className="text-primary">Отзывы</span>
                        <h2 className="text-4xl font-bold mt-2">Что говорят наши партнеры</h2>
                    </div>

                    <div ref={sliderRef} className="keen-slider">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="keen-slider__slide">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="font-bold">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-600">{testimonial.position}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesCases;
