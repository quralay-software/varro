import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useTranslation } from "next-i18next";
import { bgpzTechnologyData } from "../../data/bgpzTechnology";

const TechnologyCard = ({
  tech,
  enlargeText,
  onImageClick,
  isMobile,
  cardIndex,
}) => {
  const renderTitle = (title) => {
    if (isMobile) {
      return title.replace(/[-:]/g, "");
    }
    if (title.includes(":")) {
      return title.split(":").map((part, idx, arr) => (
        <React.Fragment key={idx}>
          {part.trim()}
          {idx < arr.length - 1 && <br />}
        </React.Fragment>
      ));
    }
    return title;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg sm:rounded-none overflow-hidden border border-gray-200 h-full"
    >
      <div className="p-4 sm:p-6 md:p-8 h-full relative flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-primary/25" />
        <div className="relative z-10 flex flex-col h-full">
          <div>
            <h3 className="text-xl sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 text-center relative">
              {tech.title.split("-").map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index !== tech.title.split("-").length - 1 && <br />}
                </React.Fragment>
              ))}
              <span className="block h-1 mt-2 bg-primary w-full"></span>
            </h3>

            {/* pics */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div
                className="relative cursor-pointer group"
                onClick={() =>
                  onImageClick({ src: tech.imageFull, alt: tech.title })
                }
              >
                <Image
                  src={tech.imagePreview}
                  alt={tech.title}
                  width={700}
                  height={700}
                  className="object-contain"
                />
                <div
                  className="
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-300
                    absolute inset-0 bg-black/30
                    flex items-center justify-center
                  "
                >
                  <p className="text-white font-semibold">{enlargeText}</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 text-center">
              {renderTitle(tech.description)}
            </p>
          </div>

          {/* details */}
          <ul className="space-y-3 sm:space-y-4 mb-4">
            {tech.details.map((detail, idx) => {
              const displayDetail = isMobile
                ? detail.replace(/:/g, "").trim()
                : renderTitle(detail);
              return (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start"
                >
                  <ChevronRight className="text-primary mr-2 sm:mr-0 h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-base sm:text-lg">
                    {displayDetail}
                  </span>
                </motion.li>
              );
            })}
          </ul>

          {/* statistic */}
          {/* {cardIndex !== 5 ? (
            <div className="mt-auto">
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-6 mt-6 flex items-center justify-center">
                {Object.entries(tech.stats).map(([key, stat]) => (
                  <div key={key} className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                      {renderTitle(stat.value)}
                    </div>
                    <div className="text-gray-700 text-sm sm:text-base md:text-lg">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-6 mt-6 flex items-center justify-center">
              {Object.entries(tech.stats).map(([key, stat]) => (
                <div key={key} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                    {renderTitle(stat.value)}
                  </div>
                  <div className="text-gray-700 text-sm sm:text-base md:text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )} */}
        </div>
      </div>
    </motion.div>
  );
};

const BgpzTechnology = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ru";
  const data = bgpzTechnologyData[currentLang];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setImageLoaded(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setIsModalOpen(false);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="text-primary text-lg sm:text-xl mb-3 sm:mb-4 block">
            {data.section_title}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-sans">
            {data.main_title}
          </h2>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        {/* cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {data.technologies.map((tech, index) => (
            <TechnologyCard
              key={index}
              tech={tech}
              enlargeText={data.enlarge_label}
              onImageClick={openModal}
              isMobile={isMobile}
              cardIndex={index}
            />
          ))}
        </div>
      </div>

      {/* modal zoom */}
      {isModalOpen && selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-auto h-auto px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <TransformWrapper
              initialScale={1}
              minScale={1}
              maxScale={3}
              wheel={{ step: 0.1 }}
              doubleClick={{ disabled: true }}
            >
              {({ zoomIn, zoomOut }) => (
                <>
                  {imageLoaded && (
                    <div
                      className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-30"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          zoomOut();
                        }}
                        className="p-3 bg-black/70 text-white rounded-full hover:bg-black transition-colors"
                        aria-label="Отдалить"
                      >
                        <ZoomOut size={20} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          zoomIn();
                        }}
                        className="p-3 bg-black/70 text-white rounded-full hover:bg-black transition-colors"
                        aria-label="Приблизить"
                      >
                        <ZoomIn size={20} />
                      </button>
                    </div>
                  )}
                  <TransformComponent>
                    <div>
                      <img
                        src={selectedPhoto.src}
                        alt={selectedPhoto.alt || "Fullscreen image"}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                        onLoad={() => setImageLoaded(true)}
                      />
                    </div>
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
            {imageLoaded && (
              <button
                onClick={closeModal}
                className="
                  absolute top-4 right-4
                  w-12 h-12 flex items-center justify-center
                  rounded-full bg-black/70 border-2 border-white text-white
                  hover:bg-black transition-colors
                "
                aria-label="Закрыть модалку"
              >
                <X className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default BgpzTechnology;
