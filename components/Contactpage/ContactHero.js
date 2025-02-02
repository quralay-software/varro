import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { contactData } from '../../data/contact';
import { MapPin } from 'lucide-react';

const ContactHero = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const data = contactData[currentLang].hero;

    return (
        <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-gray-900">
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary/20 to-secondary/20" />
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative h-full container mx-auto px-4">
                <div className="flex flex-col justify-center h-full max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-semibold mb-4 block">
                            {data.subtitle}
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-arial font-sans font-bold text-white mb-4 md:mb-6">
                            {data.title}
                        </h1>
                        <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl">
                            {data.description}
                        </p>
                        <div className="flex items-center gap-2 text-white/80">
                            <MapPin className="w-5 h-5" />
                            <span className="text-sm md:text-base">
                                {contactData[currentLang].contact.info.address.content}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
