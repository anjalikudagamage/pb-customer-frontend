import React from "react";
import { Box, Button, TextField, Typography, Link  } from "@mui/material";
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
          CLICKBOOKER
        </Typography>
        <Typography variant="body1" sx={bodyStyle}>
          Already Registered? <Link href="/login" sx={linkStyle}>Login here</Link>
        </Typography>
        <Typography variant="body2" sx={bodyStyle}>
          Unlock your potential with our platform! Photographers, elevate your brand by showcasing your portfolio, reaching new clients, and standing out in a competitive market. For clients, finding the perfect photographer has never been easier—explore a curated selection of talented professionals ready to capture your most cherished moments. Join our community today, whether to grow your photography business or to find a professional who truly understands your vision.
        </Typography>
        <Button sx={buttonStyle}>Learn More</Button>
      </Box>

      <Box sx={formBoxStyle}>
        <Typography variant="h4" sx={titleStyle}>
          Create New Account
        </Typography>
        <TextField
          label="Name"
          defaultValue="Francois Mercer"
          fullWidth
          margin="normal"
          variant="outlined"
          sx={inputFieldStyle}
        />
        <TextField
          label="Email"
          defaultValue="hello@reallygreatsite.com"
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

export default LoginPage;
