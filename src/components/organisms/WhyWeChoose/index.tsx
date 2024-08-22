import { FC, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  carouselContainer,
  imageWrapper,
  carouselImage,
  titleContainer,
  titleStyle,
  textContainer,
  textStyle,
  arrowButton,
  topicContainer,
  topicStyle,
} from "./styles";

interface ICarouselItem {
  image: string;
  title: string;
  text: string;
}

interface IImageCarouselProps {
  items: ICarouselItem[];
  topic: string;
}

const WhyWeChoose: FC<IImageCarouselProps> = ({ items, topic }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        setIsTransitioning(false);
      }, 1000); // transition duration should match the CSS transition
    }, 4000);
    return () => clearInterval(intervalId);
  }, [items.length]);

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 1000);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <Box sx={carouselContainer(isSmallScreen)}>
          <Box sx={topicContainer(isSmallScreen)}>
            <Typography variant="h5" sx={topicStyle}>
              {topic}
            </Typography>
          </Box>
          <Box sx={imageWrapper(isTransitioning)}>
            <Box
              component="img"
              src={items[currentIndex].image}
              alt="Carousel"
              sx={carouselImage}
            />
          </Box>
          <Box sx={titleContainer(isSmallScreen)}>
            <Typography variant="h4" sx={titleStyle}>
              {items[currentIndex].title}
            </Typography>
          </Box>
          <Box sx={textContainer(isSmallScreen)}>
            <Typography variant="body1" sx={textStyle}>
              {items[currentIndex].text}
            </Typography>
          </Box>
          <ArrowBackIosIcon
            sx={arrowButton("left")}
            onClick={handlePrev}
          />
          <ArrowForwardIosIcon
            sx={arrowButton("right")}
            onClick={handleNext}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default WhyWeChoose;
