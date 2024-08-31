import React from "react";
import WovenImageList from "../../higherOrderComponents/WovenImageList";
import Navbar from "../../organisms/Navbar";
import Footer from "../../atoms/Footer";
import HomeImage from "../../higherOrderComponents/HomeImage";
import ReviewSection from "../../higherOrderComponents/HomePageReviewSection";
import ImageSlider from "../../organisms/WhyWeChoose";
import FAQPage from "../../higherOrderComponents/FAQ";

const HomePage: React.FC = () => {
  

  return (
    <>
      <Navbar />
      <HomeImage/>
      <WovenImageList />
      <ReviewSection/>
      <ImageSlider/>
      <FAQPage/>
      <Footer/>
    </>
  );
};

export default HomePage;
