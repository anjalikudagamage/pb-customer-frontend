import React from "react";
import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import bgImg from "../../../assets/images/photographerCard/image1.jpg";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import {
  formContainer,
  formTitle,
  section,
  sectionTitle,
  textField,
  fareLabel,
  buttonContainer,
  submitButton,
  clearButton,
} from "./styles";

const validationSchema = Yup.object().shape({
  eventType: Yup.string().required("Event Type is required"),
  location: Yup.string().required("Location is required"),
  packageType: Yup.string().required("Package Type is required"),
  photographer: Yup.string().required("Preferred Photographer is required"),
  eventDate: Yup.date().required("Event Date is required").nullable(),
  eventTime: Yup.string().required("Event Time is required"),
  sessionType: Yup.string().required("Session Type is required"),
  instructions: Yup.string(),
  fullName: Yup.string().required("Full Name is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number is not valid")
    .required("Phone Number is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
});

const PhotographerBookingForm: React.FC = () => {
  const initialValues = {
    eventType: "",
    location: "",
    packageType: "",
    photographer: "",
    eventDate: "",
    eventTime: "",
    sessionType: "",
    instructions: "",
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
          // Handle form submission
          console.log(values);
          resetForm();
        }}
      >
        {({ handleSubmit, handleReset, isSubmitting, errors, touched }) => (
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
                    <Field
                      as={TextField}
                      name="eventType"
                      label="Event Type"
                      fullWidth
                      variant="outlined"
                      sx={textField}
                      helperText={<ErrorMessage name="eventType" />}
                      error={Boolean(errors.eventType && touched.eventType)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="location"
                      label="Location"
                      fullWidth
                      variant="outlined"
                      sx={textField}
                      helperText={<ErrorMessage name="location" />}
                      error={Boolean(errors.location && touched.location)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="packageType"
                      label="Package Type"
                      fullWidth
                      variant="outlined"
                      sx={textField}
                      helperText={<ErrorMessage name="packageType" />}
                      error={Boolean(errors.packageType && touched.packageType)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="photographer"
                      label="Preferred Photographer"
                      fullWidth
                      variant="outlined"
                      sx={textField}
                      helperText={<ErrorMessage name="photographer" />}
                      error={Boolean(errors.photographer && touched.photographer)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="eventDate"
                      label="Event Date"
                      fullWidth
                      variant="outlined"
                      sx={textField}
                      helperText={<ErrorMessage name="eventDate" />}
                      error={Boolean(errors.eventDate && touched.eventDate)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      as={TextField}
                      name="eventTime"
                      label="Event Time"
                      fullWidth
                      variant="outlined"
                      sx={textField}
                      helperText={<ErrorMessage name="eventTime" />}
                      error={Boolean(errors.eventTime && touched.eventTime)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset" error={Boolean(errors.sessionType && touched.sessionType)}>
                      <Typography sx={fareLabel}>Select Session Type</Typography>
                      <Field as={RadioGroup} row name="sessionType">
                        <FormControlLabel
                          sx={fareLabel}
                          value="portrait"
                          control={<Radio />}
                          label="Portrait"
                        />
                        <FormControlLabel
                          sx={fareLabel}
                          value="event"
                          control={<Radio />}
                          label="Event"
                        />
                      </Field>
                      <FormHelperText>
                        <ErrorMessage name="sessionType" />
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
                      name="instructions"
                      label="Additional Instructions"
                      multiline
                      rows={4}
                      fullWidth
                      variant="outlined"
                      sx={textField}
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
                      helperText={<ErrorMessage name="fullName" />}
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
                      helperText={<ErrorMessage name="phoneNumber" />}
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
                      helperText={<ErrorMessage name="email" />}
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
