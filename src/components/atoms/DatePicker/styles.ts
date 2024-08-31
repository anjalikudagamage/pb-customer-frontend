import { SxProps } from "@mui/material";
import { StylesConfig } from "react-select";

const commonSelectStyles: StylesConfig<any, false> = {
  control: (base) => ({
    ...base,
    width: "300px",
    height: "50px",
    borderRadius: "15px",
    borderColor: "#D0D5DD",
    backgroundColor: "rgb(236, 255, 230)",
    boxShadow: "0 0 5px #eee",
    "&:hover": {
      borderColor: "#ABEFC6",
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
    "&:hover": {
      backgroundColor: "#ECFDF3",
      color: "#17B26A",
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

export const locationSelectStyles: StylesConfig<any, false> = {
  ...commonSelectStyles,
};

export const packageSelectStyles: StylesConfig<any, false> = {
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
    "&.MuiOutlinedInput-notchedOutline": {
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

export const calendarIconStyle = (isClicked: boolean): SxProps => ({
  color: isClicked ? "#17B26A" : "#667085",
  marginRight: "8px",
});

export const inputBaseStyle = (isClicked: boolean): SxProps => ({
  color: isClicked ? "#17B26A" : "#344054",
  fontFamily: "Arial, sans-serif",
  fontSize: "14px",
  fontWeight: 600,
  flexGrow: 1,
});
