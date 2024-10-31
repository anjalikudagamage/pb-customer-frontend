import React from "react";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  outerContainerStyle,
  filterSidebarContainerStyle,
  sectionTitleStyle,
  sectionStyle,
  subsectionTitleStyle,
  subsectionContentStyle,
  sliderStyle,
  filterOptionsStyle,
} from "./styles";

const FilterSidebar: React.FC = () => {
  const [priceRange, setPriceRange] = React.useState<number[]>([10000, 200000]);

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  return (
    <Box sx={outerContainerStyle}>
      <Box sx={filterSidebarContainerStyle}>
        <Typography variant="h6" sx={sectionTitleStyle}>
          Filter by:
        </Typography>

        <Box sx={sectionStyle}>
          <Typography variant="body1" sx={subsectionTitleStyle}>
            Your budget (per package)
          </Typography>
          <Typography variant="body2" sx={subsectionContentStyle}>
            LKR {priceRange[0]} - LKR {priceRange[1]}+
          </Typography>
          <Slider
            value={priceRange}
            onChange={handlePriceChange}
            min={10000}
            max={200000}
            step={5000}
            valueLabelDisplay="auto"
            sx={sliderStyle}
          />
        </Box>

        <Box sx={sectionStyle}>
          <Typography variant="body1" sx={subsectionTitleStyle}>
            Deals
          </Typography>
          <Box sx={filterOptionsStyle}>
          <FormControlLabel
            control={<Checkbox />}
            label="Discounted packages"
          />
          </Box>
        </Box>

        <Box sx={sectionStyle}>
          <Typography variant="body1" sx={subsectionTitleStyle}>
            Popular filters
          </Typography>
          <Box sx={filterOptionsStyle}>
            <FormControlLabel control={<Checkbox />} label="Studio photography" />
            <FormControlLabel control={<Checkbox />} label="Outdoor photography" />
            <FormControlLabel control={<Checkbox />} label="Refundable" />
            <FormControlLabel control={<Checkbox />} label="Pay in advance" />
            <FormControlLabel control={<Checkbox />} label="Pay in cash" />
            <FormControlLabel control={<Checkbox />} label="Pay in card" />
            <FormControlLabel control={<Checkbox />} label="Photobook included" />
            <FormControlLabel control={<Checkbox />} label="Customizable packages" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FilterSidebar;
