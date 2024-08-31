import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextButton from "../../atoms/TextButton";
import { searchBarContainer, searchBarItem } from "./styles";
import CustomDatePicker from "../../atoms/DatePicker";
import LocationSearch from "../../atoms/CustomTextField";
import PackageDropdown from "../../atoms/Dropdown";

const SearchBar: React.FC = () => {
  return (
    <Box sx={searchBarContainer}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3} sx={searchBarItem}>
          <LocationSearch/>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={searchBarItem}>
          <CustomDatePicker/>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={searchBarItem}>
          <PackageDropdown/>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={searchBarItem}>
          <TextButton text="Search" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
