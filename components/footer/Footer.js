import React from 'react';
import Logo from '/public/images/varro.png';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const Footer = (props) => {
    const { i18n } = useTranslation();
    const currentLang = i18n.language || 'ru';

    return (
      <footer className="wpo-site-footer">
          <div className="wpo-upper-footer">
              <div className="container">
                  <div className="row justify-content-between">
                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="widget about-widget">
                              <div className="logo widget-title" style={{ marginBottom: '20px'}}>
                                  <Image src={Logo} alt="Varro Operating Group" />
                              </div>
                              <p>
                                  Компания Varro Operating Group специализируется на добыче и переработке нефти и газа, обеспечивая ответственное управление окружающей средой.
                              </p>
                          </div>
                      </div>
                      <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="widget link-widget">
                              <div className="widget-title">
                                  <h3 style={{ fontFamily: 'Arial', fontSize: '1.5rem' }}>Контакты</h3>
                              </div>
                              <div className="contact-ft">
                                  <ul>
                                      <li><i className="fi flaticon-email"></i>Varro@btmg.kz</li>
                                      <li><i className="fi flaticon-phone-call"></i>+7 7292 201 909</li>
                                      <li><i className="fi flaticon-placeholder"></i>Республика Казахстан, Мангистауская область, город Актау, БЦ Зодиак, микрорайон 17, здание 39.</li>
                                  </ul>
                              </div>
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
    );
};

export default Footer;
