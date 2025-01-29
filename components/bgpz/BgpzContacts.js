import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const partners = [
    {
        name: 'Partner 1',
        logo: '/images/partners/partner1.png',
        type: 'Технологический партнер'
    },
    {
        name: 'Partner 2',
        logo: '/images/partners/partner2.png',
        type: 'Поставщик оборудования'
    },
    {
        name: 'Partner 3',
        logo: '/images/partners/partner3.png',
        type: 'Сервисный партнер'
    },
    {
        name: 'Partner 4',
        logo: '/images/partners/partner4.png',
        type: 'Логистический партнер'
    }
];

const contacts = [
    {
        icon: '📍',
        title: 'Адрес',
        content: 'Республика Казахстан, г. Актау',
        link: 'https://maps.google.com',
        linkText: 'Показать на карте'
    },
    {
        icon: '📞',
        title: 'Телефон',
        content: '+7 7292 201 909',
        link: 'tel:+77292201909',
        linkText: 'Позвонить'
    },
    {
        icon: '📧',
        title: 'Email',
        content: 'ReceptDep@btmg.kz',
        link: 'mailto:ReceptDep@btmg.kz',
        linkText: 'Написать'
    },
    {
        icon: '🕒',
        title: 'Режим работы',
        content: 'Круглосуточно, 24/7',
        link: null,
        linkText: null
    }
];

const ContactCard = ({ contact }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6"
    >
        <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">{contact.icon}</span>
            <div>
                <h3 className="font-bold">{contact.title}</h3>
                <p className="text-gray-600">{contact.content}</p>
            </div>
        </div>
        {contact.link && (
            <Link 
                href={contact.link}
                className="text-primary hover:text-primary/80 text-sm flex items-center"
            >
                {contact.linkText} →
            </Link>
        )}
    </motion.div>
);

const PartnerLogo = ({ partner }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-4 text-center"
    >
        <div className="relative h-20 mb-3">
            <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
            />
        </div>
        <div className="text-sm text-gray-600">{partner.type}</div>
    </motion.div>
);

const BgpzContacts = () => {
    return (
        <section className="section-padding bg-gray-50">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className="text-primary">Контакты</span>
                    <h2 className="text-4xl font-bold mt-2">Связаться с нами</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Мы всегда открыты для диалога и готовы ответить на ваши вопросы 
                        о работе БГПЗ и возможностях сотрудничества.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {contacts.map((contact, index) => (
                        <ContactCard key={index} contact={contact} />
                    ))}
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 bg-white rounded-lg shadow-lg overflow-hidden"
                >
                    <div className="relative h-[400px]">
                        <Image
                            src="/images/map-placeholder.jpg"
                            alt="Карта расположения БГПЗ"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Link 
                                href="https://maps.google.com"
                                className="bg-primary/90 hover:bg-primary text-white px-6 py-3 
                                         rounded-lg transition-all duration-300"
                            >
                                Открыть на Google Maps
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Partners Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <h3 className="text-2xl font-bold">Наши партнеры</h3>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                        БГПЗ сотрудничает с ведущими компаниями отрасли для обеспечения 
                        высокого качества продукции и услуг.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {partners.map((partner, index) => (
                        <PartnerLogo key={index} partner={partner} />
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 bg-white rounded-lg shadow-lg p-8 text-center"
                >
                    <div className="text-4xl mb-4">🤝</div>
                    <h3 className="text-2xl font-bold mb-4">
                        Заинтересованы в сотрудничестве?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Мы всегда открыты для новых партнерств и готовы обсудить 
                        возможности взаимовыгодного сотрудничества.
                    </p>
                    <Link 
                        href="/contacts"
                        className="inline-block bg-primary hover:bg-primary/90 text-white 
                                 px-8 py-3 rounded-lg transition-all duration-300"
                    >
                        Связаться с нами
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default BgpzContacts;
