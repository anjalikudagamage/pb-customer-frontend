export const DateTimeMainContainer = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
};

export const DatePickerStyle = {
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

export const DatePickerErrorStyle = {
  mr: 20,
};
export const TimePickerGridStyle = {
  width: 462,
  mt: 2,
  ml: 6,
};
export const DateTimeSubmitButtonStyle = {
  width: 200,

  mt: 3,
};
