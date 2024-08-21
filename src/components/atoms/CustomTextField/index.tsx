import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { textFieldStyle } from "./styles";

interface ITextFieldProps {
  placeholder: string;
}

const CustomTextField: React.FC<ITextFieldProps> = ({ placeholder }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder={placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LocationOnIcon />
          </InputAdornment>
        ),
      }}
      sx={textFieldStyle}
    />
  );
};

export default CustomTextField;
