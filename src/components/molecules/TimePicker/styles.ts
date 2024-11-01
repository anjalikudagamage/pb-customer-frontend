export const TimePickerMainContainer = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
};

export const TimePickerStyle = {
  width: { xs: 150, sm: 340 },
  "& .MuiOutlinedInput-root": {
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
  },
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiFormLabel-root": {
    color: "white",
  },
  "& .MuiSvgIcon-root": {
    color: "white",
  },
};

export const ErrorMessageStyle = {
  color: "red",
  marginTop: "4px",
  textAlign: "left",
};
