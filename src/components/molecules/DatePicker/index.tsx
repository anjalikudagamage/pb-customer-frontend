import React from "react";
import { Box } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useFormik } from "formik";
import * as Yup from "yup";

import { DatePickerStyle, DateTimeMainContainer } from "./styles";

interface CustomDatePickerProps {
  label: string;
  selectedDate: Dayjs | null;
  onDateChange: (date: Dayjs | null) => void;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label,
  selectedDate,
  onDateChange,
}) => {
  const currentDate = dayjs();

  const formik = useFormik({
    initialValues: {
      selectedDate: selectedDate,
    },
    validationSchema: Yup.object({
      selectedDate: Yup.date()
        .nullable()
        .required("Please select your reservation date.")
        .min(currentDate, "Date cannot be in the past."),
    }),
    onSubmit: (values) => {
      onDateChange(values.selectedDate); // Pass the selected date back to parent component
    },
  });

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={DateTimeMainContainer}>
        <form onSubmit={formik.handleSubmit} style={{ textAlign: "center" }}>
          <DatePicker
            label={label}
            value={selectedDate}
            onChange={(newValue) => onDateChange(newValue)}
            minDate={currentDate}
            sx={DatePickerStyle}
          />
        </form>
      </Box>
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
