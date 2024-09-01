import { SxProps, Theme } from "@mui/material/styles";

export const cardContainer: SxProps<Theme> = {
  display: "flex",
  border: "1px solid #ddd",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
  width: "95%",
  maxWidth: "800px",
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
  fontWeight: "bold",
  marginBottom: 0.5,
};

export const locationStyle: SxProps<Theme> = {
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
  fontSize: "1.5rem",
  marginBottom: 1, 
};

export const ratingStyle: SxProps<Theme> = {
  backgroundColor: "#1976d2",
  color: "#fff",
  padding: 0.5,
  borderRadius: "4px",
  display: "flex",
  marginBottom: 1,
};

export const buttonStyle: SxProps<Theme> = {
  backgroundColor: "#1976d2",
  color: "#fff",
  marginTop: 1, 
  padding: "0.5rem 1rem",
  
  "&:hover": {
    backgroundColor: "#115293",
  },
};
