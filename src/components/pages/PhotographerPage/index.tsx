import React from "react";
import FAQSection from "../../higherOrderComponents/FAQSection";
import QuiltedImageList from "../../organisms/PhotographerGallery";
import PackageTable from "../../higherOrderComponents/PackageTable";
import ReviewSection from "../../higherOrderComponents/ReviewSection";
import Navbar from "../../organisms/Navbar";
import { Typography } from "@mui/material";
import {
  photographerNameStyle,
  sectionTitleStyle,
  photographerDetailsStyle,
} from "./styles";

const PhotographerDetailsPage: React.FC = () => {
  const photographer = {
    name: "John Doe",
    details:
      "John Doe is a professional photographer with over 10 years of experience...",
    packages: [
      {
        name: "Wedding Package",
        price: "$1500",
        details: "Includes full-day coverage...",
      },
      {
        name: "Portrait Package",
        price: "$500",
        details: "Includes a 2-hour session...",
      },
    ],
    reviews: [
      { author: "Alice", rating: 5, comment: "Amazing experience!" },
      { author: "Bob", rating: 4, comment: "Great photos, but a bit pricey." },
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
      <Typography sx={photographerNameStyle}>{photographer.name}</Typography>
      <QuiltedImageList />
      <Typography sx={sectionTitleStyle}>About the Photographer</Typography>
      <Typography sx={photographerDetailsStyle}>
        {photographer.details}
      </Typography>
      <PackageTable />
      <ReviewSection />
      <FAQSection />
    </div>
  );
};

export default PhotographerDetailsPage;
