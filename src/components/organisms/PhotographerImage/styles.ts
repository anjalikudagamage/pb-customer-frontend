import { SxProps } from "@mui/system";

export const heroContainer: SxProps = {
  width: "100vw",
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#fff",
  padding: 0,
  position: "relative",
};

export const title: SxProps = {
  fontWeight: "bold",
  marginBottom: "20px",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  fontSize: "2.5rem",
  textTransform: "uppercase",
};

export const subtitle: SxProps = {
  maxWidth: "1000px",
  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
};
