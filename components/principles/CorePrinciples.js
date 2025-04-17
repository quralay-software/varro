import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { corePrinciplesData } from "../../data/corePrinciples";
import { Globe, Zap, Settings, Cpu } from "lucide-react";

const colorVariants = {
  darkBlue: "from-gray-50 to-primary/15 bg-gradient-to-br",
};

const renderTitle = (title) => {
  const parts = title.split("+");
  return parts.map((part, index) => (
    <React.Fragment key={index}>
      {part.trim()}
      {index < parts.length - 1 && <br />}
    </React.Fragment>
  ));
};

const PrincipleCard = ({ principle, index }) => {
  const colorClass = colorVariants[principle.color];
  const icons = [
    <Globe className="w-8 h-8 text-primary" />,
    <Zap className="w-8 h-8 text-primary" />,
    <Settings className="w-8 h-8 text-primary" />,
    <Cpu className="w-8 h-8 text-primary" />,
  ];
  const IconElement = icons[index] || icons[0];

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md relative p-6"
      whileHover={{ y: -5 }}
      initial={false}
    >
      <div
        className={`absolute inset-0 ${colorClass} transition-all duration-300`}
      />
      <div className="relative z-10 flex flex-col items-center">
        <h3 className="text-2xl font-bold text-gray-800 text-center">
          {renderTitle(principle.title)}
        </h3>
        {IconElement}
        <p className="text-gray-700 text-base leading-relaxed text-center mt-4">
          {renderTitle(principle.description)}
        </p>
      </div>
    </motion.div>
  );
};


const CorePrinciples = () => {
  const [activePrinciple, setActivePrinciple] = useState(null);
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ru";
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {content.mainTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {content.principles.map((principle, index) => (
            <PrincipleCard
              key={principle.id}
              principle={principle}
              index={index}
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
