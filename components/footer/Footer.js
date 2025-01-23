import React from 'react';
import Link from 'next/link';
import Logo from '/public/images/varro.png';
import Services from '../../api/Services';
import Image from 'next/image';

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
      <footer className="wpo-site-footer">
          <div className="wpo-upper-footer">
              <div className="container">
                  <div className="row">
                      <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                          <div className="widget about-widget">
                              <div className="logo widget-title" style={{ marginBottom: '20px'}}>
                                  <Image src={Logo} alt="Varro Operating Group" />
                              </div>
                              <p>
                                  Компания Varro Operating Group специализируется на добыче и переработке нефти и газа, обеспечивая ответственное управление окружающей средой.
                              </p>
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
                      <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                          <div className="widget link-widget">
                              <div className="widget-title">
                                  <h3  style={{ fontFamily: 'Arial', fontSize: '1.5rem' }}>Контакты</h3>
                              </div>
                              <div className="contact-ft">
                                  <ul>
                                      <li><i className="fi flaticon-email"></i>info@varro.kz</li>
                                      <li><i className="fi flaticon-phone-call"></i>+7 7292 201 909</li>
                                      <li><i className="fi flaticon-placeholder"></i>Республика Казахстан, Мангистауская область, город Актау, БЦ Зодиак, микрорайон 17, здание 39.</li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                          <div className="widget link-widget">
                              <div className="widget-title">
                                  <h3  style={{ fontFamily: 'Arial', fontSize:'1.5rem' }}>Основные услуги</h3>
                              </div>
                              <ul>
                                  {Services.slice(0, 5).map((service, Sitem) => (
                                    <li key={Sitem}>
                                        <Link onClick={ClickHandler} href={'/service/[slug]'} as={`/service/${service.slug}`}>
                                            {service.sTitle}
                                        </Link>
                                    </li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                      <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                          <div className="widget newsletter-widget">
                              <div className="widget-title">
                                  <h3  style={{ fontFamily: 'Arial', fontSize: '1.5rem' }}>Подпишитесь на рассылку</h3>
                              </div>
                              <form onSubmit={SubmitHandler}>
                                  <div className="input-1">
                                      <input type="email" className="form-control" placeholder="Ваш email..." required />
                                  </div>
                                  <div className="submit clearfix">
                                      <button type="submit">Подписаться</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="wpo-lower-footer">
              <div className="container">
                  <div className="row">
                      <div className="col col-xs-12">
                          <p className="copyright">
                              &copy; {new Date().getFullYear()} Varro Operating Group. Все права защищены.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    )
}

export default Footer;
