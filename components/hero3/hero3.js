import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { hero3Data } from "../../data/hero3";

const Hero3 = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ru";
  const data = hero3Data[currentLang];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="static-hero-s2">
      {/* Mobile Version */}
      <div className="block md:hidden relative h-[80vh] min-h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${data.image.src})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative h-full container mx-auto px-4 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center h-full"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-arial font-sans font-bold text-white mb-6 "
            >
              {data.title}
            </motion.h2>
          </motion.div>
        </div>
      </div>

      {/* Desktop Version (Original) */}
      <div className="hidden md:block">
        <div className="hero-container">
          <div className="hero-inner mt-[-4rem]">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6 col-md-10 col-12">
                  <motion.div
                    className="wpo-static-hero-inner"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.h2
                      className="title text-primary font-bold"
                      variants={itemVariants}
                    >
                      {data.title}
                    </motion.h2>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="slider-img-4 border-none shadow-none mt-[-5rem]"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          style={{
            backgroundImage: `url(${data.image.src})`,
            border: "none",
            shadow: "none",
          }}
        />
      </div>
    </section>
  );
};

export default Hero3;
