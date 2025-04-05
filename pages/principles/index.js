import React from "react";
import Seo from "../../components/Seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../../components/Navbar/Navbar";
import PrinciplesHero from "../../components/principles/PrinciplesHero";
import CorePrinciples from "../../components/principles/CorePrinciples";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const PrinciplesPage = () => {

  return (
    <div className={`flex flex-col min-h-screen ${play.className}`}>
      <Seo />
      <Navbar hclass={"wpo-header-style-2"} />
      <PrinciplesHero />
      <CorePrinciples />
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

export default PrinciplesPage;
