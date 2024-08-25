import React from "react";
import PackagesTable from "../../higherOrderComponents/PackageTable";
import ReviewsSection from "../../higherOrderComponents/ReviewSection";
import FAQSection from "../../higherOrderComponents/FAQSection";
import QuiltedImageList from "../../higherOrderComponents/PhotographerGallery";

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
      <h1>{photographer.name}</h1>
      <QuiltedImageList/>
      <h2>About the Photographer</h2>
      <p>{photographer.details}</p>
      <PackagesTable packages={photographer.packages} />
      <ReviewsSection reviews={photographer.reviews} />
      <FAQSection faqs={photographer.faqs} />
    </div>
  );
};

export default PhotographerDetailsPage;
