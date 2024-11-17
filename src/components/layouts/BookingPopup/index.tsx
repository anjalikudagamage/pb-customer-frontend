import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { popupContainer, popupMessage, closeButton } from "./styles";

interface BookingPopupProps {
  message: string;
  onClose: () => void;
  isError?: boolean;
}

const BookingPopup: React.FC<BookingPopupProps> = ({
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
      <Typography sx={popupMessage}>{isError ? "ERROR" : "SUCCESS"}</Typography>
      <Typography sx={popupMessage}>{message}</Typography>
      <Button onClick={onClose} sx={closeButton}>
        Close
      </Button>
    </Box>
  );
};

export default BookingPopup;
