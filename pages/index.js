import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Scrollbar from "../components/scrollbar/scrollbar";
import Hero3 from "../components/hero3/hero3";
import Footer from "../components/footer/Footer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const HomePage = () => {
  return (
    <div className={`${play.className}`}>
      <Navbar hclass={"wpo-header-style-3"} topbarNone={"topbar-none"} />
      <Hero3 />
      <Footer />
      <Scrollbar />
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
