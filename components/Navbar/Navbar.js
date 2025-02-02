import React, { useState } from "react";
import Header from '../header';
import MobileMenu from '../MobileMenu/MobileMenu';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '/public/images/varro.png';

export default function Navbar(props) {
  const [scroll, setScroll] = React.useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => setScroll(document.documentElement.scrollTop);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = scroll > 80 ? "fixed-navbar active" : "fixed-navbar";

  return (
    <>
      <div className={`${className} w-full bg-white`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={Logo}
                alt="Varro Operating Group"
                className="h-12 w-auto"
                priority
              />
            </Link>

            <div className="hidden lg:block flex-grow">
              <Header hclass={props.hclass} Logo={props.Logo} topbarClass={props.topbarClass}/>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative z-50 p-6 border-none shadow-none bg-primary rounded-full hover:bg-gray-100 focus:outline-none size-24"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <X className="size-12 text-gray-600" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Menu className="size-12 text-gray-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
