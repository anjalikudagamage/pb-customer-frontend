import React from 'react';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const FilterSidebar: React.FC = () => {
    const [priceRange, setPriceRange] = React.useState<number[]>([10000, 200000]);

    const handlePriceChange = (_event: Event, newValue: number | number[]) => {
        setPriceRange(newValue as number[]);
    };

    return (
        <Box sx={{ padding: '16px', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
                Filter by:
            </Typography>

            <Box sx={{ marginBottom: '24px' }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                    Your budget (per package)
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '8px' }}>
                    LKR {priceRange[0]} - LKR {priceRange[1]}+
                </Typography>
                <Slider
                    value={priceRange}
                    onChange={handlePriceChange}
                    min={10000}
                    max={200000}
                    step={5000}
                    valueLabelDisplay="auto"
                    sx={{ color: '#1976d2' }}
                />
            </Box>

            <Box sx={{ marginBottom: '24px' }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                    Deals
                </Typography>
                <FormControlLabel control={<Checkbox />} label="Discounted packages" />
            </Box>

            <Box sx={{ marginBottom: '24px' }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                    Popular filters
                </Typography>
                <FormControlLabel control={<Checkbox />} label="Studio photography" />
                <FormControlLabel control={<Checkbox />} label="Outdoor photography" />
                <FormControlLabel control={<Checkbox />} label="Wedding packages" />
                <FormControlLabel control={<Checkbox />} label="Event coverage" />
                <FormControlLabel control={<Checkbox />} label="Photo editing included" />
                <FormControlLabel control={<Checkbox />} label="High-resolution images" />
                <FormControlLabel control={<Checkbox />} label="Photobook included" />
                <FormControlLabel control={<Checkbox />} label="Customizable packages" />
            </Box>
        </Box>
    );
};

export default FilterSidebar;
