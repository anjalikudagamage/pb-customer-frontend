import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import {
  cardContainer,
  imageStyle,
  contentStyle,
  titleStyle,
  locationStyle,
  roomTypeStyle,
  featuresContainerStyle,
  featureStyle,
  availabilityStyle,
  priceContainerStyle,
  priceStyle,
  ratingStyle,
  buttonStyle,
} from './styles';

interface IPhotographerCardProps {
  imageUrl: string;
  title: string;
  location: string;
  distance: string;
  roomType: string;
  features: string[];
  price: string;
  availability: string;
  rating: string;
  reviews: string;
}

const PhotographerCard: React.FC<IPhotographerCardProps> = ({
  imageUrl,
  title,
  location,
  distance,
  roomType,
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
            alt={title}
            sx={imageStyle}
          />
        </Grid>
        <Grid item xs={8}>
          <Box sx={contentStyle}>
            <Typography variant="h6" sx={titleStyle}>
              {title}
            </Typography>
            <Typography sx={locationStyle}>
              <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                {location}
              </a> 
              • {distance}
            </Typography>
            <Typography sx={roomTypeStyle}>
              {roomType}
            </Typography>
            <Box sx={featuresContainerStyle}>
              {features.map((feature, index) => (
                <Typography key={index} sx={featureStyle}>
                  {feature}
                </Typography>
              ))}
            </Box>
            <Typography sx={availabilityStyle}>
              {availability}
            </Typography>
          </Box>
          <Box sx={priceContainerStyle}>
            <Typography sx={priceStyle}>
              {price}
            </Typography>
            <Typography sx={ratingStyle}>
              {rating} 
              <span style={{ marginLeft: '0.5rem', fontSize: '0.875rem' }}>
                {reviews} reviews
              </span>
            </Typography>
            <Button variant="contained" sx={buttonStyle}>
              See availability
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PhotographerCard;
