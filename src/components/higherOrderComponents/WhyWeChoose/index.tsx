import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image1 from "../../../assets/images/ImageCarousel/image1.jpg";
import image2 from "../../../assets/images/ImageCarousel/image2.jpg";
import { useStyles } from "./styles";

const slides = [
  {
    title: "Why choose us?",
    description: "As a photographer, your focus should be on capturing beautiful moments, not on managing the complexities of bookings, payments, and client communication. Our website offers an all-in-one solution tailored to photographers, simplifying your business operations with an intuitive booking system, a customizable portfolio to showcase your work, and secure payment processing. Gain greater visibility, manage your client relationships seamlessly, and grow your business with data-driven insights—all while maintaining a professional online presence 24/7. Elevate your photography business with us and spend more time doing what you love: capturing stunning images.",
    imageUrl: image1,
  },
  {
    title: "Why choose us?",
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
