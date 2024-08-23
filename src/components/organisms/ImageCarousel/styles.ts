import { SxProps, Theme } from "@mui/material/styles";

export const carouselContainer = (isSmallScreen: boolean): SxProps<Theme> => ({
  position: "relative",
  width: "100%",
  height: isSmallScreen ? "30vw" : "10rem",
  overflow: "hidden",
});

export const carouselImage: SxProps<Theme> = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "opacity 1s ease-in-out",
};

export const textContainer = (
  isSmallScreen: boolean,
  isMediumScreen: boolean
): SxProps<Theme> => ({
  marginTop: isSmallScreen ? "1rem" : "0",
  textAlign: "center",
  width: "100%",
  padding: isSmallScreen ? "1rem" : "2rem",
  px: isSmallScreen ? "0.5rem" : isMediumScreen ? "2rem" : "12rem",
  zIndex: 2,
  boxSizing: "border-box",
  maxWidth: "80%",
  margin: "0 auto",
});

export const titleStyle: SxProps<Theme> = {
  fontWeight: 600,
  fontSize: {
    md: "50px",
    xs: "40px",
  },
  marginBottom: "0.5rem",
  textAlign: "center",
};
