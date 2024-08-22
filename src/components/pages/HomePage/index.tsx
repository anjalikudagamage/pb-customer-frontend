import React from "react";
import WovenImageList from "../../higherOrderComponents/WovenImageList";
import IconText from "../../higherOrderComponents/ImageText";
import Image1 from "../../../assets/images/ImageCarousel/image1.jpg";
import Image2 from "../../../assets/images/ImageCarousel/image2.jpg";
import Navbar from "../../organisms/Navbar";
import Footer from "../../atoms/Footer";
import HomeImage from "../../higherOrderComponents/HomeImage";
import WhyWeChoose from "../../organisms/WhyWeChoose";

const HomePage: React.FC = () => {
  const items = [
    {
      image: Image1,
      title: "Title 1",
      text: "This is the first image",
    },
    {
      image: Image2,
      title: "Title 2",
      text: "This is the second image",
    },
  ];

  return (
    <>
      <Navbar />
      <HomeImage/>
      <WovenImageList />
      <IconText />
      <WhyWeChoose items={items} topic="Why choose us ?" />
      <Footer/>
    </>
  );
};

export default HomePage;
