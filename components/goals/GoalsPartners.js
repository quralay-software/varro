import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';
import { goalsPartnersData } from '../../data/goalsPartners';

const TestimonialCard = ({ testimonial, index }) => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-8"
            whileHover={{ y: -5 }}
        >
            <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="ml-4">
                    <h4 className="font-bold text-xl font-sans">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.position}</p>
                </div>
            </div>
            <div className="relative">
                <Quote className="text-primary/10 absolute -top-4 -left-4" size={48} />
                <p className="text-lg text-gray-600 leading-relaxed relative z-10">
                    "{testimonial.comment}"
                </p>
            </div>
        </motion.div>
    );
};

const PartnerCard = ({ partner, index }) => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-8 text-center"
            whileHover={{ y: -5 }}
        >
            <div className="relative h-24 mb-6">
                <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                />
            </div>
            <h4 className="text-xl font-bold mb-2 font-sans">{partner.name}</h4>
            <p className="text-gray-600">{partner.category}</p>
        </motion.div>
    );
};

const GoalsPartners = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const content = goalsPartnersData[currentLang];

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    return (
        <section className="py-20 bg-gray-50" ref={ref}>
            <div className="container mx-auto px-4">
                {/* Testimonials */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <div className="text-center mb-16">
                        <span className="text-primary text-xl font-medium block mb-4">
                            {content.testimonials.sectionTitle}
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans">
                            {content.testimonials.mainTitle}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {content.testimonials.items.map((testimonial, index) => (
                            <TestimonialCard
                                key={testimonial.id}
                                testimonial={testimonial}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Partners */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="text-center mb-16">
                        <span className="text-primary text-xl font-medium block mb-4">
                            {content.partners.sectionTitle}
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sans">
                            {content.partners.mainTitle}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {content.partners.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {content.partners.items.map((partner, index) => (
                            <PartnerCard
                                key={partner.name}
                                partner={partner}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default GoalsPartners;
