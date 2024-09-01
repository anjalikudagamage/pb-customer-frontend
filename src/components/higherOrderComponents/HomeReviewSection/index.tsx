import React from "react";
import { Box, Typography} from "@mui/material";
import ReviewCard from "../../atoms/HomeReviewCard";
import TextButton from "../../atoms/TextButton";
import logo from "../../../assets/logo.png"

const reviews = [
  {
    logoUrl: logo,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reviewerName: "Nikhil Anantharaman",
    reviewerRole: "Customer",
    reviewerImageUrl: "path_to_reviewer_image",
  },
  {
    logoUrl: logo,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reviewerName: "Nikhil Anantharaman",
    reviewerRole: "Customer",
    reviewerImageUrl: "path_to_reviewer_image",
  },
  {
    logoUrl: logo,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reviewerName: "Nikhil Anantharaman",
    reviewerRole: "Customer",
    reviewerImageUrl: "path_to_reviewer_image",
  },
  // Add more reviews as needed
];

const HomeReviewSection: React.FC = () => {
  return (
    <Box
      sx={{ padding: "100px 50px", backgroundColor: "#0F67B1", textAlign: "center", borderRadius: "10px", mb: 5, }}
    >
      <Typography
        variant="h4"
        sx={{ color: "#fff", fontWeight: "bold", marginBottom: "10px",  }}
      >
        THEY TRUSTED US
      </Typography>
      <Typography variant="body1" sx={{ color: "#fff", marginBottom: "50px" }}>
        We are very happy because we have happy customers.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "50px",
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
      <TextButton text="SEE MORE"/>
    </Box>
  );
};

export default HomeReviewSection;
