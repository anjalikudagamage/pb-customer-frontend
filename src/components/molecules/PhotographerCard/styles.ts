import { SxProps, Theme } from "@mui/material/styles";

export const cardContainer: SxProps<Theme> = {
  display: "flex",
  border: "1px solid #ddd",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
  width: "85%",
  maxWidth: "600px",
  padding: 2,
  marginY: 2,
};

export const imageStyle: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
};

export const contentStyle: SxProps<Theme> = {
  paddingLeft: 4,
};

export const titleStyle: SxProps<Theme> = {
  color: "primary.main",
  marginBottom: 1,
};

export const packageStyle: SxProps<Theme> = {
  fontWeight: "bold",
  marginBottom: 1,
};

export const featuresContainerStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  marginBottom: 1,
};

export const featureStyle: SxProps<Theme> = {
  display: "inline-block",
  marginBottom: 0.5,
  color: "#2e7d32",
};

export const availabilityStyle: SxProps<Theme> = {
  color: "red",
  fontWeight: "bold",
};

export const priceContainerStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-start",
  paddingRight: 6,
};

export const priceStyle: SxProps<Theme> = {
  fontWeight: "bold",
  fontSize: "1.2rem",
  color: "primary.main",
  marginBottom: 1,
};

export const ratingStyle: SxProps<Theme> = {
  color: "#fff",
  padding: 0.5,
  display: "flex",
  marginBottom: 1,
  backgroundColor: "#FF6B6B",
  maxWidth: "180px",
  backgroundImage: "linear-gradient(90deg, #FF6B6B, #FF6B6B)",
  textAlign: "center",
  textTransform: "uppercase",
  transition: "0.5s",
  backgroundSize: "200% auto",
  borderRadius: "10px",
  "&:hover": {
    backgroundPosition: "right center",
    color: "#fff",
    textDecoration: "none",
  },
};

export const buttonStyle: SxProps<Theme> = {
  backgroundColor: "#1976d2",
  color: "#fff",
  marginTop: 1,
  padding: "0.5rem 1rem",

  backgroundImage: "linear-gradient(90deg, #FF6B6B, #FF6B6B)",

  textAlign: "center",
  textTransform: "uppercase",
  transition: "0.5s",
  backgroundSize: "200% auto",
  boxShadow: "0 0 8px #eee",
  borderRadius: "10px",
  "&:hover": {
    backgroundPosition: "right center",
    color: "#fff",
    textDecoration: "none",
  },
};
