import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  cardContainer,
  imageStyle,
  contentStyle,
  titleStyle,
  packageStyle,
  featuresContainerStyle,
  featureStyle,
  availabilityStyle,
  priceContainerStyle,
  priceStyle,
  ratingStyle,
  buttonStyle,
} from "./styles";
import { useNavigate } from "react-router-dom";

interface IPhotographerCardProps {
  imageUrl: string;
  businessName: string;
  packageType: string;
  features: string[];
  price: string;
  availability: string;
  rating: string;
  reviews: string;
}

const PhotographerCard: React.FC<IPhotographerCardProps> = ({
  imageUrl,
  businessName,
  packageType,
  features,
  price,
  availability,
  rating,
  reviews,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/photographer", {
      state: {
        imageUrl,
        businessName,
        packageType,
        features,
        price,
        availability,
        rating,
        reviews,
      },
    });
  };

  return (
    <Box sx={cardContainer}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box
            component="img"
            src={imageUrl}
            alt={businessName}
            sx={imageStyle}
          />
        </Grid>
        <Grid item xs={8}>
          <Box sx={contentStyle}>
            <Typography variant="h5" sx={titleStyle}>
              {businessName}
            </Typography>
            <Typography variant="subtitle1" sx={packageStyle}>
              {packageType}
            </Typography>
            <Box sx={featuresContainerStyle}>
              {features.map((feature, index) => (
                <Typography key={index} variant="body2" sx={featureStyle}>
                  • {feature}
                </Typography>
              ))}
            </Box>
            <Typography variant="body1" sx={availabilityStyle}>
              {availability}
            </Typography>
          </Box>
          <Box sx={priceContainerStyle}>
            <Typography variant="body2" sx={ratingStyle}>
              ⭐ {rating}
              <span style={{ marginLeft: "0.5rem", fontSize: "0.875rem" }}>
                ({reviews} reviews)
              </span>
            </Typography>
            <TextField
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{
                      marginLeft: "-5rem",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1rem",
                        color: "#1E88E5",
                      }}
                    >
                      RS
                    </Typography>
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
              value={price}
              sx={{
                ...priceStyle,
                ".MuiInputBase-input": {
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  color: "#1E88E5",
                },
              }}
            />
            <Button variant="contained" sx={buttonStyle} onClick={handleClick}>
              Check Availability
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PhotographerCard;
