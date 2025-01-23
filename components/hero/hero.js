import React from "react";
import Link from 'next/link'


const Hero = () => {
    return (
        <section className="static-hero-s3">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-10 col-12">
                                <div className="wpo-static-hero-inner">
                                    <h2 className="title">Best Architecture & <br />
                                        Interior solution</h2>
                                    <p>Dapibus aliquet lacus sem egestas netus vestibulum sit turpis scelerisque
                                        pharetra pelque diam pharetra curabitur.</p>
                                    <Link href="/about" className="theme-btn">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Hero;