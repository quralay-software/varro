import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Footer from "../footer/Footer";
import { activitiesMainContent } from "../../data/activitiesMainContent";
import { about4HeroData } from "../../data/about4Hero";

const About4 = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ru";
  const content = activitiesMainContent[currentLang];
  const data = about4HeroData[currentLang];

  const activities = content.activities;

  const mobileSlideWidth = 256;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidesPerView = isMobile ? 1 : 3;
  const totalPages = Math.max(1, activities.length - slidesPerView + 1);

  useEffect(() => {
    let interval;
    if (
      !isMobile &&
      isAutoPlaying &&
      !isTransitioning &&
      currentSlide < totalPages - 2
    ) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => Math.min(prev + 1, totalPages - 2));
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, isTransitioning, totalPages, isMobile]);

  const goToSlide = (index) => {
    if (!isTransitioning) {
      setCurrentSlide(index);
    }
  };

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
            <div
              className="w-full h-full bg-cover bg-center filter brightness-75 blur-[1px]"
              style={{
                backgroundImage: `url(${
                  content.backgroundImage || "/images/img-4.JPG"
                })`,
              }}
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
            <div
              className="w-full h-full bg-cover bg-center filter brightness-75 blur-[0.5px]"
              style={{
                backgroundImage: `url(${
                  content.backgroundImage || "/images/img-4.JPG"
                })`,
              }}
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
