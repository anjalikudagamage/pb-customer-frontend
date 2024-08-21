import { SxProps, Theme } from "@mui/material/styles";

export const GridContainer: SxProps<Theme> = {
  padding: (theme: Theme) => theme.spacing(2),
  backgroundColor: "white",
  marginBottom: "20px",
};

export const GridItem: SxProps<Theme> = {
  textAlign: "center",
};

export const imageStyle: React.CSSProperties = {
  width: "150px",
  height: "150px",
  marginBottom: "8px",
};

export const textStyle: SxProps<Theme> = {
  fontSize: "1.5rem",
  color: "gray",
};
