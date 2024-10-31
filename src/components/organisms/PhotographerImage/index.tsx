import React from "react";
import { Box, Typography } from "@mui/material";
import { heroContainer, title, subtitle } from "./styles";

interface PhotographerImageProps {
  imageUrl: string;
  businessName: string;
  description: string;
}

const PhotographerImage: React.FC<PhotographerImageProps> = ({
  imageUrl,
  businessName,
}) => {
  return (
    <Box sx={{ ...heroContainer, overflow: "hidden" }}>
      <Box
        sx={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <Typography variant="h4" sx={title}>
        {businessName}
      </Typography>
      <Typography variant="h6" sx={subtitle}>
        Capturing life’s most precious moments with artistry and precision. Our
        studio blends creativity with professional expertise to deliver
        stunning, timeless images that tell your unique story. 
      </Typography>
    </Box>
  );
};

export default PhotographerImage;
