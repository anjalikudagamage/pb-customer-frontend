import { FC } from "react";
import { Grid, Box, Typography } from "@mui/material";
import {
  containerStyle,
  imageContainerStyle,
  textContainerStyle,
  getInnerContainerStyle,
  imageBoxStyle,
  titleTextStyle,
} from "./styles";

interface ImageTextProps {
  imageUrl: string;
  title: string;
  normalText?: string;
  photographerName?: string;
  businessName?: string;
  imageOnRight?: boolean;
  textContainerColor?: string;
  normalTextColor?: string;
  titleColor?: string;
  maxWidth?: string;
}

const ImageTextSection: FC<ImageTextProps> = ({
  imageUrl,
  title,
  normalText = "",
  photographerName = "",
  imageOnRight = false,
  textContainerColor = "rgba(65, 48, 41, 1)",
  titleColor = "white",
  maxWidth,
}) => {
  return (
    <Grid container sx={containerStyle} spacing={0}>
      <Grid item xs={12} md={8} sx={imageContainerStyle(imageOnRight)}>
        <Box sx={imageBoxStyle}>
          <img
            src={imageUrl}
            alt={title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        sx={textContainerStyle(imageOnRight, textContainerColor)}
      >
        <Box sx={getInnerContainerStyle(maxWidth)}>
          <Typography
            sx={{ ...titleTextStyle, color: titleColor }}
            gutterBottom
          >
            {title}
          </Typography>

          {photographerName && (
            <Typography variant="h6" sx={{ color: normalText || "white" }}>
              {photographerName}
            </Typography>
          )}

          {normalText && (
            <Typography sx={{ color: normalText || "white", mt: 2 }}>
              {normalText}
            </Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ImageTextSection;
