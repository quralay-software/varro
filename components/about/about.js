import React from 'react'
import CountUp from 'react-countup';
import abimg1 from '/public/images/about-right-3.jpg'
import abimg2 from '/public/images/about-right-4.jpg'
import Link from 'next/link'
import Image from 'next/image';

const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    
    return (
        <section className="Arkitek-about-section-s4 section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-12">
                        <div className="about-text">
                            <span>About Us</span>
                            <h2>Perfect Solution For Your
                                Dream House</h2>
                            <p>Acacumsan sollicitudin eget commodo consequat urna egestas turpis eu. Ut proin tellus hac
                                aliquet enim leo.
                                Arcu at a eu quis mattis. Commodo eget sapien eget et sit netus sagittis. Enim faucibus
                                phasellus condimentum donec velit vitae vestibulum feugiat.
                                Morbi ultrices risus duis eget id elementum id.
                                Dignissim sed magna congue pretium egestas neque faucibus tempus. Quis at arcu auctor
                                semper quis semper nisl a.</p>
                            <ul>
                                <li>Arkitekdemo@gmail.com</li>
                                <li>(239) 555-0108</li>
                                <li>8502 Preston Rd. Inglewood, Maine 98380</li>
                            </ul>
                            <Link onClick={ClickHandler} href="/about" className="theme-btn">More About</Link>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12 order-2 ">
                        <div className="about-right-content">
                            <div className="info">
                                <h3><CountUp end={25} enableScrollSpy />+</h3>
                                <p>Years Of
                                    Experience</p>
                            </div>
                            <div className="images">
                                <Image src={abimg1} alt=""/>
                            </div>
                            <div className="bg-img">
                                <Image src={abimg2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default About;