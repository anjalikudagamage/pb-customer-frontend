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

const LoginPage: React.FC = () => {
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
          New here? <Link href="/signup" sx={linkStyle}>Create an account</Link>
        </Typography>
        <Typography variant="body2" sx={bodyStyle}>
          Log in to your account to access all the features of our platform. Connect with photographers, book your next session, or manage your profile—all in one place.
        </Typography>
        <Button sx={buttonStyle}>Learn More</Button>
      </Box>

      <Box sx={formBoxStyle}>
        <Typography variant="h4" sx={titleStyle}>
          Login to Your Account
        </Typography>
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
        <Link href="/forgot-password" sx={linkStyle} style={{ marginBottom: '16px', display: 'block' }}>
          Forgot Password?
        </Link>
        <Button sx={signUpButtonStyle}>Login</Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
