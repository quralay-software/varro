import React, { useState, useEffect } from "react";
import Header from "../header";
import MobileMenu from "../MobileMenu/MobileMenu";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/images/varro.png";

export default function Navbar(props) {
  const [scroll, setScroll] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScroll(document.documentElement.scrollTop);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgClass = "bg-transparent";
  const transitionClass = "transition-colors duration-300";

  const showElements = scroll < 100;

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full ${bgClass} ${transitionClass} z-50`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 sm:mt-2">
            <AnimatePresence>
              {(!isMobile || showElements) && (
                <div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="/"
                    className="flex-shrink-0 relative z-[9999] sm:ml-10"
                  >
                    <Image
                      src={Logo}
                      alt="Varro Operating Group"
                      className="h-14 sm:h-[4.7rem] w-auto drop-shadow-[0_0_2px_black]"
                      priority
                    />
                  </Link>
                </div>
              )}
            </AnimatePresence>

            <div className="hidden lg:block flex-grow">
              <Header
                hclass={props.hclass}
                Logo={props.Logo}
                topbarClass={props.topbarClass}
              />
            </div>

            {/* burger */}
            <AnimatePresence>
              {isMobile && showElements && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="lg:hidden">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className="relative z-50 p-4 border-none rounded-full bg-white/50 hover:bg-gray-100 focus:outline-none"
                    >
                      <AnimatePresence mode="wait">
                        {isMobileMenuOpen ? (
                          <motion.div
                            key="close"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center"
                          >
                            <X className="h-6 w-6 text-gray-600" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="menu"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center"
                          >
                            <Menu className="h-6 w-6 text-gray-600" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
