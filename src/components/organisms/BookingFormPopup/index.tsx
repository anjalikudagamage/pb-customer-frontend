import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { popupContainer, popupMessage, closeButton } from "./styles";

interface PopupMessageProps {
  message: string;
  onClose: () => void;
  isError?: boolean;
}

const PopupMessage: React.FC<PopupMessageProps> = ({
  message,
  onClose,
  isError = false,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <Box sx={popupContainer(isError)}>
      <Typography sx={popupMessage}>{message}</Typography>
      <Button onClick={onClose} sx={closeButton}>
        Close
      </Button>
    </Box>
  );
};

export default PopupMessage;
