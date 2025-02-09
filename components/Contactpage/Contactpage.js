import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { contactData } from '../../data/contact';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactForm = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const formData = contactData[currentLang].contact.form;

    return (
        <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                    type="text"
                    placeholder={formData.name}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-200"
                    required
                />
                <input
                    type="email"
                    placeholder={formData.email}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-200"
                    required
                />
            </div>
            <input
                type="text"
                placeholder={formData.subject}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-200"
                required
            />
            <textarea
                placeholder={formData.message}
                rows="6"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-200 resize-none"
                required
            ></textarea>
            <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
                {formData.button}
            </button>
        </form>
    );
};

const ContactInfo = ({ icon: Icon, title, content }) => (
    <motion.div
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
    >
        <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
                <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
            <div>
                <h3 className="text-lg font-bold font-sans mb-2">{title}</h3>
                {Array.isArray(content) ? (
                    content.map((item, index) => (
                        <p key={index} className="text-gray-600">{item}</p>
                    ))
                ) : (
                    <p className="text-gray-600">{content}</p>
                )}
            </div>
        </div>
    </motion.div>
);

const Contactpage = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const data = contactData[currentLang].contact;

    const icons = {
        address: MapPin,
        email: Mail,
        phone: Phone
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="mx-auto px-4">
                <motion.div
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  transition={{duration: 0.6}}
                  className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
                >
                    {Object.entries(data.info).map(([key, value]) => (
                      <ContactInfo
                        key={key}
                        icon={icons[key]}
                        title={value.title}
                        content={value.content}
                      />
                    ))}
                </motion.div>
                <div className="w-full h-[650px] mt-24 relative">
                    <div className="absolute inset-0">
                        <iframe
                          className="w-full h-full border-0"
                          src="https://maps.google.com/maps?q=43.641494,51.159742&z=17&output=embed"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Google Maps - Zodiac Business Center"
                          aria-label="Location map"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contactpage;
