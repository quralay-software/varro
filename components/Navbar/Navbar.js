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

  useEffect(() => {
    const handleScroll = () => setScroll(document.documentElement.scrollTop);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const bgClass = "bg-transparent";
  const transitionClass = "transition-colors duration-300";

  const showBurger = scroll < 80;

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full ${bgClass} ${transitionClass} z-50`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="invisible flex-shrink-0">
              <Image
                src={Logo}
                alt="Varro Operating Group"
                className="h-12 w-auto"
                priority
              />
            </Link>

            <div className="hidden lg:block flex-grow">
              <Header
                hclass={props.hclass}
                Logo={props.Logo}
                topbarClass={props.topbarClass}
              />
            </div>

            {showBurger && (
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
            )}
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
