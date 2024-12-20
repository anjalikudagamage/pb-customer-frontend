import { SxProps, Theme } from "@mui/material";

export const backgroundImageStyle: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  position: "relative",
  padding: 0,
  margin: 0,
};

export const searchBarWrapper: SxProps<Theme> = {
  width: "90%",
  margin: "0 auto",
  padding: 0,
};

export const websiteNameStyle: SxProps<Theme> = {
  fontSize: "50px",
  color: "white",
  fontWeight: "600",
  marginBottom: "60px",
  textAlign: "center",
  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.7)",
};
