import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "next-i18next";

// Ваши данные
import { hero3Data } from "../../data/hero3";
import { serviceSectionData } from "../../data/serviceSection";
import Services from "../../api/Services";

const HeroAndServicesSlider = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ru";

  // Данные Hero
  const heroData = hero3Data[currentLang];
  // Данные услуг
  const serviceSection = serviceSectionData[currentLang];
  const services = serviceSection.services;

  // Собираем массив слайдов: 1-й элемент — геро-слайд, дальше услуги
  const slides = useMemo(() => {
    return [
      { type: "hero", data: heroData },
      ...services.map((service) => ({ type: "service", data: service })),
    ];
  }, [heroData, services]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Отслеживаем изменение ширины окна
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize(); // первичная инициализация
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ширина слайда: для мобильных берём ~90% ширины экрана, для десктопа фиксируем
  const slideWidth = isMobile ? window.innerWidth * 0.9 : 384;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Анимации для hero
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

  const textVariants = {
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
    <section className="relative">
      {/* Обёртка с overflow-hidden для горизонтального слайдера */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * slideWidth}px)` }}
        >
          {slides.map((slide, index) => {
            if (slide.type === "hero") {
              // === HERO-СЛАЙД ===
              return (
                <div
                  key={`hero-${index}`}
                  className="relative w-full h-[80vh] min-h-[600px] flex-shrink-0"
                  style={{ width: slideWidth }}
                >
                  {/* Мобильная версия hero (пример) */}
                  <div className="block md:hidden relative w-full h-full overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${slide.data.image.src})`,
                      }}
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Полупрозрачная маска */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                    </motion.div>
                    <div className="relative h-full container mx-auto px-4 py-20 flex items-center">
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col"
                      >
                        <motion.h2
                          variants={textVariants}
                          className="text-3xl font-bold text-white mb-6"
                        >
                          {slide.data.title}
                        </motion.h2>
                      </motion.div>
                    </div>
                  </div>

                  {/* Десктопная версия hero (пример) */}
                  <div className="hidden md:block w-full h-full relative">
                    {/* Верхняя часть с заголовком */}
                    <div className="hero-container w-full h-full flex flex-col justify-center">
                      <div className="container mx-auto">
                        <div className="row">
                          <div className="col-12 col-lg-6 col-md-10">
                            <motion.div
                              className="wpo-static-hero-inner"
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              <motion.h2
                                className="title text-primary font-bold text-4xl mb-4"
                                variants={textVariants}
                              >
                                {slide.data.title}
                              </motion.h2>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Фоновое изображение (десктоп) */}
                    <motion.div
                      className="absolute inset-0 -z-10"
                      variants={imageVariants}
                      initial="hidden"
                      animate="visible"
                      style={{
                        backgroundImage: `url(${slide.data.image.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Градиент */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                    </motion.div>
                  </div>
                </div>
              );
            } else if (slide.type === "service") {
              // === СЛАЙД УСЛУГИ ===ф
              const serviceData = Services.find(
                (s) => s.slug === slide.data.slug
              );
              if (!serviceData) return null;

              return (
                <div
                  key={`service-${index}`}
                  className="flex-shrink-0"
                  style={{ width: slideWidth }}
                >
                  <div className="p-4 lg:p-12 text-center bg-gradient-to-b from-[#4B5865] via-[#1E2E3E] to-[#1b2a38] h-full">
                    <div className="mb-6">
                      <Image
                        src={serviceData.sImg}
                        alt={slide.data.title}
                        className="mx-auto"
                      />
                    </div>
                    <div>
                      <h2 className="mb-4 text-white font-bold">
                        {slide.data.title}
                      </h2>
                      <p className="text-white/80">{slide.data.description}</p>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* Навигационные точки (dots) */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 lg:h-3 rounded-full transition-all border-none duration-300 ${
              currentSlide === index
                ? "w-8 lg:w-16 bg-primary"
                : "w-4 lg:w-8 bg-primary opacity-50"
            }`}
            aria-label={`Слайд ${index + 1}`}
          />
        ))}
      </div>

      {/* Кнопки переключения (Prev/Next) */}
      <div className="flex justify-between mt-4 px-4">
        <button
          onClick={prevSlide}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default HeroAndServicesSlider;
