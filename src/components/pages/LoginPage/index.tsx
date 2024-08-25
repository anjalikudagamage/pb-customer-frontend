import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import backgroundImage from '../../../assets/login/image1.jpg'; 
import { 
  containerStyle, 
  imageBoxStyle, 
  buttonStyle, 
  formBoxStyle, 
  titleStyle, 
  inputFieldStyle, 
  signUpButtonStyle 
} from './styles';

const LoginPage: React.FC = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={{
          ...imageBoxStyle,
          backgroundImage: `url(${backgroundImage})`,  
        }}>
        <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          CLICKBOOKER
        </Typography>
        <Typography variant="body1" sx={{ mb: 10 }}>
          Already Registered? Login
        </Typography>
        <Typography variant="body2" sx={{ maxWidth: 300, mb: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper
          mauris in magna venenatis suscipit.
        </Typography>
        <Button sx={buttonStyle}>
          Learn More
        </Button>
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
        <Button sx={signUpButtonStyle}>
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
