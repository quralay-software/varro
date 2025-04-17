import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { principlesHeroData } from "../../data/principlesHero";

const PrinciplesHero = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ru";
  const data = principlesHeroData[currentLang];

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6">
            {data.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8">
            {data.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PrinciplesHero;
