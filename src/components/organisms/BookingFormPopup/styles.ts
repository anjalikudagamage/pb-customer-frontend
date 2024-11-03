import { SxProps } from "@mui/material/styles";

export const popupContainer = (isError: boolean): SxProps => ({
  position: "fixed",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 9999,
  backgroundColor: isError ? "rgba(255, 0, 0, 0.8)" : "rgba(0, 255, 0, 0.8)",
  padding: "20px 30px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  color: "#fff",
  minWidth: "250px",
});

export const popupMessage: SxProps = {
  fontSize: "1.1rem",
  fontWeight: 500,
};

export const closeButton: SxProps = {
  marginTop: "10px",
  backgroundColor: "white",
  color: "#333",
  "&:hover": {
    backgroundColor: "#ccc",
  },
};
