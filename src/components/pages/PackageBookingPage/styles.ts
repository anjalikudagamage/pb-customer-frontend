import { SxProps } from "@mui/material/styles";

export const formContainer: SxProps = {
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  padding: "50px",
  borderRadius: "10px",
  maxWidth: "700px",
  width: "100%",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
};

export const formTitle: SxProps = {
  textAlign: "center",
  color: "#fff",
  marginBottom: "20px",
  fontSize: "2rem",
  fontWeight: 600,
};

export const section: SxProps = {
  marginBottom: "30px",
};

export const sectionTitle: SxProps = {
  color: "#fff",
  marginBottom: "15px",
  fontSize: "1.25rem",
  fontWeight: 500,
};

export const textField: SxProps = {
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "#00e5ff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00e5ff",
    },
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#00e5ff",
  },
  "& input": {
    color: "white",
  },
  marginBottom: "15px",
};

export const fareLabel: SxProps = {
  color: "#00bcd4",
  fontSize: "1rem",
};

export const buttonContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "30px",
};

export const submitButton: SxProps = {
  backgroundColor: "#FF6B6B",
  color: "#fff",
  maxWidth: "180px",
  padding: "10px 32px",
  backgroundImage: "linear-gradient(90deg, #FF6B6B, #FF6B6B)",
  textAlign: "center",
  textTransform: "uppercase",
  transition: "0.5s",
  backgroundSize: "200% auto",
  borderRadius: "10px",
  "&:hover": {
    backgroundPosition: "right center",
    color: "#fff",
    textDecoration: "none",
  },
};

export const clearButton: SxProps = {
  borderColor: "white",
  color: "white",
  padding: "8px 24px",
  borderRadius: "8px",
  "&:hover": {
    borderColor: "#00e5ff",
    color: "#00e5ff",
  },
};
