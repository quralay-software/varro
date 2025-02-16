import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { goalsHeroData } from '../../data/goalsHero';

const GoalsHero = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const data = goalsHeroData[currentLang];

    return (
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={data.image.src}
            alt={data.image.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-arial font-sans font-bold text-white mb-4 md:mb-6">
                {data.title}
              </h1>

              <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl">
                {data.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    );
};

export default GoalsHero;
