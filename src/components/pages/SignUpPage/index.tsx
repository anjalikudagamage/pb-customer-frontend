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
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignUpPage: React.FC = () => {
  const handleSubmit = (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    console.log("Submitted name:", values.name);
    console.log("Submitted email:", values.email);
    console.log("Submitted password:", values.password);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
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
          CLICKBOOKER
        </Typography>
        <Typography variant="body1" sx={bodyStyle}>
          Already have an account?{" "}
          <Link href="/login" sx={linkStyle} onClick={handleClick}>
            Login here
          </Link>
        </Typography>
        <Typography variant="body2" sx={bodyStyle}>
          Sign up today and start connecting with top photographers in your
          area! Whether you’re a photographer looking to grow your business or
          someone searching for a professional to capture your special moments,
          ClickBooker is the perfect place to begin. Create your account now and
          unlock the full potential of our community.
        </Typography>
        <Button sx={buttonStyle}>Learn More</Button>
      </Box>

      <Box sx={formBoxStyle}>
        <Typography variant="h4" sx={titleStyle}>
          Create Your Account
        </Typography>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form>
              <Field
                name="name"
                as={TextField}
                label="Name"
                fullWidth
                margin="normal"
                variant="outlined"
                sx={inputFieldStyle}
                helperText={<ErrorMessage name="name" />}
                error={touched.name && !!errors.name}
              />
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
              <Button type="submit" sx={signUpButtonStyle}>
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default SignUpPage;
