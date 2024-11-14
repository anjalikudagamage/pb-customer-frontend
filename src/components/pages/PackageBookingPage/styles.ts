import { SxProps } from "@mui/material/styles";

export const formContainer: SxProps = {
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  padding: "50px",
  borderRadius: "10px",
  maxWidth: "700px",
  width: "100%",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)", // Added shadow for a more elevated look
};

export const formTitle: SxProps = {
  textAlign: "center",
  color: "#fff",
  marginBottom: "20px",
  fontSize: "2rem", // Increased font size for emphasis
  fontWeight: 600, // Added weight for emphasis
};

export const section: SxProps = {
  marginBottom: "30px", // Increased margin for better spacing
};

export const sectionTitle: SxProps = {
  color: "#fff",
  marginBottom: "15px", // Slightly increased margin for better spacing
  fontSize: "1.25rem", // Adjusted font size for better readability
  fontWeight: 500, // Slightly lighter font weight for subtler emphasis
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
  marginBottom: "15px", // Added margin for better field spacing
};

export const fareLabel: SxProps = {
  color: "#00bcd4",
  fontSize: "1rem", // Increased font size for better clarity
};

export const buttonContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "30px", // Increased margin for better button spacing
};

export const submitButton: SxProps = {
  backgroundColor: "#FF6B6B",
  color: "#fff",
  maxWidth: "180px",
  padding: "10px 32px", // Increased padding for better button appearance
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
  padding: "8px 24px", // Slightly adjusted padding for consistency
  borderRadius: "8px", // More rounded button
  "&:hover": {
    borderColor: "#00e5ff",
    color: "#00e5ff",
  },
};
