import { SxProps, Theme } from "@mui/material";

export const searchBarContainer: SxProps<Theme> = {
  padding: "0.1px 5px",
  borderRadius: "8px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  backgroundColor: "pink",
};

export const searchBarItem: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center", 
  alignItems: "center"
};

export const searchButton: SxProps<Theme> = {
  paddingTop: 2,
  height: "54px",
};
