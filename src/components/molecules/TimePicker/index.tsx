import React from "react";
import { Box } from "@mui/material";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { TimePickerStyle, TimePickerMainContainer } from "./styles";

interface CustomTimePickerProps {
  label: string;
  selectedTime: Dayjs | null;
  onTimeChange: (time: Dayjs | null) => void;
}

const CustomTimePicker: React.FC<CustomTimePickerProps> = ({
  label,
  selectedTime,
  onTimeChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={TimePickerMainContainer}>
        <TimePicker
          label={label}
          value={selectedTime}
          onChange={(newValue) => onTimeChange(newValue)}
          ampm
          sx={TimePickerStyle}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default CustomTimePicker;
