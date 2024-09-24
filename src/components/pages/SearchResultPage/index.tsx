import React from "react";
import ImageCarousel from "../../../components/organisms/ImageCarousel";
import Image2 from "../../../assets/images/imageCarousel/image2.jpg";
import Image1 from "../../../assets/images/imageCarousel/image1.jpg";
import PhotographerCardList from "../../organisms/PhotographerCards";
import Footer from "../../atoms/Footer";
import FilterSidebar from "../../molecules/SearchResultPageFilters"; 
import { Grid, Box } from "@mui/material";
import {
  rootContainerStyle,
  filterSidebarGridItemStyle,
  imageCarouselTitleStyleOverride,
} from "./styles";

import Navbar from "../../organisms/Navbar";

const imageUrls = [Image1, Image2];

const SearchResult: React.FC = () => {
  return (
    <>
    <Navbar/>
      <ImageCarousel
        images={imageUrls}
        title="Wedding Basic Package:  21 photographers found"
        titleStyleOverride={imageCarouselTitleStyleOverride}
      />
      <Box sx={rootContainerStyle}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sx={filterSidebarGridItemStyle}>
            <FilterSidebar />
          </Grid>
          <Grid item xs={12} md={8}>
            <PhotographerCardList />
          </Grid>
        </Grid>
      </Box>
      <Footer />
      </>
  );
};

export default SearchResult;
