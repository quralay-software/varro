import React from "react";
import { useTranslation } from "next-i18next";

const Footer = (props) => {
  const { t } = useTranslation();

  return (
    <footer className="wpo-site-footer mt-auto">
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
