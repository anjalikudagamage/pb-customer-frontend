import { SxProps, Theme } from "@mui/material";

export const textFieldStyle: SxProps<Theme> = {
  width: "325px",
  mt: 1,
  border: "none",
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgb(236, 255, 230)",
    borderRadius: "15px",
    boxShadow: "0 0 5px #eee",
    border: "none",
    "&:hover": {
      border: "none",
      boxShadow: "none",
      outline: "none",
    },
    "&.Mui-focused": {
      border: "none",
      boxShadow: "none",
      outline: "none",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
    boxShadow: "0 0 5px #eee",
  },
};
