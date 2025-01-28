import React from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import { useTranslation } from 'next-i18next';
import LanguageSelector from '../LanguageSelector';

const Header = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    
    const { t } = useTranslation('common');

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
                                            <Link onClick={ClickHandler} 
                                                  className="text-gray-700 hover:text-gray-900 font-arial" 
                                                  href="/service-2">{t('nav.projects')}</Link>
                                        </li>
                                        <li>
                                            <Link onClick={ClickHandler} 
                                                  className="text-gray-700 hover:text-gray-900 font-arial" 
                                                  href="/blog-left-sidebar">{t('nav.blog')}</Link>
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
