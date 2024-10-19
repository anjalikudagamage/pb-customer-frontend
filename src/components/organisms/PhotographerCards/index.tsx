import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import _ from "lodash";
import PhotographerCard from "../../molecules/PhotographerCard";
import { photographerCardListContainer } from "./styles";
import Image1 from "../../../assets/images/photographerCard/image1.jpg";

const photographerData = [
  {
    imageUrl: Image1,
    photographerName: "John Doe",
    studioName: "Doe Studios",
    packageType: "Wedding Package",
    features: ["10 Edited photoes", "10 hours", "2 locations"],
    price: "$2000",
    availability: "Available",
    rating: "4.9",
    reviews: "24",
  },
  {
    imageUrl: Image1,
    photographerName: "Jane Smith",
    studioName: "Smith Photography",
    packageType: "Engagement Package",
    features: ["10 Edited photoes", "10 hours", "2 locations"],
    price: "$1500",
    availability: "Available",
    rating: "4.7",
    reviews: "15",
  },
];

const PhotographerCardList: React.FC = () => {
  const location = useLocation();
  const [filteredData, setFilteredData] = useState(photographerData);

  // Extract package query parameter
  const query = new URLSearchParams(location.search);
  const selectedPackage = query.get("package");

  const handleSearch = _.debounce((packageType: string | null) => {
    if (packageType) {
      const filtered = photographerData.filter(
        (photographer) =>
          photographer.packageType.toLowerCase().includes(packageType.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(photographerData);
    }
  }, 300); // 300ms debounce

  useEffect(() => {
    handleSearch(selectedPackage);
  }, [selectedPackage]);

  return (
    <Box sx={photographerCardListContainer}>
      {filteredData.map((photographer, index) => (
        <PhotographerCard
          key={index}
          imageUrl={photographer.imageUrl}
          photographerName={photographer.photographerName}
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

