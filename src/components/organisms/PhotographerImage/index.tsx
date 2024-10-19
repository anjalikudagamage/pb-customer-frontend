import React from 'react'; 
import { Box, Typography } from '@mui/material';
import { heroContainer, title, subtitle } from './styles';

interface PhotographerImageProps {
    imageUrl: string;
    name: string;
    description: string;
}

const PhotographerImage: React.FC<PhotographerImageProps> = ({ imageUrl, name, description }) => {
    return (
        <Box sx={{ ...heroContainer, backgroundImage: `url(${imageUrl})` }}>
            <Typography variant="h4" sx={title}>
                {name}
            </Typography>
            <Typography variant="h6" sx={subtitle}>
                {description}
            </Typography>
        </Box>
    );
}

export default PhotographerImage;

