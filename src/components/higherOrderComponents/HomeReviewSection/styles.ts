import { SxProps, Theme } from "@mui/material";

export const containerStyles: SxProps<Theme> = {
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  textAlign: "center",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

export const logoStyles: React.CSSProperties = {
  maxHeight: "40px",
  marginBottom: "20px",
};

export const reviewTextStyles: SxProps<Theme> = {
  fontStyle: "italic",
  marginBottom: "20px",
};

export const reviewerContainerStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
};

export const avatarStyles: SxProps<Theme> = {
  width: 56,
  height: 56,
};

export const reviewerNameStyles: SxProps<Theme> = {
  fontWeight: "bold",
};

export const reviewerRoleStyles: SxProps<Theme> = {};

export const reviewSectionContainerStyles: SxProps<Theme> = {
  padding: "100px 50px",
  backgroundColor: "#fab6b6",
  textAlign: "center",
  borderRadius: "10px",
  mb: 5,
};

export const sectionTitleStyles: SxProps<Theme> = {
  color: "#fff",
  fontWeight: "bold",
  marginBottom: "10px",
};

export const sectionSubtitleStyles: SxProps<Theme> = {
  color: "#fff",
  marginBottom: "50px",
};

export const reviewsContainerStyles: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  marginBottom: "50px",
};
