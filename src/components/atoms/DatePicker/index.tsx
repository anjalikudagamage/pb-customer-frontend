import React, { forwardRef, useState } from "react";
import DatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Box, InputBase } from "@mui/material";
import { CalendarToday as CalendarIcon } from "@mui/icons-material";
import {
  customDateButtonStyle,
  calendarIconStyle,
  inputBaseStyle,
} from "./styles";

interface CustomDateInputProps extends React.HTMLProps<HTMLButtonElement> {
  value?: string;
}

const CustomDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const CustomDateInput = forwardRef<HTMLButtonElement, CustomDateInputProps>(
    ({ onClick }, ref) => {
      const [isClicked, setIsClicked] = useState(false);

      const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsClicked(true);
        onClick?.(event);
      };

      return (
        <Button
          ref={ref}
          onClick={handleClick}
          sx={{
            ...customDateButtonStyle,
            borderColor: isClicked ? "#ABEFC6" : "#D0D5DD",
            backgroundColor: isClicked ? "#ECFDF3" : "#ECFDF3",
          }}
        >
          <CalendarIcon sx={calendarIconStyle(isClicked)} />
          <InputBase
            placeholder="Select Date"
            value={selectedDate ? selectedDate.toLocaleDateString() : ""}
            sx={inputBaseStyle(isClicked)}
            readOnly
          />
        </Button>
      );
    }
  );

  const CustomCalendarContainer = ({
    children,
  }: {
    children: React.ReactNode;
  }) => (
    <Box sx={{ position: "relative", zIndex: 1000}}>
      <CalendarContainer>{children}</CalendarContainer>
    </Box>
  );

  return (
    <Box>
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        customInput={<CustomDateInput />}
        calendarContainer={CustomCalendarContainer}
        popperPlacement="bottom"
      />
    </Box>
  );
};

export default CustomDatePicker;
