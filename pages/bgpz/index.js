import React from "react";
import Seo from "../../components/Seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../../components/Navbar/Navbar";
import BgpzHero from "../../components/bgpz/BgpzHero";
import BgpzHistory from "../../components/bgpz/BgpzHistory";
import BgpzTechnology from "../../components/bgpz/BgpzTechnology";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const BgpzPage = () => {
  return (
    <div className={`flex flex-col min-h-screen ${play.className}`}>
      <Seo />
      <Navbar hclass={"wpo-header-style-2"} />
      <BgpzHero />
      <BgpzHistory />
      <BgpzTechnology />
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

export default BgpzPage;
