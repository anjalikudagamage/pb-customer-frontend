import React from "react";
import { Grid, Typography } from "@mui/material";
import Image1 from "../../../assets/images/ImageText/image1.png";
import { GridContainer, GridItem, imageStyle, textStyle } from "./styles";

const ImageData = [
  { src: Image1, text: "Capture My Moments" },
  { src: Image1, text: "Book Your Photoshoot" },
];

const ImageText: React.FC = () => {
  return (
    <Grid container spacing={2} sx={GridContainer}>
      {ImageData.map((item, index) => (
        <Grid item xs={6} key={index} sx={GridItem}>
          <img src={item.src} alt={item.text} style={imageStyle} />
          <Typography variant="subtitle1" sx={textStyle}>
            {item.text}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageText;
