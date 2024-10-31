import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import Img from "../../../assets/images/ImageGallery/image1.jpg";
import Img1 from "../../../assets/images/ImageGallery/image2.jpg";
import Img2 from "../../../assets/images/ImageGallery/image3.jpg";
import Img3 from "../../../assets/images/ImageGallery/image4.jpg";
import Img4 from "../../../assets/images/ImageGallery/image5.jpg";
import {
  container,
  card,
  cardContent,
  category,
  title,
  author,
} from "./styles";

const articles = [
  {
    title: "Majestic Landscapes of the Alps",
    category: "Landscape",
    date: "August 7, 2019",
    author: "Armin Vans",
    image: Img1,
  },
  {
    title: "Dynamic Life of the Streets",
    category: "Street Photography",
    image: Img2,
  },
  {
    title: "Exploring Tranquil Nature Scenes",
    category: "Nature",
    image: Img3,
  },

  {
    title: "Capturing Emotions in Portraits",
    category: "Portrait",
    image: Img,
  },
  {
    title: "Golden Hour in the City",
    category: "Kandy",
    image: Img4,
  },
];

const ImageGallery: React.FC = () => {
  return (
    <Grid container spacing={2} sx={container}>
      <Grid item xs={12} sm={8}>
        <Card sx={{ ...card, backgroundImage: `url(${articles[0].image})` }}>
          <CardContent sx={cardContent}>
            <Typography variant="caption" sx={category}>
              {articles[0].category}
            </Typography>
            <Typography variant="h5" sx={title}>
              {articles[0].title}
            </Typography>
            <Typography variant="caption" sx={author}>
              {articles[0].author} - {articles[0].date}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card sx={{ ...card, backgroundImage: `url(${articles[1].image})` }}>
          <CardContent sx={cardContent}>
            <Typography variant="caption" sx={category}>
              {articles[1].category}
            </Typography>
            <Typography variant="h6" sx={title}>
              {articles[1].title}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card sx={{ ...card, backgroundImage: `url(${articles[2].image})` }}>
          <CardContent sx={cardContent}>
            <Typography variant="caption" sx={category}>
              {articles[2].category}
            </Typography>
            <Typography variant="body1" sx={title}>
              {articles[2].title}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card sx={{ ...card, backgroundImage: `url(${articles[3].image})` }}>
          <CardContent sx={cardContent}>
            <Typography variant="caption" sx={category}>
              {articles[3].category}
            </Typography>
            <Typography variant="body1" sx={title}>
              {articles[3].title}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card sx={{ ...card, backgroundImage: `url(${articles[4].image})` }}>
          <CardContent sx={cardContent}>
            <Typography variant="caption" sx={category}>
              {articles[4].category}
            </Typography>
            <Typography variant="body1" sx={title}>
              {articles[4].title}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ImageGallery;
