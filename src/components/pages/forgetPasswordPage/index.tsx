import React from "react";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import backgroundImage from "../../../assets/login/image1.jpg";
import {
  containerStyle,
  imageBoxStyle,
  formBoxStyle,
  titleStyle,
  inputFieldStyle,
  signUpButtonStyle,
  headingStyle,
  bodyStyle,
  linkStyle,
} from "./styles";

const ForgotPasswordPage: React.FC = () => {
  return (
    <Box sx={containerStyle}>
      <Box
        sx={{
          ...imageBoxStyle,
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Typography variant="h3" sx={headingStyle}>
          FORGOT YOUR PASSWORD?
        </Typography>
        <Typography variant="body1" sx={bodyStyle}>
          Don't worry, it happens to the best of us! Enter your email below, and we'll send you a link to reset your password.
        </Typography>
        <Typography variant="body1" sx={bodyStyle}>
          Remember your password? <Link href="/login" sx={linkStyle}>Login here</Link>
        </Typography>
      </Box>

      <Box sx={formBoxStyle}>
        <Typography variant="h4" sx={titleStyle}>
          Reset Your Password
        </Typography>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
          sx={inputFieldStyle}
        />
        <Button sx={signUpButtonStyle}>Send Reset Link</Button>
      </Box>
    </Box>
  );
};

export default ForgotPasswordPage;
