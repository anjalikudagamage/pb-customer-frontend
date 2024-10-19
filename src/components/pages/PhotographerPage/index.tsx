import React from "react";
import FAQSection from "../../organisms/FAQSection";
import QuiltedImageList from "../../organisms/PhotographerGallery";
import PackageTable from "../../organisms/PackageTable";
import ReviewSection from "../../organisms/ReviewSection";
import Navbar from "../../organisms/Navbar";
import { Typography } from "@mui/material";
import {
  sectionTitleStyle,
  photographerDetailsStyle,
} from "./styles";
import PhotographerImage from "../../organisms/PhotographerImage";
import Footer from "../../atoms/Footer";
import Img from "../../../assets/images/photographer/image1.jpg"

const PhotographerDetailsPage: React.FC = () => {
  const photographer = {
    name: "Eternal Moments Photography",
    description:
      "Eternal Moments Photography is a modern photography studio specializing in capturing life's most precious moments with a creative and personalized touch...",
    imageUrl: Img, 
    packages: [
      {
        name: "Wedding Package",
        price: "$1500",
        features: ["Full-day coverage", "100 Edited Photos", "2 Locations"],
      },
      {
        name: "Event Package",
        price: "$500",
        features: ["2-hour session", "20 Edited Photos", "1 Location"],
      },
    ],
    reviews: [
      { author: "Alice", rating: 5, comment: "Amazing experience!" },
      { author: "Bob", rating: 4, comment: "Great photos, but a bit pricey." },
      { author: "Alice", rating: 5, comment: "Amazing experience!" },  
    ],
    faqs: [
      {
        question: "Do you travel for shoots?",
        answer: "Yes, I am available for travel.",
      },
      {
        question: "How long does it take to get the photos?",
        answer: "Typically within 2 weeks.",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <PhotographerImage
        imageUrl={photographer.imageUrl}
        name={photographer.name}
        description={photographer.description}
      />
      <QuiltedImageList />
      <Typography sx={sectionTitleStyle}>About the Photographer</Typography>
      <Typography sx={photographerDetailsStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo nesciunt, sint asperiores voluptates tenetur consequuntur fuga qui error est facere fugit aut laborum praesentium. Voluptatem magni provident optio expedita.
      </Typography>
      <PackageTable packages={photographer.packages} />
      <ReviewSection reviews={photographer.reviews} />
      <FAQSection faqs={photographer.faqs} />
      <Footer />
    </div>
  );
};

export default PhotographerDetailsPage;
