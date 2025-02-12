import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { contactData } from "../../data/contact";
import { MapPin, Mail, Phone } from "lucide-react";

const ContactInfo = ({ icon: Icon, content }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-primary/25 opacity-40" />
    <div className="relative z-10 flex items-center gap-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
        <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
      </div>
      <div className="flex-1 flex items-center">
        {Array.isArray(content) ? (
          content.map((item, index) => (
            <p key={index} className="m-0 text-gray-600 leading-none">
              {isEmail(item) ? (
                <a
                  href={`mailto:${item}`}
                  className="text-primary hover:underline"
                >
                  {item}
                </a>
              ) : isPhone(item) ? (
                <a
                  href={`tel:${item}`}
                  className="text-primary hover:underline"
                >
                  {item}
                </a>
              ) : (
                item
              )}
            </p>
          ))
        ) : (
          <p className="m-0 text-gray-600 leading-none">
            {isEmail(content) ? (
              <a
                href={`mailto:${content}`}
                className="text-primary hover:underline"
              >
                {content}
              </a>
            ) : isPhone(content) ? (
              <a
                href={`tel:${content}`}
                className="text-primary hover:underline"
              >
                {content}
              </a>
            ) : (
              content
            )}
          </p>
        )}
      </div>
    </div>
  </div>
);

const isEmail = (text) => /\S+@\S+\.\S+/.test(text);
const isPhone = (text) => /^\+?\d[\d\s()-]{7,}$/.test(text);

const Contactpage = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "ru";
  const data = contactData[currentLang].contact;

  const icons = {
    address: MapPin,
    email: Mail,
    phone: Phone,
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          {Object.entries(data.info).map(([key, value]) => (
            <ContactInfo
              key={key}
              icon={icons[key]}
              title={value.title}
              content={value.content}
            />
          ))}
        </motion.div>

        <div className="w-full lg:w-1/2 h-[500px] relative">
          <iframe
            className="w-full h-full border-0 rounded-xl shadow-md"
            src="https://maps.google.com/maps?q=43.641494,51.159742&z=17&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps - Zodiac Business Center"
            aria-label="Location map"
          />
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
