// styles.ts
import { SxProps, Theme } from "@mui/material/styles";

export const buttonBaseStyle: SxProps<Theme> = {
  borderColor: "#D0D5DD",
  backgroundColor: "white",
  display: "flex",
  alignItems: "center",
  padding: "8px 16px",
  borderRadius: "20px", // Make the button more round
  borderWidth: "1px",
  borderStyle: "solid",
};

export const clickedButtonStyle: SxProps<Theme> = {
  borderColor: "#ABEFC6",
  backgroundColor: "#ECFDF3",
};

export const iconBaseStyle: SxProps<Theme> = {
  color: "#667085",
  marginRight: "8px",
};

export const clickedIconStyle: SxProps<Theme> = {
  color: "#17B26A",
};

export const inputBaseStyle: SxProps<Theme> = {
  color: "#344054",
  fontWeight: 600,
  flexGrow: 1,
};

export const clickedInputStyle: SxProps<Theme> = {
  color: "#17B26A",
};

export const calendarContainerStyle: SxProps<Theme> = {
  position: "relative",
  zIndex: 1000,
};
