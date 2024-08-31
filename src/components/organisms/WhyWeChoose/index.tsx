import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image1 from "../../../assets/images/ImageCarousel/image1.jpg";
import image2 from "../../../assets/images/ImageCarousel/image2.jpg";
import { useStyles } from "./styles";

const slides = [
  {
    title: "Slide one",
    description: "Description by first slide",
    imageUrl: image1,
  },
  {
    title: "Slide two",
    description: "Description by second slide",
    imageUrl: image2,
  },
];

const ImageSlider: React.FC = () => {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <Box sx={classes.sliderContainer}>
      <IconButton onClick={prevSlide} sx={classes.arrowButton}>
        <ArrowBackIosIcon />
      </IconButton>
      <Box
        sx={{
          ...classes.slide,
          backgroundImage: `url(${slides[currentSlide].imageUrl})`,
        }}
      >
        <Typography variant="h4" sx={classes.title}>
          {slides[currentSlide].title}
        </Typography>
        <Typography variant="subtitle1" sx={classes.description}>
          {slides[currentSlide].description}
        </Typography>
      </Box>
      <IconButton onClick={nextSlide} sx={classes.arrowButton}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default ImageSlider;
