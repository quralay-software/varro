import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Footer from "../footer/Footer";
import { about4HeroData } from "../../data/about4Hero";

const About4 = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ru";
  const data = about4HeroData[currentLang];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section className="hero-with-services sm:h-screen overflow-hidden flex flex-col">
      <div className="relative h-[35%] sm:h-[60%]">
        {/* Mobile */}
        <div className="block md:hidden h-[30vh] relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/new2.webp"
              alt=""
              fill
              className="object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="relative z-10 h-full container mx-auto px-4 py-6 flex items-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold text-white text-center"
              >
                {data.title}
              </motion.h2>
            </motion.div>
          </div>
        </div>
        {/* Desktop */}
        <div className="hidden md:block h-full relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/images/new2.webp"
              alt=""
              fill
              className="object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
          <div className="relative z-10 h-full flex items-center">
            <div className="container">
              <motion.div
                className="wpo-static-hero-inner"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h2
                  className="title text-white font-bold text-6xl text-center"
                  variants={itemVariants}
                >
                  {data.title}
                </motion.h2>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* text+slider */}
      <div className="relative h-[90%] sm:h-[40%] bg-white px-6 md:px-12 lg:px-24 py-4 sm:py-40 overflow-hidden">
        <div className="container mx-auto h-full flex flex-col lg:flex-row items-center">
          {/* text */}
          <div className="w-full">
            <div className="text-left">
              <p className="text-black text-base md:text-base">
                {data.description}
              </p>
              <p className="text-black text-base md:text-base">
                {data.description2}
              </p>
              <p className="text-black text-base md:text-base">
                {data.description3}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
};

export default About4;
