import React from "react";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import backgroundImage from "../../../assets/login/image1.jpg";
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

const SignUpPage: React.FC = () => {
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
          <Link href="/login" sx={linkStyle}>
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
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          variant="outlined"
          sx={inputFieldStyle}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
          sx={inputFieldStyle}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="outlined"
          sx={inputFieldStyle}
        />
        <Button sx={signUpButtonStyle}>Sign Up</Button>
      </Box>
    </Box>
  );
};

export default SignUpPage;
