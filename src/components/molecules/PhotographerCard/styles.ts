import { SxProps, Theme } from "@mui/material/styles";

export const cardContainer: SxProps<Theme> = {
  display: "flex",
  border: "1px solid #ddd",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fdfdfd",
  width: "90%",
  maxWidth: "650px",
  padding: 2,
  marginY: 3,
};

export const imageStyle: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "12px",
};

export const contentStyle: SxProps<Theme> = {
  paddingLeft: 3,
};

export const titleStyle: SxProps<Theme> = {
  color: "#1E88E5",
  fontWeight: "bold",
  marginBottom: 1,
  fontFamily: "'Roboto', sans-serif",
};

export const packageStyle: SxProps<Theme> = {
  fontWeight: "600",
  marginBottom: 1,
  color: "#757575",
  fontSize: "1.1rem", 
};

export const featuresContainerStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  marginBottom: 1.5,
};

export const featureStyle: SxProps<Theme> = {
  marginBottom: 0.5,
  color: "#4CAF50",
  fontFamily: "'Roboto', sans-serif",
  fontSize: "1rem", 
};

export const availabilityStyle: SxProps<Theme> = {
  color: "#D32F2F",
  fontWeight: "bold",
  fontSize: "1.1rem", 
  fontFamily: "'Roboto', sans-serif",
};

export const priceContainerStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  paddingRight: 2,
};

export const priceStyle: SxProps<Theme> = {
  fontWeight: "bold",
  fontSize: "5rem",
  color: "#1E88E5", 
  fontFamily: "'Roboto Slab', serif",
  ".MuiInputBase-input": {
    textDecoration: "none", 
    color: "#1E88E5",
  },
  ".MuiInputAdornment-root": {
    fontSize: "5rem",
    color: "#1E88E5",
  },
};


export const ratingStyle: SxProps<Theme> = {
  color: "#fff",
  padding: "0.4rem 0.6rem",
  backgroundColor: "#FF8A65",
  fontSize: "0.875rem",
  borderRadius: "8px",
  fontFamily: "'Roboto', sans-serif",
  marginBottom: 1,
};

export const buttonStyle: SxProps<Theme> = {
  backgroundImage: "linear-gradient(90deg, #FF6B6B, #FF6B6B)",
  color: "#fff",
  marginTop: 1,
  padding: "0.6rem 1.2rem",
  fontFamily: "'Roboto', sans-serif",
  fontWeight: "bold",
  borderRadius: "10px",
  "&:hover": {
    backgroundColor: "#1565C0",
    color: "#fff",
    textDecoration: "none",
  },
};
