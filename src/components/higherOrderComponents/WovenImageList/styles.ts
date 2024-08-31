import { SxProps, Theme } from "@mui/material/styles";

export const containerStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "97%",
  height: "100%",
  padding: "20px",
  backgroundColor: "white",
};

export const topicStyles: SxProps<Theme> = {
  color: "#1A4870",
  fontSize: "40px",
  fontWeight: "600",
  marginBottom: "25px",
  marginTop: "50px",
};

export const paragraphStyles: SxProps<Theme> = {
  color: "gray",
  fontSize: "18px",
  lineHeight: "1.6",
  textAlign: "center",
  marginBottom: "26px",
  maxWidth: "800px",
};

export const imageListStyles: SxProps<Theme> = {
  width: 1000,
  height: 3000,
};

export const imageListItemBoxStyles: SxProps<Theme> = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};