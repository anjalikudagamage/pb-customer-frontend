import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

interface ReviewCardProps {
  logoUrl: string;
  reviewText: string;
  reviewerName: string;
  reviewerRole: string;
  reviewerImageUrl: string;
}

const HomeReviewCard: React.FC<ReviewCardProps> = ({
  logoUrl,
  reviewText,
  reviewerName,
  reviewerRole,
  reviewerImageUrl,
}) => {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img
        src={logoUrl}
        alt="Company Logo"
        style={{ maxHeight: "40px", marginBottom: "20px" }}
      />
      <Typography
        variant="body1"
        sx={{ fontStyle: "italic", marginBottom: "20px" }}
      >
        "{reviewText}"
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Avatar
          src={reviewerImageUrl}
          alt={reviewerName}
          sx={{ width: 56, height: 56 }}
        />
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {reviewerName}
          </Typography>
          <Typography variant="body2">{reviewerRole}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeReviewCard;
