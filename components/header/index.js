import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import { useTranslation } from 'next-i18next';
import LanguageSelector from '../LanguageSelector';
import { motion, AnimatePresence } from 'framer-motion';

const NavDropdown = ({ title, items, isOpen, onToggle }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div 
            className="relative group" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button
                onClick={onToggle}
                className="flex items-center text-gray-700 hover:text-gray-900 font-arial bg-transparent border-none shadow-none"
            >
                {title}
                <svg
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen || isHovered ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <AnimatePresence>
                {(isOpen || isHovered) && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                    >
                        <div className="py-1">
                            {items.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                >
                                    {item.text}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Header = (props) => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    const { t } = useTranslation('common');

    const navItems = {
        company: [
            { text: t('nav.about'), link: '/about' },
            { text: t('nav.activities'), link: '/activities' },
            { text: t('nav.services'), link: '/services' }
        ],
        strategic: [
            { text: t('nav.goals'), link: '/goals' },
            { text: t('nav.principles'), link: '/principles' }
        ]
    };

    const handleDropdownToggle = (dropdownName) => {
        setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
    };

    return (
        <header id="header" className={`w-full ${props.topbarClass}`}>
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="px-4 py-2.5">
                    <div className="container mx-auto">
                        <div className="flex items-center justify-between">
                            <div className="lg:hidden">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="navbar-header">
                                    <Link className="text-2xl font-bold" href="/">
                                        <h1 style={{ fontFamily: 'Arial' }}>Varro</h1>
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden lg:block flex-grow">
                                <div className="flex justify-center">
                                    <ul className="flex space-x-8">
                                        <li>
                                            <Link onClick={ClickHandler} 
                                                  className="text-gray-700 hover:text-gray-900 font-arial" 
                                                  href="/">{t('nav.home')}</Link>
                                        </li>
                                        <li>
                                            <NavDropdown
                                                title={t('nav.company')}
                                                items={navItems.company}
                                                isOpen={openDropdown === 'company'}
                                                onToggle={() => handleDropdownToggle('company')}
                                            />
                                        </li>
                                        <li>
                                            <NavDropdown
                                                title={t('nav.strategic')}
                                                items={navItems.strategic}
                                                isOpen={openDropdown === 'strategic'}
                                                onToggle={() => handleDropdownToggle('strategic')}
                                            />
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} 
                                                  className="text-gray-700 hover:text-gray-900 font-arial" 
                                                  href="/bgpz">{t('nav.bgpz')}</Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} 
                                                  className="text-gray-700 hover:text-gray-900 font-arial" 
                                                  href="/contact">{t('nav.contacts')}</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <LanguageSelector />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};

export default connect(mapStateToProps, { removeFromCart })(Header);
