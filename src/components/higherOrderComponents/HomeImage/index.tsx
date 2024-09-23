import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SearchBar from "../../molecules/SearchBar";
import image1 from "../../../assets/images/HomeImage/image1.jpg";
import image2 from "../../../assets/images/HomeImage/image2.jpg";
import image3 from "../../../assets/images/HomeImage/image3.jpg";
import {
  backgroundImageStyle,
  searchBarWrapper,
  websiteNameStyle,
} from "./styles";
import { Typography } from "@mui/material";

const images = [ image1, image2, image3];

const HomeImage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        ...backgroundImageStyle,
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <Box sx={searchBarWrapper}>
        <Typography variant="h4" sx={websiteNameStyle}>
          Find Your Ideal Photographer
        </Typography>
        <SearchBar />
      </Box>
    </Box>
  );
};

export default HomeImage;
