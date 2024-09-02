import React from "react";
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

const PhotographerBookingForm: React.FC = () => {
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
              <TextField
                fullWidth
                label="Event Type"
                variant="outlined"
                sx={textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Location"
                variant="outlined"
                sx={textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Package Type"
                variant="outlined"
                sx={textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Preferred Photographer"
                variant="outlined"
                sx={textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Event Date"
                variant="outlined"
                sx={textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Event Time"
                variant="outlined"
                sx={textField}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography sx={fareLabel}>Select Session Type</Typography>
              <RadioGroup row>
                <FormControlLabel
                  value="portrait"
                  control={<Radio />}
                  label="Portrait"
                />
                <FormControlLabel
                  value="event"
                  control={<Radio />}
                  label="Event"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Additional Instructions"
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
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                sx={textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                sx={textField}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                sx={textField}
              />
            </Grid>
          </Grid>
        </Box>

        <Box sx={buttonContainer}>
          <Button variant="contained" sx={submitButton}>
            Submit
          </Button>
          <Button variant="outlined" sx={clearButton}>
            Clear Form
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PhotographerBookingForm;
