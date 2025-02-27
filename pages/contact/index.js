import React from "react";
import Contactpage from "../../components/Contactpage/Contactpage";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const ContactPage = () => {
  return (
    <div className={` ${play.className}`}>
      <Navbar hclass={"wpo-header-style-2"} />
      <Contactpage />
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default ContactPage;
