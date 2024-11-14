import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import {
  containerStyles,
  logoStyles,
  reviewTextStyles,
  reviewerContainerStyles,
  avatarStyles,
  reviewerNameStyles,
  reviewerRoleStyles,
} from "./styles";

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
    <Box sx={containerStyles}>
      <img src={logoUrl} alt="Company Logo" style={logoStyles} />
      <Typography variant="body1" sx={reviewTextStyles}>
        "{reviewText}"
      </Typography>
      <Box sx={reviewerContainerStyles}>
        <Avatar src={reviewerImageUrl} alt={reviewerName} sx={avatarStyles} />
        <Box>
          <Typography variant="subtitle1" sx={reviewerNameStyles}>
            {reviewerName}
          </Typography>
          <Typography variant="body2" sx={reviewerRoleStyles}>
            {reviewerRole}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeReviewCard;
