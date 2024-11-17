import { StylesConfig } from "react-select";

interface SelectOption {
  label: string;
  value: string;
}

const commonSelectStyles: StylesConfig<SelectOption, false> = {
  control: (base, state) => ({
    ...base,
    width: "300px",
    height: "50px",
    borderRadius: "15px",
    borderColor: state.isFocused ? "#FF6B6B" : "#D0D5DD",
    boxShadow: state.isFocused ? "0 0 5px #FF6B6B" : "0 0 5px #eee",
    backgroundColor: "#FAFAFA",
    transition: "all 0.3s ease",
    "&:hover": {
      borderColor: "#FF6B6B",
    }
  }),
  menu: (base) => ({
    ...base,
    fontFamily: "'Playfair Display', serif",
    width: "300px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#FFFFFF",
    zIndex: 1000,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#FF6B6B"
      : state.isFocused
      ? "#FFB6B6"
      : "#fff",
    fontSize: "14px",
    color: "#333333",
    fontFamily: "'Roboto', sans-serif",
    padding: "10px 15px",
    fontWeight: 600,
    letterSpacing: "1px",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#FFB6B6",
      color: "#FF6B6B",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#A0A0A0",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    fontWeight: 600,
  }),
  singleValue: (base) => ({
    ...base,
    fontFamily: "'Roboto', sans-serif",
    color: "#333333",
    fontSize: "16px",
    fontWeight: "600",
  }),
};

export const packageSelectStyles: StylesConfig<SelectOption, false> = {
  ...commonSelectStyles,
};
