import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldProps } from "formik";
import * as Yup from "yup";
import bgImg from "../../../assets/images/photographerCard/image1.jpg";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import {
  formContainer,
  formTitle,
  section,
  sectionTitle,
  textField,
  buttonContainer,
  submitButton,
  clearButton,
} from "./styles";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { submitBooking } from "../../../redux/actions/bookingAction";

const CustomErrorMessage = ({ name }: { name: string }) => (
  <ErrorMessage name={name}>
    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
  </ErrorMessage>
);

const validationSchema = Yup.object().shape({
  packageName: Yup.string().required("Package Name is required"),
  eventDate: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Date must be in the format YYYY-MM-DD")
    .required("Event Date is required"),
  eventTime: Yup.string()
    .matches(
      /^(0?[1-9]|1[0-2]):[0-5][0-9] [AP][M]$/,
      "Time must be in the format HH:MM AM/PM"
    )
    .required("Event Time is required"),
  address: Yup.string().required("Address is required"),
  fullName: Yup.string().required("Full Name is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number is not valid")
    .required("Phone Number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const PhotographerBookingForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSubmitting = useAppSelector((state) => state.photographer.isLoading);

  const initialValues = {
    packageName: "",
    eventDate: "",
    eventTime: "",
    address: "",
    fullName: "",
    phoneNumber: "",
    email: "",
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "150vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(submitBooking(values))
            .unwrap()
            .then(() => {
              alert("Booking submitted successfully!");
              resetForm();
            })
            .catch((err) => {
              alert(`Booking failed: ${err}`);
            });
        }}
      >
        {({ handleSubmit, handleReset, errors, touched, values }) => (
          <Form onSubmit={handleSubmit}>
            <Box sx={formContainer}>
              <Typography variant="h4" sx={formTitle}>
                Photographer Booking Form
              </Typography>

              <Box sx={section}>
                <Typography variant="h6" sx={sectionTitle}>
                  Booking Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field name="packageName">
                      {({ field }: FieldProps) => (
                        <Select
                          {...field}
                          displayEmpty
                          fullWidth
                          variant="outlined"
                          sx={{
                            ...textField,
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "white",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#00e5ff",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#00e5ff",
                            },
                            color: values.packageName ? "white" : "white",
                            "& .MuiSelect-select": {
                              color: values.packageName ? "white" : "white",
                            },
                            "&.Mui-focused .MuiSelect-select": {
                              color: "white",
                            },
                          }}
                        >
                          <MenuItem value="">
                            <em>Select a Package</em>
                          </MenuItem>
                          <MenuItem value="package1">Package 1</MenuItem>
                          <MenuItem value="package2">Package 2</MenuItem>
                          <MenuItem value="package3">Package 3</MenuItem>
                        </Select>
                      )}
                    </Field>
                    <CustomErrorMessage name="packageName" />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="eventDate"
                      label="Event Date"
                      placeholder="YYYY-MM-DD"
                      fullWidth
                      variant="outlined"
                      sx={textField}
                      helperText={<CustomErrorMessage name="eventDate" />}
                      error={Boolean(errors.eventDate && touched.eventDate)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="eventTime"
                      label="Event Time"
                      placeholder="HH:MM AM/PM"
                      fullWidth
                      variant="outlined"
                      sx={textField}
                      helperText={<CustomErrorMessage name="eventTime" />}
                      error={Boolean(errors.eventTime && touched.eventTime)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="address"
                      label="Address"
                      fullWidth
                      variant="outlined"
                      sx={textField}
                      helperText={<CustomErrorMessage name="address" />}
                      error={Boolean(errors.address && touched.address)}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box sx={section}>
                <Typography variant="h6" sx={sectionTitle}>
                  Personal Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="fullName"
                      label="Full Name"
                      fullWidth
                      variant="outlined"
                      sx={textField}
                      helperText={<CustomErrorMessage name="fullName" />}
                      error={Boolean(errors.fullName && touched.fullName)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="phoneNumber"
                      label="Phone Number"
                      fullWidth
                      variant="outlined"
                      sx={textField}
                      helperText={<CustomErrorMessage name="phoneNumber" />}
                      error={Boolean(errors.phoneNumber && touched.phoneNumber)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="email"
                      label="Email"
                      fullWidth
                      variant="outlined"
                      sx={textField}
                      helperText={<CustomErrorMessage name="email" />}
                      error={Boolean(errors.email && touched.email)}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box sx={buttonContainer}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={submitButton}
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  onClick={handleReset}
                  variant="outlined"
                  sx={clearButton}
                >
                  Clear Form
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PhotographerBookingForm;
