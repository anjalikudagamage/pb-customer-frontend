import { SxProps, Theme } from "@mui/material/styles";

export const formControlStyle: SxProps<Theme> = {
  m: 1,
  width: 300,
  mt: 1,
};

export const selectStyle: SxProps<Theme> = {
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

export const menuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
      scrollbarWidth: "thin",
      scrollbarColor: "#888 #f1f1f1",
    },
  },
};

export const placeholderStyle: React.CSSProperties = {
  color: "gray",
  fontStyle: "normal",
};
