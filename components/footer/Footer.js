import React from "react";
import { useTranslation } from "next-i18next";

const Footer = (props) => {
  const { t } = useTranslation();

  return (
    <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="contact-ft">
                  <div className="flex flex-wrap justify-between text-base sm:text-lg text-white">
                    <div className="w-1/2 flex items-center">
                      {t("footer.address")}
                    </div>
                    <div className="w-1/2 flex flex-col space-y-2 items-end">
                      <div>{t("footer.phone")}</div>
                      <div>{t("footer.email")}</div>
                    </div>
                  </div>
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
