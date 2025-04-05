import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero3 from "../components/hero3/hero3";
import Seo from "../components/Seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const HomePage = () => {
    const { t } = useTranslation("common");

  return (
    <div className={`${play.className}`}>
      <Seo/>
      <Navbar hclass={"wpo-header-style-3"} topbarNone={"topbar-none"} />
      <Hero3 />
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

export default HomePage;
