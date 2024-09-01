import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { galleryContainer, imageBox, titleStyles } from './styles';

const categories = [
  { title: 'Paintings & Prints', imageUrl: 'url-to-image1' },
  { title: 'Photography', imageUrl: 'url-to-image2' },
  { title: 'Drawings & Illustration', imageUrl: 'url-to-image3' },
  { title: 'Digital Art', imageUrl: 'url-to-image4' },
  { title: 'Sculptures & Carvings', imageUrl: 'url-to-image5' },
  { title: 'Ceramics & Pottery', imageUrl: 'url-to-image6' },
  { title: 'Glass', imageUrl: 'url-to-image7' },
  { title: 'Jewelry', imageUrl: 'url-to-image8' },
  { title: 'Furniture', imageUrl: 'url-to-image9' },
  { title: 'Textile & Apparel', imageUrl: 'url-to-image10' },
  { title: 'Antiques', imageUrl: 'url-to-image11' },
  { title: 'Crafts & Other Art', imageUrl: 'url-to-image12' },
];

const PhotographerGallery: React.FC = () => {
  return (
    <Box sx={galleryContainer}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Categories
      </Typography>
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={imageBox} style={{ backgroundImage: `url(${category.imageUrl})` }}>
              <Typography variant="h6" sx={titleStyles}>
                {category.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PhotographerGallery;
