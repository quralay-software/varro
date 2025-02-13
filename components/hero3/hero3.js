import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Services from "../../api/Services";
import { hero3Data } from "../../data/hero3";
import { serviceSectionData } from "../../data/serviceSection";

const hero3 = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ru";
  const heroData = hero3Data[currentLang];
  const serviceData = serviceSectionData[currentLang];

  const servicesList = serviceData.services;
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
  const totalPages = Math.max(1, servicesList.length - slidesPerView + 1);

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
    <section className="hero-with-services h-screen overflow-hidden">
      <div className="hero-section relative h-1/2">
        {/* Mobile */}
        <div className="block md:hidden h-full relative overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center filter brightness-75 blur-[1px]"
              style={{ backgroundImage: `url(${heroData.image.src})` }}
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
                {heroData.title}
              </motion.h2>
            </motion.div>
          </div>
        </div>

        {/* Desktop*/}
        <div className="hidden md:block h-full relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div
              className="w-full h-full bg-cover bg-center filter brightness-75 blur-[0.5px]"
              style={{ backgroundImage: `url(${heroData.image.src})` }}
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
                  {heroData.title}
                </motion.h2>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="services-section relative h-1/2 bg-[#1E2E3E] px-6 md:px-12 lg:px-24 py-4 overflow-hidden">
        <div className="container mx-auto h-full flex flex-col lg:flex-row items-center">
          {/* text */}
          <div className="w-full lg:w-[414px]">
            <div className="text-left lg:pr-8">
              <h2 className="text-white text-3xl md:text-4xl font-normal leading-tight mb-2">
                {serviceData.title}
              </h2>
              <p className="text-white text-sm md:text-base">
                {serviceData.description}
              </p>
            </div>
          </div>

          {/* slider */}
          <div className="w-full lg:w-[calc(100%-414px)] lg:ml-[70px] relative flex-1">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#1E2E3E] to-transparent z-10 hidden lg:block" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#1E2E3E] to-transparent z-10 hidden lg:block" />

            <div className="overflow-x-auto lg:overflow-hidden h-full">
              <div
                onTouchStart={() => setIsAutoPlaying(false)}
                onMouseEnter={() => setIsAutoPlaying(false)}
                className="flex transition-transform duration-500 ease-out h-full items-center"
                style={{
                  transform: `translateX(-${
                    currentSlide * (isMobile ? mobileSlideWidth : 384)
                  }px)`,
                }}
              >
                {servicesList.map((service, index) => {
                  const serviceDataItem = Services.find(
                    (s) => s.slug === service.slug
                  );
                  if (!serviceDataItem) return null;
                  return (
                    <div
                      key={index}
                      className="lg:w-80 w-64 flex-shrink-0"
                      style={{ marginRight: "16px" }}
                    >
                      <div className="p-4 text-center bg-gradient-to-b from-[#4B5865] via-[#1E2E3E] to-[#1b2a38] h-full min-h-[250px] md:min-h-[230px]">
                        <div className="mb-4">
                          <Image
                            src={serviceDataItem.sImg}
                            alt={service.title}
                            className="mx-auto"
                          />
                        </div>
                        <div>
                          <h2 className="mb-2 text-white sm:text-lg text-sm">
                            {service.title}
                          </h2>
                          <p className="text-white/80 text-sm">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {!isMobile && (
              <div className="flex justify-center items-center gap-2 mt-4">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 lg:h-3 rounded-full transition-all border-none duration-300 ${
                      currentSlide === index
                        ? "w-8 lg:w-16 bg-primary"
                        : "w-4 lg:w-8 bg-primary opacity-50"
                    }`}
                    aria-label={`Перейти к слайду ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero3;
