import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ReviewCard from "../../atoms/HomeReviewCard";
import {ButtonStyle} from "./styles"

const reviews = [
  {
    logoUrl: "path_to_walmart_logo",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reviewerName: "Nikhil Anantharaman",
    reviewerRole: "Customer",
    reviewerImageUrl: "path_to_reviewer_image",
  },
  {
    logoUrl: "path_to_walmart_logo",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reviewerName: "Nikhil Anantharaman",
    reviewerRole: "Customer",
    reviewerImageUrl: "path_to_reviewer_image",
  },
  {
    logoUrl: "path_to_walmart_logo",
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reviewerName: "Nikhil Anantharaman",
    reviewerRole: "Customer",
    reviewerImageUrl: "path_to_reviewer_image",
  },
  // Add more reviews as needed
];

const ReviewSection: React.FC = () => {
  return (
    <Box
      sx={{ padding: "40px", backgroundColor: "#e53935", textAlign: "center" }}
    >
      <Typography
        variant="h4"
        sx={{ color: "#fff", fontWeight: "bold", marginBottom: "10px" }}
      >
        THEY TRUSTED US
      </Typography>
      <Typography variant="body1" sx={{ color: "#fff", marginBottom: "30px" }}>
        We are very happy because we have happy customers.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "30px",
        }}
      >
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            logoUrl={review.logoUrl}
            reviewText={review.reviewText}
            reviewerName={review.reviewerName}
            reviewerRole={review.reviewerRole}
            reviewerImageUrl={review.reviewerImageUrl}
          />
        ))}
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={ButtonStyle}
      >
        SEE MORE
      </Button>
    </Box>
  );
};

export default ReviewSection;
