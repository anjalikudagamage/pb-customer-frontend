import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import image1 from "../../../assets/images/ImageCarousel/image1.jpg";
import image2 from "../../../assets/images/ImageCarousel/image.jpg";
import { useStyles } from "./styles";

const slides = [
  {
    title: "Why choose us?",
    description:
      "Choosing the right photographer is essential for capturing your most cherished moments. Our platform connects you with the top photographers in Sri Lanka, handpicked based on their expertise, creativity, and professionalism. Whether it's for weddings, events, or personal projects, we ensure you have access to the best talent in the industry. With a variety of customizable packages, you'll find the perfect fit for your needs and budget. From candid moments to artistic shots, our photographers are committed to delivering stunning images that you'll treasure for a lifetime.",
    imageUrl: image1,
  },
  {
    title: "Why choose us?",
    description:
      "Stand out from the competition and expand your reach with our platform designed to showcase the best photographers in Sri Lanka. We provide you with the tools to highlight your portfolio, attract clients, and grow your business. With our focus on connecting customers to the right professionals, you can market your unique style and skills to a wide audience. Offering flexible and customizable packages ensures you meet the diverse needs of your clients, helping you build a solid reputation and establish long-term relationships. Join us and elevate your brand by being part of Sri Lanka’s most trusted photography community.",
    imageUrl: image2,
  },
];

const WhyWeChoose: React.FC = () => {
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

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

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

export default WhyWeChoose;
