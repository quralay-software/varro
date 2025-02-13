import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import { corePrinciplesData } from '../../data/corePrinciples';


const colorVariants = {
    darkBlue: 'from-gray-50 to-primary/15 bg-gradient-to-br',
};

const PrincipleCard = ({ principle }) => {
  const colorClass = colorVariants[principle.color];

  return (
    <motion.div
      className="bg-gray-50 rounded-xl overflow-hidden transition-shadow duration-300
                       hover:shadow-lg border border-gray-200 relative"
      whileHover={{ y: -5 }}
      initial={false}
    >
      <div className="p-6 md:p-8 h-full">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${colorClass} transition-all duration-300`}
        />

        <div className="relative z-10">
          <h3 className="text-xl font-bold text-gray-800 mb-3 sm:mb-4 text-center relative">
            {principle.title}
            <span className="block h-1 mt-2 bg-primary w-full"></span>
          </h3>

          <p className="text-gray-700 text-base leading-relaxed text-center">
            {principle.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};


const CorePrinciples = () => {
    const [activePrinciple, setActivePrinciple] = useState(null);
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const content = corePrinciplesData[currentLang];

    return (
      <section id="core-principles" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-xl font-medium block mb-4">
              {content.sectionTitle}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans mb-6">
              {content.mainTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {content.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {content.principles.map((principle) => (
              <PrincipleCard
                key={principle.id}
                principle={principle}
                isActive={activePrinciple === principle.id}
                onClick={() =>
                  setActivePrinciple(
                    activePrinciple === principle.id ? null : principle.id
                  )
                }
              />
            ))}
          </div>
        </div>
      </section>
    );
};

export default CorePrinciples;
