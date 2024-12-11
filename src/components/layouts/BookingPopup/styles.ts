import { SxProps, Theme } from "@mui/material/styles";

export const popupContainer = (_isError: boolean): SxProps<Theme> => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 9999,
  backgroundColor: _isError ? "#f44336" : "#4CAF50",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  animation: "fadeIn 0.3s ease-in-out",
  minWidth: "300px",
  textAlign: "center",
  "@keyframes fadeIn": {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
});

export const popupMessage: SxProps<Theme> = {
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "white",
  marginBottom: "10px",
};

export const closeButton: SxProps<Theme> = {
  width: "100%",
  marginTop: "10px",
  backgroundColor: "#4CAF50",
  color: "#fff",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#45a049",
  },
};
