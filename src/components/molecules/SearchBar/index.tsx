import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextButton from "../../atoms/TextButton";
import { searchBarContainer, searchBarItem } from "./styles";
import CustomDatePicker from "../../atoms/CustomDatePicker";
import LocationSearch from "../../atoms/LocationSearch";
import PackageDropdown from "../../atoms/PackageDropdown";
import { useNavigate } from "react-router-dom";

const SearchBar: React.FC = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/search")
  }
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
          <TextButton text="Search" onClick={handleClick}/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
