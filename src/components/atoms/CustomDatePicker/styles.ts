export const DateTimeMainContainer = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
};

export const DatePickerStyle = {
  width: { xs: 150, sm: 300 },
  "& .MuiOutlinedInput-root": {
    color: "#344054",
    backgroundColor: "rgb(236, 255, 230)",
    borderRadius: "15px",
    height: "50px",
    boxShadow: "0 0 5px #eee",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#D0D5DD",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FF6B6B",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FF6B6B",
    },
  },
  "& .MuiInputBase-input": {
    color: "#344054",
    padding: "8px",
    fontSize: "14px",
    fontWeight: 600,
    "&::placeholder": {
      fontSize: "12px",
      fontWeight: 700,
      color: "#5A5A5A",
    },
  },
  "& .MuiFormLabel-root": {
    color: "#A0A0A0",
  },
  "& .MuiSvgIcon-root": {
    color: "#667085",
    marginRight: "8px",
  },
};
