import { SxProps, Theme } from "@mui/material";

export const backgroundImageStyle: SxProps<Theme> = {
  width: "100vw",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const searchBarWrapper: SxProps<Theme> = {
  width: "80%",
};

export const websiteNameStyle: SxProps<Theme> = {
  fontSize: "50px",
  color: "white",
  fontWeight: "600",
  marginBottom: "60px",
  textAlign: "center",
};
