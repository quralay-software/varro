import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const MobileDropdown = ({ title, items, isOpen, onToggle }) => {
  const router = useRouter();

  return (
    <div className="">
      <button
        onClick={onToggle}
        className="w-full flex bg-white border-none items-center justify-between py-4 px-6 text-gray-700 hover:text-primary transition-colors duration-200"
      >
        <span className="text-base font-medium">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-gray-50"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.link}
                  className={`block py-3 px-8 text-sm transition-colors duration-200 ${
                    router.pathname === item.link
                      ? "text-primary font-medium"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.text}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(null);

  const changeLanguage = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  const navItems = {
    strategic: [
      { text: t("nav.goals"), link: "/goals" },
      { text: t("nav.principles"), link: "/principles" },
    ],
  };

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed right-0 top-0 h-full w-72 bg-gradient-to-r from-white to-gray-50 shadow-2xl z-50 rounded-l-lg overflow-y-auto"
          >
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-4 right-4 z-50 p-2 bg-white/80 rounded-full shadow"
              aria-label="Закрыть меню"
            >
              <X className="h-6 w-6 text-gray-700" />
            </motion.button>
            <motion.div className="flex flex-col h-full pt-20">
              <motion.div variants={itemVariants}>
                <Link
                  href="/"
                  className={`block py-4 px-6 text-base font-medium transition-transform duration-200 hover:scale-105 ${
                    router.pathname === "/"
                      ? "text-primary"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {t("nav.home")}
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  href="/about"
                  className={`block py-4 px-6 text-base font-medium transition-transform duration-200 hover:scale-105 ${
                    router.pathname === "/about"
                      ? "text-primary"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {t("nav.about")}
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <MobileDropdown
                  title={t("nav.strategic")}
                  items={navItems.strategic}
                  isOpen={openDropdown === "strategic"}
                  onToggle={() => handleDropdownToggle("strategic")}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  href="/bgpz"
                  className={`block py-4 px-6 text-base font-medium transition-transform duration-200 hover:scale-105 ${
                    router.pathname === "/bgpz"
                      ? "text-primary"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {t("nav.bgpz")}
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link
                  href="/contact"
                  className={`block py-4 px-6 text-base font-medium transition-transform duration-200 hover:scale-105 ${
                    router.pathname === "/contact"
                      ? "text-primary"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {t("nav.contacts")}
                </Link>
              </motion.div>

              {/* Language Selector */}
              <motion.div
                variants={itemVariants}
                className="mt-auto border-t border-gray-200"
              >
                <div className="flex justify-center items-center py-6 space-x-6">
                  <button
                    onClick={() => changeLanguage("ru")}
                    className={`px-4 py-2 text-base border-none bg-white font-medium transition-colors duration-200 ${
                      i18n.language === "ru"
                        ? "text-primary"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    RU
                  </button>
                  <button
                    onClick={() => changeLanguage("kk")}
                    className={`px-4 py-2 text-base font-medium border-none bg-white transition-colors duration-200 ${
                      i18n.language === "kk"
                        ? "text-primary"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    ҚАЗ
                  </button>
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`px-4 py-2 text-base font-medium border-none bg-white transition-colors duration-200 ${
                      i18n.language === "en"
                        ? "text-primary"
                        : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
