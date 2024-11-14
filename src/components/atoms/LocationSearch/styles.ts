import { SxProps } from "@mui/material";
import { StylesConfig } from "react-select";

interface SelectOption {
  label: string;
  value: string;
}

const commonSelectStyles: StylesConfig<SelectOption, false> = {
  control: (base) => ({
    ...base,
    width: "300px",
    height: "50px",
    borderRadius: "15px",
    borderColor: "#D0D5DD",
    backgroundColor: "rgb(236, 255, 230)",
    boxShadow: "0 0 5px #eee",
    "&:hover": {
      borderColor: "#FF6B6B",  // Updated to pink
    },
  }),
  menu: (base) => ({
    ...base,
    width: "250px",
    borderRadius: "15px",
    boxShadow: "0 0 5px #eee",
  }),
  option: (base) => ({
    ...base,
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    backgroundColor: "#ECFDF3",
    color: "#344054",
    "&:hover": {
      backgroundColor: "#FCE4E4",  // Lighter pink for hover
      color: "#FF6B6B",  // Updated to pink
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#A0A0A0",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    fontWeight: 600,
  }),
};

export const locationSelectStyles: StylesConfig<SelectOption, false> = {
  ...commonSelectStyles,
};

export const packageSelectStyles: StylesConfig<SelectOption, false> = {
  ...commonSelectStyles,
};

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
  "& .MuiOutlinedInput-root": {
    borderRadius: "15px",
    "& fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiOutlinedInput-input": {
    border: "none",
    "&:hover": {
      border: "none",
    },
    "&:focus": {
      border: "none",
    },
  },
  "& .MuiSelect-select": {
    border: "none",
    outline: "none",
    "&:hover": {
      border: "none",
      outline: "none",
    },
    "&:focus": {
      border: "none",
      outline: "none",
    },
  },
  "& .MuiSelect-icon": {
    border: "none",
    outline: "none",
  },
  "& .MuiSelect-root": {
    border: "none",
    outline: "none",
    "&:hover": {
      border: "none",
      outline: "none",
    },
    "&:focus": {
      border: "none",
      outline: "none",
    },
  },
};


export const inputBaseStyle = (isClicked: boolean): SxProps => ({
  color: isClicked ? "#FF6B6B" : "#344054",  // Updated to pink
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  fontWeight: 600,
  flexGrow: 1,
});