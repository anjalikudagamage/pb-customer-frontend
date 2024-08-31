import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CustomTextField from "../../atoms/CustomTextField";
import TextButton from "../../atoms/TextButton";
import { searchBarContainer, searchBarItem } from "./styles";
import Dropdown from "../../atoms/Dropdown";
import CustomDatePicker from "../../atoms/DatePicker";

const names = [
  "Wedding Packages",
  "Portrait Packages",
  "Event Packages",
  "Commercial Packages",
  "Family Packages",
];

const SearchBar: React.FC = () => {
  return (
    <Box sx={searchBarContainer}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4} sx={searchBarItem}>
          <CustomTextField placeholder="Sri Lanka" />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CustomDatePicker/>
        </Grid>
        <Grid item xs={12} sm={6} md={3} sx={searchBarItem}>
          <Dropdown
            placeholder="Select items"
            disabledPlaceholder="Select items"
            names={names}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2} sx={searchBarItem}>
          <TextButton text="Search" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
