import { SxProps, Theme } from "@mui/material";

export const containerStyle: SxProps<Theme> = {
  display: "flex",
  height: "98vh",
  backgroundColor: "black",
  flexDirection: { xs: "column", md: "row" },
};

export const imageBoxStyle: SxProps<Theme> = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 4,
  background: "url(/path-to-your-image.jpg) no-repeat center center",
  backgroundSize: "cover",
  color: "#fff",
};

export const buttonStyle: SxProps<Theme> = {
  backgroundColor: "#FF6B6B",
  color: "#fff",
  maxWidth: "180px",
  padding: "8px 32px",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: "#FF4757",
  },
};

export const formBoxStyle: SxProps<Theme> = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: 4,
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderRadius: 2,
  margin: 4,
  backdropFilter: "blur(10px)",
};

export const titleStyle: SxProps<Theme> = {
  color: "#fff",
  mb: 4,
  fontWeight: 600,
};

export const inputFieldStyle: SxProps<Theme> = {
  marginBottom: "20px",
  borderRadius: "10px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ff5a5f",
    },
    "&:hover fieldset": {
      borderColor: "#ff7a7f",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#fff",
  },
  "& .MuiInputBase-input": {
    color: "#fff",
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#fff",
  },
};

export const signUpButtonStyle: SxProps<Theme> = {
  backgroundColor: "#FF6B6B",
  color: "#fff",
  backgroundImage:
    "linear-gradient(to right, #000000 0%, #FF4757 51%, #000000 100%)",
  padding: "12px",
  marginTop: 2,
  borderRadius: "25px",
  "&:hover": {
    backgroundColor: "#FF4757",
  },
};

export const headingStyle: SxProps<Theme> = {
  fontWeight: 700,
  mb: 2,
};

export const bodyStyle: SxProps<Theme> = {
  mb: 10,
};

export const linkStyle: SxProps<Theme> = {
  color: "#FF6B6B",
  textDecoration: "none",
  fontWeight: "bold",
  "&:hover": {
    color: "#FF4757",
  },
};
