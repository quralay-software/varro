import React from 'react'
import Link from 'next/link'
import abimg from '/public/images/about.jpg'
import sign from '/public/images/signeture.png'
import Image from 'next/image'


const About4 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`Arkitek-about-section ${props.abClass}`}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-4 col-md-8 col-12">
                        <div className="about-left-item">
                            <div className="wpo-section-title">
                                <span>About Us</span>
                                <h2>Perfect Solution For Your Dream House</h2>
                                <p>Eget lorem purus egestas proin. Penatibus quis lacinia nulla at proin.
                                    Dignissim a placerat massa quam hendrerit in laoreet urna.
                                    Sed in volutpat sit porttitor vestibulum quis semper tristique ac.
                                    Ut sed eget a odio varius nisl
                                    sed nec.
                                    At elementum nascetur turpis elementum egestas non turpis.</p>
                            </div>
                            <Link onClick={ClickHandler} href="/about" className="theme-btn-s2">Read More About Us...</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8 col-12">
                        <div className="about-middle-item">
                            <Image src={abimg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8 col-12">
                        <div className="about-right-item">
                            <p><span>M</span>ignissim adipiscing pretium libero at tristique.
                                Diam sit mauris a interdum. In tristique eu vestibulum id amet malesuada.
                                Quis morbi morbi sed volutpat tristique. Lacinia praesent dictum morbi et fermentum.
                                Sit a sit ac blandit. Cursus donec mollis elit arcu donec aliquam.
                            </p>
                            <h2>Robert Markel</h2>
                            <h3>- CEO of the company</h3>
                            <div className="signeture-img">
                                <Image src={sign} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About4;