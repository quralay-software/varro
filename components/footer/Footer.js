import React from "react";
import Logo from "/public/images/varro.png";
import Image from "next/image";
import { useTranslation } from "next-i18next";

const Footer = (props) => {
  const { t } = useTranslation();

  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div
                  className="logo widget-title"
                  style={{ marginBottom: "20px" }}
                >
                  <Image
                    src={Logo}
                    alt="Varro Operating Group"
                    width={80}
                    height={80}
                  />
                </div>
                <p className="text-base sm:text-lg">
                  {t("footer.company_description")}
                </p>
              </div>
            </div>
            <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3 className="text-xl sm:text-2xl font-sans">
                    {t("footer.contacts")}
                  </h3>
                </div>
                <div className="contact-ft">
                  <ul className="flex flex-wrap text-base sm:text-lg">
                    <li className="w-1/2 flex items-center">
                      <i className="fi flaticon-email mr-2"></i>
                      {t("footer.email")}
                    </li>
                    <li className="w-1/2 flex items-center">
                      <i className="fi flaticon-phone-call mr-2"></i>
                      {t("footer.phone")}
                    </li>
                    <li className="w-full flex items-center mt-2">
                      <i className="fi flaticon-placeholder mr-2"></i>
                      {t("footer.address")}
                    </li>
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
              <p className="copyright text-sm sm:text-base">
                {t("footer.rights", { year: new Date().getFullYear() })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
