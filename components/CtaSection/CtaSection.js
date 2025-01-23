import React from 'react';
import Link from 'next/link';
import ctimg1 from '/public/images/img-1.JPG';
import ctimg2 from '/public/images/img-6.JPG';
import Image from 'next/image';

const CtaSection = (props) => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <section className="Arkitek-cta-section-s2 section-padding">
      <div className="cta-left">
        <Image src={ctimg1} alt="" />
      </div>
      <div className="cta-right">
        <Image src={ctimg2} alt="" />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7 col-12">
            <div className="cta-content">
              <h5>Свяжитесь с нами</h5>
              <Link onClick={ClickHandler} className="call" href="/contact">
                +7 7292 201 909
              </Link>
              <p>Мы готовы ответить на ваши вопросы и предоставить необходимую информацию. Свяжитесь с нами в любое время.</p>
              <div className="cta-btn">
                <Link onClick={ClickHandler} className="theme-btn" href="/contact">Узнать больше</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection;
