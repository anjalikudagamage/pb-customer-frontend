import React, { useState } from "react";
import ImageCarousel from "../../../components/organisms/ImageCarousel";
import Image1 from "../../../assets/images/ImageCarousel/image3.jpg";
import Image2 from "../../../assets/images/ImageCarousel/image4.jpg";
import Image3 from "../../../assets/images/ImageCarousel/image5.jpg";
import PhotographerCardList from "../../organisms/PhotographerCardList";
import Footer from "../../atoms/Footer";
import FilterSidebar from "../../molecules/FilterSidebar";
import { Grid, Box } from "@mui/material";
import {
  rootContainerStyle,
  filterSidebarGridItemStyle,
  imageCarouselTitleStyleOverride,
} from "./styles";
import Navbar from "../../organisms/Navbar";

const imageUrls = [Image1, Image2, Image3];

const SearchResultPage: React.FC = () => {
  const [searchCount, setSearchCount] = useState(0);
  const formattedPackage = "Selected Package";

  return (
    <>
      <Navbar />
      <ImageCarousel
        images={imageUrls}
        title={`${formattedPackage}: ${searchCount} photographers found`}
        titleStyleOverride={imageCarouselTitleStyleOverride}
      />
      <Box sx={rootContainerStyle}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sx={filterSidebarGridItemStyle}>
            <FilterSidebar />
          </Grid>
          <Grid item xs={12} md={8}>
            <PhotographerCardList onSearchCount={setSearchCount} />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default SearchResultPage;
