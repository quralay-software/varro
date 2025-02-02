import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Services from '../../api/Services';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serviceSectionData } from '../../data/serviceSection';

const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const ServiceSection = (props) => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';
    const data = serviceSectionData[currentLang];

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
      <section className="Arkitek-service-section-s3 section-padding" style={{ marginTop: "5rem", marginBottom: "5rem"}}>
          <div className="container-fluid">
              <div className="service-wrap">
                  <div className="service-title-left">
                      <div className="wpo-section-title">
                          <h2>{data.title}</h2>
                          <p>
                              {data.description}
                          </p>
                          <Link onClick={ClickHandler} href="/services">{data.viewAllButton}</Link>
                      </div>
                  </div>
                  <div className="service-content service-content-slider">
                      <Slider {...settings}>
                          {Services.map((service, Sitem) => {
                              const translatedService = data.services.find(s => s.slug === service.slug);
                              if (!translatedService) return null;
                              
                              return (
                                <div className="service-single-item" key={Sitem}>
                                    <div className="icon">
                                        <Image src={service.sImg} alt="" />
                                    </div>
                                    <div className="text">
                                        <h2>
                                            <Link onClick={ClickHandler} href="/services">
                                                {translatedService.title}
                                            </Link>
                                        </h2>
                                        <p>{translatedService.description}</p>
                                    </div>
                                </div>
                              );
                          })}
                      </Slider>
                  </div>
              </div>
          </div>
      </section>
    );
};

export default ServiceSection;
