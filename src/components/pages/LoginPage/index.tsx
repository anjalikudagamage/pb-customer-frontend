import React from "react";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import backgroundImage from "../../../assets/images/login/image1.jpg";
import {
  containerStyle,
  imageBoxStyle,
  buttonStyle,
  formBoxStyle,
  titleStyle,
  inputFieldStyle,
  signUpButtonStyle,
  headingStyle,
  bodyStyle,
  linkStyle,
} from "./styles";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage: React.FC = () => {
  const handleSubmit = (values: { email: string; password: string }) => {
    // Handle form submission, e.g., log in the user
    console.log("Submitted email:", values.email);
    console.log("Submitted password:", values.password);
  };

  return (
    <Box sx={containerStyle}>
      <Box
        sx={{
          ...imageBoxStyle,
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Typography variant="h3" sx={headingStyle}>
          WELCOME BACK TO CLICKBOOKER
        </Typography>
        <Typography variant="body1" sx={bodyStyle}>
          New here?{" "}
          <Link href="/signup" sx={linkStyle}>
            Create an account
          </Link>
        </Typography>
        <Typography variant="body2" sx={bodyStyle}>
          Log in to your account to access all the features of our platform.
          Connect with photographers, book your next session, or manage your
          profile—all in one place.
        </Typography>
        <Button sx={buttonStyle}>Learn More</Button>
      </Box>

      <Box sx={formBoxStyle}>
        <Typography variant="h4" sx={titleStyle}>
          Login to Your Account
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form>
              <Field
                name="email"
                as={TextField}
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                sx={inputFieldStyle}
                helperText={<ErrorMessage name="email" />}
                error={touched.email && !!errors.email}
              />
              <Field
                name="password"
                as={TextField}
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
                sx={inputFieldStyle}
                helperText={<ErrorMessage name="password" />}
                error={touched.password && !!errors.password}
              />
              <Link
                href="/forgot-password"
                sx={linkStyle}
                style={{ marginBottom: "16px", display: "block" }}
              >
                Forgot Password?
              </Link>
              <Button type="submit" sx={signUpButtonStyle}>
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default LoginPage;