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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper
          mauris in magna venenatis suscipit.
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
