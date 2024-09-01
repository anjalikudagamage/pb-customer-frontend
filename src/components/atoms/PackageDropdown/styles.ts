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
      borderColor: "#ABEFC6",
    },
  }),
  menu: (base) => ({
    ...base,
    width: "300px",
    borderRadius: "15px",
    boxShadow: "0 0 5px #eee",
  }),
  option: (base) => ({
    ...base,
    backgroundColor: "rgb(236, 255, 230)",
    "&:hover": {
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

export const packageSelectStyles: StylesConfig<SelectOption, false> = {
  ...commonSelectStyles,
};
