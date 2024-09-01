import { SxProps } from "@mui/system";

export const heroContainer: SxProps = {
  height: "80vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#fff",
  padding: "0 20px",
};

export const title: SxProps = {
  fontWeight: "bold",
  marginBottom: "20px",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
};

export const subtitle: SxProps = {
  maxWidth: "600px",
  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
};
