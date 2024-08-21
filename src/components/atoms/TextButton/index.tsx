import React from "react";
import Button from "@mui/material/Button";
import { ButtonStyle } from "./styles";

interface IButtonProps {
  text: string;
}

const TextButton: React.FC<IButtonProps> = ({ text }) => {
  return (
    <Button
      fullWidth
      variant="contained"
      color="primary"
      sx={ButtonStyle}
    >
      {text}
    </Button>
  );
};

export default TextButton;
