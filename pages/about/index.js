import React from "react";
import Seo from "../../components/Seo";
import About4 from "../../components/about4/about4";
import Navbar from "../../components/Navbar/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const AboutPage = () => {

  return (
    <div className={`${play.className}`}>
      <Seo />
      <Navbar hclass={"wpo-header-style-2"} />
      <About4 />
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

export default AboutPage;
