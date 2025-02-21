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
  <div className="bg-black/20 p-6 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-tl from-gray-50 to-primary opacity-90" />
    <div className="relative z-10 space-y-6">
      {Object.entries(info).map(([key, data]) => {
        const { content, phone: extraPhone } = data;
        return (
          <div key={key} className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/40">
              {React.createElement(icons[key], {
                className: "w-6 h-6 text-white/90",
                strokeWidth: 1.5,
              })}
            </div>
            <div className="flex-1">
              {Array.isArray(content) ? (
                content.map((item, index) => (
                  <p key={index} className="m-0 text-gray-600 leading-none">
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
                <p className="m-0 text-white/90 leading-none">
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

const Contactpage = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ru";
  const heroData = contactData[currentLang].image;
  const contact = contactData[currentLang].contact;

  const icons = {
    address: MapPin,
    email: Mail,
    phone: Phone,
  };

  return (
    <section className="sm:h-screen flex flex-col">
      <section className="relative h-[38vh] w-full overflow-hidden flex justify-center">
        <div className="absolute inset-0">
          <Image
            src={heroData.src}
            alt={heroData.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="relative h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold text-white text-center mt-16">
              {contact.title}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="flex-1 py-14 ">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-[70%]">
            <ContactInfoGroup info={contact.info} icons={icons} />
          </div>

          <div className="w-full sm:h-[23rem] lg:w-1/2 relative map-container -mb-28">
            <iframe
              className="w-full h-full border-0 rounded-xl shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1049.05860520441!2d51.14169467442681!3d43.667971969205894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41b43110065855bd%3A0x80389120be3bc6e8!2z0JfQvtC00LjQsNC6LCDQsdC40LfQvdC10YEg0L7RgNGC0LDQu9GL0ps!5e0!3m2!1sru!2skz!4v1739713917354!5m2!1sru!2skz&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps - Zodiac Business Center"
              aria-label="Location map"
            />
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default Contactpage;
