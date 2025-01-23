import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Logo from '/public/images/logo.svg'
import Image from 'next/image';


const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts } = props;

    return (
        <header id="header" className={props.topbarClass}>
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link className="navbar-brand" href="/"><Image src={Logo}
                                        alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Home</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/">Home style 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home2">Home style 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home3">Home style 3</Link></li>
                                                <li><Link onClick={ClickHandler} href="/home4">Home style 4</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Pages</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/about">About</Link></li>
                                                <li><Link onClick={ClickHandler} href="/team">Team</Link></li>
                                                <li><Link onClick={ClickHandler} href="/team-single/Wade-Warren">Team Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/shop">Shop</Link></li>
                                                <li><Link onClick={ClickHandler} href="/product-single/Bev-Accent-Chair">Shop Single</Link></li>
                                                <li><Link onClick={ClickHandler} href="/cart">Cart</Link></li>
                                                <li><Link onClick={ClickHandler} href="/checkout">Checkout</Link></li>
                                                <li><Link onClick={ClickHandler} href="/pricing">Pricing</Link></li>
                                                <li><Link onClick={ClickHandler} href="/404">404 Error</Link></li>
                                                <li><Link onClick={ClickHandler} href="/faq">FAQ</Link></li>
                                                <li><Link onClick={ClickHandler} href="/login">Login</Link></li>
                                                <li><Link onClick={ClickHandler} href="/register">Register</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Portfolio</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/project">Portfolio 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/project-2">Portfolio 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/project/Furniture-&-Decor">Portfolio Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Service</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/service">Service 1</Link></li>
                                                <li><Link onClick={ClickHandler} href="/service-2">Service 2</Link></li>
                                                <li><Link onClick={ClickHandler} href="/service-3">Service 3</Link></li>
                                                <li><Link onClick={ClickHandler} href="/service/Interior-Design">Service Single</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/">Blog</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/blog">Blog right sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-left-sidebar">Blog left sidebar</Link></li>
                                                <li><Link onClick={ClickHandler} href="/blog-fullwidth">Blog fullwidth</Link></li>
                                                <li className="menu-item-has-children">
                                                    <Link onClick={ClickHandler} href="/">Blog details</Link>
                                                    <ul className="sub-menu">
                                                        <li><Link onClick={ClickHandler} href="/blog-single/The-Golden-Ratio-2D-Sketch">Blog details right sidebar</Link>
                                                        </li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-left-sidebar/The-Golden-Ratio-2D-Sketch">Blog details left
                                                            sidebar</Link></li>
                                                        <li><Link onClick={ClickHandler} href="/blog-single-fullwidth/The-Golden-Ratio-2D-Sketch">Blog details
                                                            fullwidth</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="mini-cart">
                                        <button className="cart-toggle-btn" onClick={() => setcartState(!cartActive)}>
                                            {" "}
                                            <i className="fi flaticon-shopping-cart"></i>{" "}
                                            <span className="cart-count">{carts.length}</span>
                                        </button>
                                        <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
                                            <button className="mini-cart-close" onClick={() => setcartState(!cartActive)}><i className="ti-close"></i></button>
                                            <div className="mini-cart-items">
                                                {carts &&
                                                    carts.length > 0 &&
                                                    carts.map((catItem, crt) => (
                                                        <div className="mini-cart-item clearfix" key={crt}>
                                                            <div className="mini-cart-item-image">
                                                                <span>
                                                                    <img src={catItem.proImg} alt="icon" />
                                                                </span>
                                                            </div>
                                                            <div className="mini-cart-item-des">
                                                                <p>{catItem.title} </p>
                                                                <span className="mini-cart-item-price">
                                                                    ${catItem.price} x {" "} {catItem.qty}
                                                                </span>
                                                                <span className="mini-cart-item-quantity">
                                                                    <button
                                                                        onClick={() =>
                                                                            props.removeFromCart(catItem.id)
                                                                        }
                                                                        className="btn btn-sm btn-danger"
                                                                    >
                                                                        <i className="ti-close"></i>
                                                                    </button>{" "}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                            <div className="mini-cart-action clearfix">
                                                <span className="mini-checkout-price">Subtotal: <span> ${totalPrice(carts)}</span></span>
                                                <div className="mini-btn">
                                                    <Link href="/checkout" className="view-cart-btn s1">Checkout</Link>
                                                    <Link href="/cart" className="view-cart-btn">View Cart</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`fi ti-search ${menuActive ? "ti-close" : "fi "}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi flaticon-loupe"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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