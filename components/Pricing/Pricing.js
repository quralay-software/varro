import React from 'react'
import Link from 'next/link'
import SectionTitle from '../SectionTitle/SectionTitle';



const Pricing = (props) => {
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`wpo-pricing-section section-padding ${props.PrClass}`}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <SectionTitle subTitle={'Pricing Plans'} Title={'Choose Your Perfect Plan'}/>
                    </div>
                </div>
                <div className="wpo-pricing-wrap">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-pricing-item">
                                <div className="wpo-pricing-top">
                                    <div className="pricing-thumb">
                                        <span>Basic</span>
                                    </div>
                                    <div className="wpo-pricing-text">
                                        <h2><strong>$</strong> 125<span>/Per Month</span></h2>
                                    </div>
                                </div>
                                <div className="wpo-pricing-bottom">
                                    <div className="wpo-pricing-bottom-text">
                                        <ul>
                                            <li>Dismantling plan</li>
                                            <li>Measurement of the room</li>
                                            <li>Structure of a project</li>
                                            <li>Scheme of interior finishing</li>
                                            <li>3D-Visualization of premises</li>
                                            <li>Best interior design</li>
                                        </ul>
                                        <Link onClick={ClickHandler} href="/pricing">CHOOSE PLAN</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-pricing-item">
                                <div className="wpo-pricing-top">
                                    <div className="pricing-thumb">
                                        <span>Standard</span>
                                    </div>
                                    <div className="wpo-pricing-text">
                                        <h2><strong>$</strong> 250<span>/Per Month</span></h2>
                                    </div>
                                </div>
                                <div className="wpo-pricing-bottom">
                                    <div className="wpo-pricing-bottom-text">
                                        <ul>
                                            <li>Dismantling plan</li>
                                            <li>Measurement of the room</li>
                                            <li>Structure of a project</li>
                                            <li>Scheme of interior finishing</li>
                                            <li>3D-Visualization of premises</li>
                                            <li>Best interior design</li>
                                        </ul>
                                        <Link onClick={ClickHandler} href="/pricing">CHOOSE PLAN</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-pricing-item">
                                <div className="wpo-pricing-top">
                                    <div className="pricing-thumb">
                                        <span>Platinum</span>
                                    </div>
                                    <div className="wpo-pricing-text">
                                        <h2><strong>$</strong> 320<span>/Per Month</span></h2>
                                    </div>
                                </div>
                                <div className="wpo-pricing-bottom">
                                    <div className="wpo-pricing-bottom-text">
                                        <ul>
                                            <li>Dismantling plan</li>
                                            <li>Measurement of the room</li>
                                            <li>Structure of a project</li>
                                            <li>Scheme of interior finishing</li>
                                            <li>3D-Visualization of premises</li>
                                            <li>Best interior design</li>
                                        </ul>
                                        <Link onClick={ClickHandler} href="/pricing">CHOOSE PLAN</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;