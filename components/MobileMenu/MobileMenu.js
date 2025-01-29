import React, { useState } from 'react';
import Link from "next/link";
import { useTranslation } from 'next-i18next';

const MobileMenu = () => {
    const [menuActive, setMenuState] = useState(false);
    const { t } = useTranslation('common');

    const menus = [
        {
            id: 1,
            title: t('nav.home'),
            link: '/'
        },
        {
            id: 2,
            title: t('nav.services'),
            link: '/service-2'
        },
        {
            id: 3,
            title: t('nav.company'),
            link: '/about'
        },
        {
            id: 4,
            title: t('nav.contacts'),
            link: '/contact'
        }
    ];

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <li key={mn}>
                                <Link 
                                    onClick={() => {
                                        ClickHandler();
                                        setMenuState(false);
                                    }} 
                                    className="active"
                                    href={item.link}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;
