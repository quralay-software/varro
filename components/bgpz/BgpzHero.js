import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { bgpzHeroData } from "../../data/bgpzHero";

const renderCapacity = (value, label, valueClass, labelClass) => {
  const labelParts = label.split(" ");
  const unit = labelParts.slice(0, 2).join(" ");
  const description = labelParts.slice(2).join(" ");

  return (
    <>
      <div className={valueClass}>
        {value} {unit}
      </div>
      <div className={labelClass}>{description}</div>
    </>
  );
};

const BgpzHero = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ru";
  const data = bgpzHeroData[currentLang];

  const scrollToContent = () => {
    const historySection = document.getElementById("bgpz-history");
    historySection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={data.image.src}
          alt={data.image.alt}
          fill
          className="object-fit md:object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent" />
      </div>

      <div className="relative h-full container mx-auto px-4">
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

      {/* Mobile Statistics */}
      <div className="absolute md:hidden bottom-12 left-4 right-4 grid grid-cols-1 gap-2 bg-black/20 p-2 rounded-lg">
        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
          <div className="text-white text-center">
            {renderCapacity(
              data.stats.capacity.value,
              data.stats.capacity.label,
              "text-xl font-bold mb-1",
              "text-[10px] font-semibold"
            )}
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
          <div className="text-white text-center">
            {renderCapacity(
              data.stats.construction.value,
              data.stats.construction.label,
              "text-xl font-bold mb-1",
              "text-[10px] font-semibold"
            )}
          </div>
        </div>
      </div>

      {/* Desktop Statistics */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="hidden md:block absolute top-[50%] right-[7%] bg-white/10 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-lg transform hover:scale-105 transition-transform duration-300"
      >
        <div className="text-white text-center">
          {renderCapacity(
            data.stats.capacity.value,
            data.stats.capacity.label,
            "text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-1 md:mb-2",
            "text-xs md:text-sm lg:text-base xl:text-lg font-semibold"
          )}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="hidden md:block absolute top-[75%] right-[10%] bg-white/10 backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-lg transform hover:scale-105 transition-transform duration-300 sm:min-h-[8rem] sm:min-w-[16rem]"
      >
        <div className="text-white text-center">
          {renderCapacity(
            data.stats.construction.value,
            data.stats.construction.label,
            "text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-bold mb-1 md:mb-2",
            "text-xs md:text-sm lg:text-base xl:text-lg font-semibold"
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default BgpzHero;
