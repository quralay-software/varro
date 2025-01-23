import React from 'react'
import Link from 'next/link'

const CtaSection2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="Arkitek-cta-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-7 col-12">
                        <div className="cta-content">
                            <h5>Call Us 24/7</h5>
                            <Link onClick={ClickHandler} className="call" href="/contact">
                                (208) 555-0112
                            </Link>
                            <p>Contact us for any kind of information. We are ready for support you any time.</p>
                            <div className="cta-btn">
                                <Link onClick={ClickHandler} className="theme-btn" href="/contact">Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CtaSection2;