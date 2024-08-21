import { SxProps, Theme } from "@mui/material/styles";

export const carouselContainer = (isSmallScreen: boolean): SxProps<Theme> => ({
  position: "relative",
  width: "100%",
  height: isSmallScreen ? "60vw" : "40rem",
  overflow: "hidden",
  backgroundColor: "white", // Set the background color to white
});

export const imageWrapper = (isTransitioning: boolean): SxProps<Theme> => ({
  position: "absolute",
  top: 0,
  left: isTransitioning ? "-100%" : "0",
  width: "200%", // to hold both images
  height: "100%",
  display: "flex",
  transition: "left 1s ease-in-out",
});

export const carouselImage: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export const titleContainer = (isSmallScreen: boolean): SxProps<Theme> => ({
  position: "absolute",
  top: "30%",
  left: "10%",
  transform: "translateY(-50%)",
  width: "80%",
  textAlign: "left",
  zIndex: 1,
  padding: isSmallScreen ? "0 1rem" : "0 2rem",
});

export const titleStyle: SxProps<Theme> = {
  color: "black",
  backgroundColor: "rgba(255, 255, 255, 0.7)", // transparent white
  padding: "0.5rem 1rem",
  borderRadius: "5px",
};

export const textContainer = (isSmallScreen: boolean): SxProps<Theme> => ({
  position: "absolute",
  top: "40%",
  left: "10%",
  transform: "translateY(-50%)",
  width: "80%",
  textAlign: "left",
  zIndex: 1,
  padding: isSmallScreen ? "0 1rem" : "0 2rem",
});

export const textStyle: SxProps<Theme> = {
  color: "black",
  backgroundColor: "rgba(255, 255, 255, 0.7)", // transparent white
  padding: "0.5rem 1rem",
  borderRadius: "5px",
};

export const arrowButton = (position: "left" | "right"): SxProps<Theme> => ({
  position: "absolute",
  top: "50%",
  [position]: "1rem",
  transform: "translateY(-50%)",
  zIndex: 2,
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    cursor: "pointer",
  },
});

export const topicContainer = (isSmallScreen: boolean): SxProps<Theme> => ({
  position: "absolute",
  top: "10%",
  left: "50%",
  transform: "translateX(-50%)",
  width: "80%",
  textAlign: "center",
  zIndex: 1,
  padding: isSmallScreen ? "0 1rem" : "0 2rem",
});

export const topicStyle: SxProps<Theme> = {
  color: "black",
  backgroundColor: "rgba(255, 255, 255, 0.7)", // transparent white
  padding: "0.5rem 1rem",
  borderRadius: "5px",
};
