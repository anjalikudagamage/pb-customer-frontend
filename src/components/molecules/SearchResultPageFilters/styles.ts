import { SxProps, Theme } from "@mui/material/styles";

export const outerContainerStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "flex-end", 
  paddingTop: "16px", 
};

export const filterSidebarContainerStyle: SxProps<Theme> = {
  padding: "16px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  backgroundColor: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  width: "300px",
  height: "620px",
};

export const sectionTitleStyle: SxProps<Theme> = {
  fontWeight: "bold",
  marginBottom: "16px",
};

export const sectionStyle: SxProps<Theme> = {
  marginBottom: "24px",
};

export const subsectionTitleStyle: SxProps<Theme> = {
  fontWeight: "bold",
  marginBottom: "8px",
};

export const subsectionContentStyle: SxProps<Theme> = {
  marginBottom: "8px",
};

export const sliderStyle: SxProps<Theme> = {
  color: "#1976d2",
};
