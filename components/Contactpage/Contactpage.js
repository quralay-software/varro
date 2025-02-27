import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { contactData } from "../../data/contact";
import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Footer from "../footer/Footer";

const isEmail = (text) => /\S+@\S+\.\S+/.test(text);
const isPhone = (text) => /^\+?\d[\d\s()-]{7,}$/.test(text);

const ContactInfoGroup = ({ info, icons }) => (
  <div className="bg-white/20 sm:p-8 p-4 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
    <div className="absolute inset-0 bg-[#1E2E3E]/90 opacity-90" />
    <div className="relative z-10 sm:space-y-6 space-y-4">
      {Object.entries(info).map(([key, data]) => {
        const { content, phone: extraPhone } = data;
        return (
          <div key={key} className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#1E2E3E]/30">
              {React.createElement(icons[key], {
                className: "w-6 h-6 text-white/90",
                strokeWidth: 1.5,
              })}
            </div>
            <div className="flex-1">
              {Array.isArray(content) ? (
                content.map((item, index) => (
                  <p
                    key={index}
                    className="m-0 text-gray-600 leading-none sm:text-lg"
                  >
                    {isEmail(item) ? (
                      <a
                        href={`mailto:${item}`}
                        className="text-white/90 hover:underline"
                      >
                        {item}
                      </a>
                    ) : isPhone(item) ? (
                      <>
                        <a
                          href={`tel:${item}`}
                          className="text-white/90 hover:underline"
                        >
                          {item}
                        </a>
                        {key === "phone" && extraPhone && (
                          <span className="ml-6 text-white">{extraPhone}</span>
                        )}
                      </>
                    ) : (
                      item
                    )}
                  </p>
                ))
              ) : (
                <p className="m-0 text-white/90 leading-none sm:text-lg">
                  {isEmail(content) ? (
                    <a
                      href={`mailto:${content}`}
                      className="text-primary hover:underline"
                    >
                      {content}
                    </a>
                  ) : isPhone(content) ? (
                    <>
                      <a
                        href={`tel:${content}`}
                        className="text-primary hover:underline"
                      >
                        {content}
                      </a>
                      {key === "phone" && extraPhone && (
                        <span className="ml-6 text-white">{extraPhone}</span>
                      )}
                    </>
                  ) : (
                    content
                  )}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const ContactPage = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ru";
  const heroData = contactData[currentLang].image;
  const contact = contactData[currentLang].contact;

  const icons = {
    address: MapPin,
    email: Mail,
    phone: Phone,
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
    <section className="h-screen overflow-hidden flex flex-col">
      {/* Hero */}
      <div className="relative h-[30%] sm:h-[40%]">
        {/* Mobile */}
        <div className="block md:hidden h-full relative overflow-hidden">
          <div className="absolute inset-0">
            <div
              className="w-full h-full bg-cover bg-center filter brightness-75 blur-[1px]"
              style={{ backgroundImage: `url(${heroData.src})` }}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="relative z-10 h-full container mx-auto px-4 py-6 flex items-center justify-center">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold text-white text-center"
              >
                {contact.title}
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
              style={{ backgroundImage: `url(${heroData.src})` }}
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
                  className="title text-white font-bold text-6xl text-center mt-20"
                  variants={itemVariants}
                >
                  {contact.title}
                </motion.h2>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* contact & map */}
      <div className="relative h-[60%] sm:h-[55%] bg-white overflow-hidden">
        <div className="container mx-auto h-full flex flex-col items-center justify-center">
          <div className="w-full  relative">
            <div className="flex flex-col lg:flex-row gap-6 mt-28 sm:mt-0">
              <div className="w-full lg:w-1/2">
                <ContactInfoGroup info={contact.info} icons={icons} />
              </div>
              <div className="w-full lg:w-1/2 relative map-container">
                <iframe
                  className="w-full h-full border-0 rounded-xl shadow-md"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.558494123768!2d51.14049832087319!3d43.669998072746154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41b43110065855bd%3A0x80389120be3bc6e8!2z0JfQvtC00LjQsNC6LCDQsdC40LfQvdC10YEg0L7RgNGC0LDQu9GL0ps!5e0!3m2!1sru!2skz!4v1740650288311!5m2!1sru!2skz"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - Zodiac Business Center"
                  aria-label="Location map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ContactPage;
