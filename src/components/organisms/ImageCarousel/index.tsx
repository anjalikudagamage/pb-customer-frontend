import { FC, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  carouselContainer,
  carouselImage,
  textContainer,
  fullContainer,
} from "./styles";
import { Typography, SxProps, Theme } from "@mui/material";

interface ImageCarouselProps {
  images: string[];
  title?: string;
  description?: string;
  titleStyleOverride?: SxProps<Theme>;
  descriptionStyleOverride?: SxProps<Theme>;
}

const ImageCarousel: FC<ImageCarouselProps> = ({
  images,
  title,
  description,
  titleStyleOverride,
  descriptionStyleOverride,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <Box sx={fullContainer}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Box sx={carouselContainer(isSmallScreen)}>
            <Box
              component="img"
              src={images[currentIndex]}
              alt="Carousel"
              sx={carouselImage}
            />
          </Box>
          <Box sx={textContainer(isSmallScreen, isMediumScreen)}>
            {title && (
              <Typography variant="h5" sx={{ ...titleStyleOverride }}>
                {title}
              </Typography>
            )}
            {description && (
              <Typography variant="body1" sx={{ ...descriptionStyleOverride }}>
                {description}
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageCarousel;
