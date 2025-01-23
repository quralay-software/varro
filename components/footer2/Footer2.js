import React from 'react'
import Link from 'next/link'
import Logo from '/public/images/logo-2.svg'
import Services from '../../api/Services';
import Image from 'next/image';



const Footer2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="wpo-site-footer-s2">
            <div className="shape-1">
                <svg width="596" height="590" viewBox="0 0 596 590" fill="none">
                    <path d="M148 590L596 0H0L148 590Z" />
                </svg>
            </div>
            <div className="shape-2">
                <svg width="328" height="510" viewBox="0 0 328 510" fill="none">
                    <path d="M62 0L328 226V510H62L0 472L62 0Z" />
                </svg>
            </div>
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12 order-2 order-md-1">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="contact-ft">
                                    <ul>
                                        <li><i className="fi flaticon-email"></i>arkitek@gmail.com</li>
                                        <li><i className="fi flaticon-phone-call"></i>+ 8 (123) 123 - 456 - 789</li>
                                        <li><i className="fi flaticon-placeholder"></i>19 Thordge Shiloh,Hawai 863</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12 order-1 order-md-2">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={Logo} alt="logo" />
                                </div>
                                <p>Elit commodo nec urna erat morbi at hac turpis aliquam.
                                    In tristique elit nibh turpis. Lacus volutpat ipsum convallis tellus pellentesque
                                    etiam.</p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-linkedin"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} href="/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-sm-12 col-12 order-3">
                            <div className="widget link-widget s2">
                                <div className="widget-title">
                                    <h3>Top Services</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 5).map((service, Sitem) => (
                                        <li key={Sitem}><Link onClick={ClickHandler} href={'/service/[slug]'} as={`/service/${service.slug}`}>{service.sTitle}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer2;