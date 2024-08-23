import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import {
  cardContainer,
  imageStyle,
  contentStyle,
  titleStyle,
  locationStyle,
  packageStyle,
  featuresContainerStyle,
  featureStyle,
  availabilityStyle,
  priceContainerStyle,
  priceStyle,
  ratingStyle,
  buttonStyle,
} from "./styles";

interface IPhotographerCardProps {
  imageUrl: string;
  photographerName: string;
  studioName: string;
  location: string;
  packageType: string;
  features: string[];
  price: string;
  availability: string;
  rating: string;
  reviews: string;
}

const PhotographerCard: React.FC<IPhotographerCardProps> = ({
  imageUrl,
  photographerName,
  studioName,
  location,
  packageType,
  features,
  price,
  availability,
  rating,
  reviews,
}) => {
  return (
    <Box sx={cardContainer}>
      <Grid container>
        <Grid item xs={4}>
          <Box
            component="img"
            src={imageUrl}
            alt={photographerName}
            sx={imageStyle}
          />
        </Grid>
        <Grid item xs={8}>
          <Box sx={contentStyle}>
            <Typography variant="h6" sx={titleStyle}>
              {photographerName}
            </Typography>
            <Typography sx={locationStyle}>
              {studioName} • {location}
            </Typography>
            <Typography sx={packageStyle}>{packageType}</Typography>
            <Box sx={featuresContainerStyle}>
              {features.map((feature, index) => (
                <Typography key={index} sx={featureStyle}>
                  {feature}
                </Typography>
              ))}
            </Box>
            <Typography sx={availabilityStyle}>{availability}</Typography>
          </Box>
          <Box sx={priceContainerStyle}>
            <Typography sx={ratingStyle}>
              {rating}
              <span style={{ marginLeft: "0.5rem", fontSize: "0.875rem" }}>
                {reviews} reviews
              </span>
            </Typography>
            <Typography sx={priceStyle}>{price}</Typography>
            <Button variant="contained" sx={buttonStyle}>
              Check availability
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PhotographerCard;
