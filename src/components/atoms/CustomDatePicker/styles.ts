import { SxProps } from "@mui/material";
import { StylesConfig } from "react-select";

interface SelectOption {
  label: string;
  value: string;
}

export const customDateButtonStyle: SxProps = {
  display: "flex",
  alignItems: "center",
  padding: "8px 16px",
  borderWidth: "1px",
  borderStyle: "solid",
  width: "300px",
  backgroundColor: "rgb(236, 255, 230)",
  borderRadius: "15px",
  boxShadow: "0 0 5px #eee",
  transition: "none",
  "&:hover": {
    backgroundColor: "rgb(236, 255, 230)",
    transition: "none",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    "& fieldset": {
      border: "none",
      transition: "none",
    },
    "&:hover fieldset": {
      border: "none",
      transition: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
      transition: "none",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
    transition: "none",
  },
  "& .MuiOutlinedInput-input": {
    border: "none",
    transition: "none",
    "&:hover": {
      border: "none",
      transition: "none",
    },
    "&:focus": {
      border: "none",
      transition: "none",
    },
  },
  "& .MuiSelect-select": {
    border: "none",
    outline: "none",
    transition: "none",
    "&:hover": {
      border: "none",
      outline: "none",
      transition: "none",
    },
    "&:focus": {
      border: "none",
      outline: "none",
      transition: "none",
    },
  },
  "& .MuiSelect-icon": {
    border: "none",
    outline: "none",
    transition: "none",
  },
  "& .MuiSelect-root": {
    border: "none",
    outline: "none",
    transition: "none",
    "&:hover": {
      border: "none",
      outline: "none",
      transition: "none",
    },
    "&:focus": {
      border: "none",
      outline: "none",
      transition: "none",
    },
  },
};

export const calendarIconStyle = (isClicked: boolean): SxProps => ({
  color: isClicked ? "#007BFF" : "#667085",
  marginRight: "8px",
  transition: "none",
});

export const inputBaseStyle = (isClicked: boolean): SxProps => ({
  color: isClicked ? "#007BFF" : "#344054",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  fontWeight: 600,
  flexGrow: 1,
  transition: "none",
});

export const customCalendarContainerStyle: SxProps = {
  position: "relative",
  zIndex: 1000,
  width: "400px",
  transition: "none",
};

// Apply the specific type for the select component
export const locationSelectStyles: StylesConfig<SelectOption, false> = {
  control: (base) => ({
    ...base,
    width: "300px",
    height: "50px",
    borderRadius: "15px",
    borderColor: "#D0D5DD",
    backgroundColor: "rgb(236, 255, 230)",
    boxShadow: "0 0 5px #eee",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    transition: "none",
    "&:hover": {
      borderColor: "#ABEFC6",
      transition: "none",
    },
  }),
  menu: (base) => ({
    ...base,
    width: "300px",
    borderRadius: "15px",
    boxShadow: "0 0 5px #eee",
    backgroundColor: "rgb(236, 255, 230)",
    transition: "none",
  }),
  option: (base, state) => ({
    ...base,
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    backgroundColor: state.isFocused ? "#ECFDF3" : "#ECFDF3",
    color: state.isFocused ? "#17B26A" : "#344054",
    transition: "none",
    "&:hover": {
      backgroundColor: "#ECFDF3",
      color: "#17B26A",
      transition: "none",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#A0A0A0",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    transition: "none",
  }),
};

export const customCalendarContainerStyle: SxProps = {
  position: "relative",
  zIndex: 1000,
  width: "500px", // Increase width as needed
  transition: "none",
};
