import React from "react";
import { Box, Typography } from "@mui/material";
import ReviewCard from "../../atoms/HomeReviewCard";
import TextButton from "../../atoms/TextButton";
import logo from "../../../assets/logo2.png";
import img from "../../../assets/images/Review/image1.jpg";
import {
  reviewSectionContainerStyles,
  sectionTitleStyles,
  sectionSubtitleStyles,
  reviewsContainerStyles,
} from "./styles";

const reviews = [
  {
    logoUrl: logo,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reviewerName: "Nikhil Anantharaman",
    reviewerRole: "Customer",
    reviewerImageUrl: img,
  },
  {
    logoUrl: logo,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reviewerName: "Nikhil Anantharaman",
    reviewerRole: "Customer",
    reviewerImageUrl: img,
  },
  {
    logoUrl: logo,
    reviewText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    reviewerName: "Nikhil Anantharaman",
    reviewerRole: "Customer",
    reviewerImageUrl: img,
  },
];

const HomeReviewSection: React.FC = () => {
  return (
    <Box sx={reviewSectionContainerStyles}>
      <Typography variant="h4" sx={sectionTitleStyles}>
        THEY TRUSTED US
      </Typography>
      <Typography variant="body1" sx={sectionSubtitleStyles}>
        We are very happy because we have happy customers.
      </Typography>
      <Box sx={reviewsContainerStyles}>
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
      <TextButton text="SEE MORE" />
    </Box>
  );
};

export default HomeReviewSection;
