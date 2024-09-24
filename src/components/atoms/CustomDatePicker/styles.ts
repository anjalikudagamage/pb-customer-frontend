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
  // Other input related styles below remain unchanged
  // ...
};

export const calendarIconStyle = (isClicked: boolean): SxProps => ({
  color: isClicked ? "#FF6B6B" : "#667085",  // Updated to pink
  marginRight: "8px",
  transition: "none",
});

export const inputBaseStyle = (isClicked: boolean): SxProps => ({
  color: isClicked ? "#FF6B6B" : "#344054",  // Updated to pink
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
      borderColor: "#FF6B6B",  // Updated to pink
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
    backgroundColor: state.isFocused ? "#FCE4E4" : "#ECFDF3",  // Lighter pink for focus
    color: state.isFocused ? "#FF6B6B" : "#344054",  // Updated to pink
    transition: "none",
    "&:hover": {
      backgroundColor: "#FCE4E4",  // Lighter pink for hover
      color: "#FF6B6B",  // Updated to pink
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