import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldProps } from "formik";
import * as Yup from "yup";
import bgImg from "../../../assets/images/photographerCard/image.png";
import { AccessTime, CameraAlt, Event, Payment } from "@mui/icons-material";
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
import CustomDatePicker from "../../molecules/CustomDatePicker";
import dayjs from "dayjs";
import PopupMessage from "../../layouts/BookingPopup";
import CustomTimePicker from "../../molecules/CustomTimePicker";

const CustomErrorMessage = ({ name }: { name: string }) => (
  <ErrorMessage name={name}>
    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
  </ErrorMessage>
);

const validationSchema = Yup.object().shape({
  packageName: Yup.string().required("Package Name is required"),
  eventDate: Yup.string().required("Event Date is required"),
  eventTime: Yup.string().required("Event Time is required"),
  address: Yup.string().required("Address is required"),
  fullName: Yup.string().required("Full Name is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number is not valid")
    .required("Phone Number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const PackageBookingPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isSubmitting = useAppSelector((state) => state.photographer.isLoading);
  const [popup, setPopup] = useState<{
    message: string;
    isError: boolean;
    isVisible: boolean;
  }>({
    message: "",
    isError: false,
    isVisible: false,
  });

  const initialValues = {
    packageName: "",
    eventDate: "",
    eventTime: "",
    address: "",
    fullName: "",
    phoneNumber: "",
    email: "",
  };

  const handleClosePopup = () => {
    setPopup({ ...popup, isVisible: false });
  };

  return (
    <>
      <Grid
        container
        sx={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
          color: "white",
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            padding: "2rem",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "1.5rem",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "8px",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Typography variant="h3" gutterBottom>
            <strong>Ready to Capture Your Moment?</strong>
          </Typography>
          <Typography variant="h6" gutterBottom>
            Book Your Photographer with Ease
          </Typography>
          <Box display="flex" alignItems="center" gap="0.5rem">
            <CameraAlt fontSize="large" sx={{ color: "#00e5ff" }} />
            <Typography variant="body1">
              <strong>Choose Your Package</strong>: Select from a variety of
              packages tailored to meet your photography needs, from weddings to
              personal photoshoots.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="0.5rem">
            <Event fontSize="large" sx={{ color: "#00e5ff" }} />
            <Typography variant="body1">
              <strong>Schedule Your Session</strong>: Choose a convenient date
              for your session and let us handle the rest!
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="0.5rem">
            <AccessTime fontSize="large" sx={{ color: "#00e5ff" }} />
            <Typography variant="body1">
              <strong>Flexible Timing</strong>: Pick a time that works best for
              you and your event.
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" gap="0.5rem">
            <Payment fontSize="large" sx={{ color: "#00e5ff" }} />
            <Typography variant="body1">
              <strong>Easy Payment</strong>: No upfront costs! Pay after your
              session ends.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              justifyContent: "flex-end",
              height: "100vh",
              display: "flex",
              paddingRight: "40px",
              alignItems: "center",
            }}
          >
            {popup.isVisible && (
              <PopupMessage
                message={popup.message}
                isError={popup.isError}
                onClose={handleClosePopup}
              />
            )}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                dispatch(submitBooking(values))
                  .unwrap()
                  .then(() => {
                    setPopup({
                      message: "Booking submitted successfully!",
                      isError: false,
                      isVisible: true,
                    });
                    resetForm();
                  })
                  .catch((err) => {
                    setPopup({
                      message: `Booking failed: ${err}`,
                      isError: true,
                      isVisible: true,
                    });
                  });
              }}
            >
              {({
                handleSubmit,
                handleReset,
                errors,
                touched,
                values,
                setFieldValue,
              }) => (
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
                                  "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                      borderColor: "#00e5ff",
                                    },
                                  color: values.packageName ? "white" : "white",
                                  "& .MuiSelect-select": {
                                    color: values.packageName
                                      ? "white"
                                      : "white",
                                  },
                                  "&.Mui-focused .MuiSelect-select": {
                                    color: "white",
                                  },
                                  "& .MuiSvgIcon-root": {
                                    color: "white",
                                  },
                                }}
                              >
                                <MenuItem value="">
                                  <em>Select a Package</em>
                                </MenuItem>
                                <MenuItem value="package1">
                                  Wedding Package
                                </MenuItem>
                                <MenuItem value="package2">
                                  Portrait Standard Package
                                </MenuItem>
                                <MenuItem value="package3">
                                  Event Package
                                </MenuItem>
                                <MenuItem value="package3">
                                  Commercial Package
                                </MenuItem>
                              </Select>
                            )}
                          </Field>
                          <CustomErrorMessage name="packageName" />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <CustomDatePicker
                            label="Event Date"
                            selectedDate={
                              values.eventDate ? dayjs(values.eventDate) : null
                            }
                            onDateChange={(newDate) =>
                              setFieldValue(
                                "eventDate",
                                newDate ? newDate.format("YYYY-MM-DD") : ""
                              )
                            }
                          />
                          <CustomErrorMessage name="eventDate" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <CustomTimePicker
                            label="Event Time"
                            selectedTime={
                              values.eventTime
                                ? dayjs(values.eventTime, "HH:mm A")
                                : null
                            }
                            onTimeChange={(newTime) =>
                              setFieldValue(
                                "eventTime",
                                newTime ? newTime.format("HH:mm A") : ""
                              )
                            }
                          />
                          <CustomErrorMessage name="eventTime" />
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
                            helperText={
                              <CustomErrorMessage name="phoneNumber" />
                            }
                            error={Boolean(
                              errors.phoneNumber && touched.phoneNumber
                            )}
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
        </Grid>
      </Grid>
    </>
  );
};

export default PackageBookingPage;
