import React, { useState } from "react";
import FAQSection from "../../organisms/FAQSection";
import QuiltedImageList from "../../organisms/PhotographerGallery";
import PackageTable from "../../organisms/PackageTable";
import ReviewSection from "../../organisms/ReviewSection";
import Navbar from "../../organisms/Navbar";
import { Typography, Button } from "@mui/material";
import {
  sectionTitleStyle,
  photographerDetailsStyle,
} from "./styles";
import PhotographerImage from "../../organisms/PhotographerImage";
import Footer from "../../atoms/Footer";
import Img1 from "../../../assets/images/photographer/image1.jpg";
import Img2 from "../../../assets/images/photographer/image2.jpg";
import Img3 from "../../../assets/images/photographer/image3.jpg";

const PhotographerDetailsPage: React.FC = () => {
  const [currentPhotographerIndex, setCurrentPhotographerIndex] = useState(0);

  const photographers = [
    {
      photographerName: "Eternal Moments Photography",
      description:
        "Eternal Moments Photography is a modern photography studio specializing in capturing life's most precious moments with a creative and personalized touch...",
      imageUrl: Img1, // Dynamically passed image path
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
    },
    {
      photographerName: "Timeless Frames Photography",
      description:
        "Timeless Frames Photography focuses on capturing candid moments that last a lifetime. We specialize in portrait and event photography.",
      imageUrl: Img2,
      packages: [
        {
          name: "Portrait Package",
          price: "$800",
          features: ["3-hour session", "50 Edited Photos", "Outdoor/Studio"],
        },
        {
          name: "Event Package",
          price: "$700",
          features: ["5-hour session", "75 Edited Photos", "Unlimited Locations"],
        },
      ],
      reviews: [
        { author: "David", rating: 5, comment: "Professional and friendly!" },
        { author: "Sarah", rating: 4, comment: "Good service, slightly overpriced." },
      ],
      faqs: [
        {
          question: "Do you offer discounts for multiple events?",
          answer: "Yes, we offer discounted rates for booking multiple sessions.",
        },
        {
          question: "Do you provide a photo album?",
          answer: "Yes, we offer custom-designed photo albums at an additional cost.",
        },
      ],
    },
    {
      photographerName: "Moments in Focus Photography",
      description:
        "Moments in Focus Photography delivers top-quality service with a creative flair. We specialize in family and commercial photography.",
      imageUrl: Img3,
      packages: [
        {
          name: "Family Portrait Package",
          price: "$1000",
          features: ["Full-day session", "75 Edited Photos", "1 Studio and 1 Outdoor Location"],
        },
        {
          name: "Commercial Package",
          price: "$2000",
          features: ["Full-day shoot", "100 Edited Photos", "3 Locations"],
        },
      ],
      reviews: [
        { author: "Emily", rating: 5, comment: "Exceptional service!" },
        { author: "Michael", rating: 4, comment: "Great photos, quick turnaround." },
      ],
      faqs: [
        {
          question: "Do you provide raw photos?",
          answer: "No, we only provide edited photos for professional reasons.",
        },
        {
          question: "Can you schedule shoots during weekends?",
          answer: "Yes, we are available for weekend shoots with prior booking.",
        },
      ],
    },
  ];

  const photographer = photographers[currentPhotographerIndex];

  const handleNextPhotographer = () => {
    setCurrentPhotographerIndex((prevIndex) => (prevIndex + 1) % photographers.length);
  };

  return (
    <div>
      <Navbar />
      <PhotographerImage
        imageUrl={photographer.imageUrl}
        photographerName={photographer.photographerName}
        description={photographer.description}
      />
      <QuiltedImageList />
      <Typography sx={sectionTitleStyle}>About the Photographer</Typography>
      <Typography sx={photographerDetailsStyle}>
        {photographer.description}
      </Typography>
      <PackageTable packages={photographer.packages} />
      <ReviewSection reviews={photographer.reviews} />
      <FAQSection faqs={photographer.faqs} />
      <Footer />
      
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <Button variant="contained" onClick={handleNextPhotographer}>
          Next Photographer
        </Button>
      </div>
    </div>
  );
};

export default PhotographerDetailsPage;
