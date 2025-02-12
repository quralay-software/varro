import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import { useTranslation } from 'next-i18next';
import LanguageSelector from '../LanguageSelector';
import { motion, AnimatePresence } from 'framer-motion';

const NavDropdown = ({ title, items, isOpen, onToggle }) => {
    const [isHovered, setIsHovered] = useState(false);
    const router = useRouter();
    const isActiveDropdown = items.some(item => item.link === router.pathname);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.button
                onClick={onToggle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center font-arial bg-transparent border-none shadow-none text-lg font-medium px-3 py-2 rounded-md transition-colors duration-200
                    ${isActiveDropdown ? 'text-primary' : 'text-gray-700 hover:text-gray-900'}`}
            >
                {title}
                <motion.svg
                    animate={{ rotate: isOpen || isHovered ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="ml-1 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
            </motion.button>
            <AnimatePresence>
                {(isOpen || isHovered) && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-hidden"
                    >
                        <motion.div
                            className="py-1"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.05
                                    }
                                }
                            }}
                        >
                            {items.map((item, index) => {
                                const isActive = router.pathname === item.link;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, x: -20 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                    >
                                        <Link
                                            href={item.link}
                                            className={`block px-4 py-2 text-base hover:bg-gray-50 transition-colors duration-200
                                                ${isActive
                                                    ? 'text-primary font-medium bg-gray-50'
                                                    : 'text-gray-700 hover:text-gray-900'
                                                }`}
                                        >
                                            {item.text}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Header = (props) => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { t } = useTranslation('common');

    const navItems = {
        strategic: [
            { text: t('nav.goals'), link: '/goals' },
            { text: t('nav.principles'), link: '/principles' }
        ]
    };

    const handleDropdownToggle = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    return (
        <motion.header
            id="header"
            className={`w-full fixed top-0 left-0 right-0 z-50 ${props.topbarClass}`}
            initial={{ y: 0 }}
            animate={{
                y: 0,
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 1)',
                boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
            }}
            transition={{ duration: 0.3 }}
        >
            <div className=''>
                <motion.nav
                    className="px-4 py-3 bg-white"
                    animate={{
                        height: isScrolled ? 'auto' : 'auto',
                        paddingTop: isScrolled ? '0.5rem' : '0.75rem',
                        paddingBottom: isScrolled ? '0.5rem' : '0.75rem'
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="container mx-auto w-full">
                        <div className="flex items-center justify-end">
                            <div className="lg:hidden mr-auto">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="hidden lg:flex w-full justify-end">
                                <div className="flex items-center justify-end">
                                    <ul className="flex items-center space-x-8">
                                        <li>
                                            <Link
                                                onClick={ClickHandler}
                                                className={`font-arial text-lg transition-colors duration-200 py-2 px-3
                                                    ${router.pathname === '/' ? 'text-primary font-medium' : 'text-gray-700 hover:text-gray-900'}`}
                                                href="/"
                                            >
                                                {t('nav.home')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={ClickHandler}
                                                className={`font-arial text-lg transition-colors duration-200 py-2 px-3
                                                    ${router.pathname === '/about' ? 'text-primary font-medium' : 'text-gray-700 hover:text-gray-900'}`}
                                                href="/about"
                                            >
                                                {t('nav.about')}
                                            </Link>
                                        </li>
                                        <li className="flex items-center">
                                            <NavDropdown
                                                title={t('nav.strategic')}
                                                items={navItems.strategic}
                                                isOpen={openDropdown === 'strategic'}
                                                onToggle={() => handleDropdownToggle('strategic')}
                                            />
                                        </li>
                                        <li>
                                            <Link
                                                onClick={ClickHandler}
                                                className={`font-arial text-lg transition-colors duration-200 py-2 px-3
                                                    ${router.pathname === '/bgpz' ? 'text-primary font-medium' : 'text-gray-700 hover:text-gray-900'}`}
                                                href="/bgpz"
                                            >
                                                {t('nav.bgpz')}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                onClick={ClickHandler}
                                                className={`font-arial text-lg transition-colors duration-200 py-2 px-3
                                                    ${router.pathname === '/contact' ? 'text-primary font-medium' : 'text-gray-700 hover:text-gray-900'}`}
                                                href="/contact"
                                            >
                                                {t('nav.contacts')}
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="ml-8">
                                        <LanguageSelector />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.nav>
            </div>
        </motion.header>
    );
};

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    }
};

export default connect(mapStateToProps, { removeFromCart })(Header);
