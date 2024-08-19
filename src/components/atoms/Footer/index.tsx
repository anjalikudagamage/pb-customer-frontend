import React from "react";
import { Grid, Typography } from "@mui/material";
import { Home, HelpOutline, Info, Gavel } from "@mui/icons-material";
import {
  footerContainer,
  footerContent,
  leftColumn,
  headerContentWrapper,
  rightColumn,
  siteName,
  sectionHeader,
  sectionContent,
  paragraph,
  icon,
  copyright,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Grid container sx={footerContainer}>
      <Grid container sx={footerContent}>
        {/* Left Column */}
        <Grid item xs={12} md={4} sx={leftColumn}>
          <Typography sx={siteName}>ClickBooker</Typography>
          <Typography sx={paragraph}>
            ClickBooker is your go-to platform for finding and booking the best
            photographers. We offer a wide range of services to cater to all
            your photography needs.
          </Typography>
          <Typography sx={copyright}>© 2024 - Copyright</Typography>
        </Grid>
        {/* Right Column */}
        <Grid item xs={12} md={8} sx={rightColumn}>
          <Grid container spacing={2}>
            <Grid item xs={6} sm={3} sx={headerContentWrapper}>
              <Typography sx={sectionHeader}>
                <Home sx={icon} />
                Service
              </Typography>
              <Typography sx={sectionContent}>Pricing</Typography>
              <Typography sx={sectionContent}>Full Setup Help</Typography>
              <Typography sx={sectionContent}>
                All Service Businesses
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3} sx={headerContentWrapper}>
              <Typography sx={sectionHeader}>
                <HelpOutline sx={icon} />
                Help
              </Typography>
              <Typography sx={sectionContent}>Help Center</Typography>
              <Typography sx={sectionContent}>FAQ</Typography>
            </Grid>
            <Grid item xs={6} sm={3} sx={headerContentWrapper}>
              <Typography sx={sectionHeader}>
                <Info sx={icon} />
                About
              </Typography>
              <Typography sx={sectionContent}>About us</Typography>
              <Typography sx={sectionContent}>Contacts</Typography>
            </Grid>
            <Grid item xs={6} sm={3} sx={headerContentWrapper}>
              <Typography sx={sectionHeader}>
                <Gavel sx={icon} />
                Legal
              </Typography>
              <Typography sx={sectionContent}>Privacy Policy</Typography>
              <Typography sx={sectionContent}>Terms and Conditions</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;