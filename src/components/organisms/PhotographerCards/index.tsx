import React from "react";
import { Box } from "@mui/material";
import Image1 from "../../../assets/images/photographerCard/image1.jpg";
import PhotographerCard from "../../molecules/PhotographerCard";

const photographerData = [
  {
    imageUrl: Image1,
    photographerName: "John Doe",
    studioName: "Doe Studios",
    location: "New York, NY",
    packageType: "Wedding Package",
    features: ["10 hours coverage", "2 photographers", "Photo album"],
    price: "$2000",
    availability: "Available",
    rating: "4.9",
    reviews: "24",
  },
  {
    imageUrl: Image1,
    photographerName: "Jane Smith",
    studioName: "Smith Photography",
    location: "Los Angeles, CA",
    packageType: "Engagement Package",
    features: ["5 hours coverage", "1 photographer", "Digital copies"],
    price: "$1500",
    availability: "Available",
    rating: "4.7",
    reviews: "15",
  },
  {
    imageUrl: Image1,
    photographerName: "Jane Smith",
    studioName: "Smith Photography",
    location: "Los Angeles, CA",
    packageType: "Engagement Package",
    features: ["5 hours coverage", "1 photographer", "Digital copies"],
    price: "$1500",
    availability: "Available",
    rating: "4.7",
    reviews: "15",
  },
];

const PhotographerCardList: React.FC = () => {
  return (
    <Box>
      {photographerData.map((photographer, index) => (
        <PhotographerCard
          key={index}
          imageUrl={photographer.imageUrl}
          photographerName={photographer.photographerName}
          studioName={photographer.studioName}
          location={photographer.location}
          packageType={photographer.packageType}
          features={photographer.features}
          price={photographer.price}
          availability={photographer.availability}
          rating={photographer.rating}
          reviews={photographer.reviews}
        />
      ))}
    </Box>
  );
};

export default PhotographerCardList;
