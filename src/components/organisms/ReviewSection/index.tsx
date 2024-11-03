import React from "react";
import { Avatar, Grid, Typography, Container, Rating } from "@mui/material";

type Review = {
  author: string;
  image?: string;
  rating: number;
  comment: string;
};

interface ReviewSectionProps {
  reviews: Review[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" padding="100px 0">
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} textAlign="center">
            <Avatar
              alt={review.author}
              src={review.image}
              sx={{ width: 150, height: 150, margin: "0 auto" }}
            />
            <Typography variant="h6" component="h2" gutterBottom>
              {review.author}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {review.comment}
            </Typography>
            <Rating
              name={`rating-${index}`}
              value={review.rating}
              readOnly
              precision={0.5} 
              sx={{ marginTop: 1 }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ReviewSection;
