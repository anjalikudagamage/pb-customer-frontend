import React from "react";
import WovenImageList from "../../higherOrderComponents/WovenImageList";
import Navbar from "../../organisms/Navbar";
import Footer from "../../atoms/Footer";
import HomeImage from "../../higherOrderComponents/HomeImage";
import ReviewSection from "../../higherOrderComponents/HomeReviewSection";
import ImageSlider from "../../higherOrderComponents/WhyWeChoose";
import FAQPage from "../../higherOrderComponents/HomeFAQ";

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
