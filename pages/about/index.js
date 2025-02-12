import React from "react";
import About4 from "../../components/about4/about4";
import Navbar from "../../components/Navbar/Navbar";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import ActivitiesMain from "../../components/activities/ActivitiesMain";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Play } from "next/font/google";

const play = Play({ subsets: ["latin"], weight: ["400", "700"] });

const AboutPage = () => {
  return (
    <div className={`flex flex-col min-h-screen ${play.className}`}>
      <Navbar hclass={"wpo-header-style-2"} />
      <About4 abClass={"section-padding"} />
      <ActivitiesMain />
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

export default AboutPage;
