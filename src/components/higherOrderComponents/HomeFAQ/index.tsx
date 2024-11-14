import React from "react";
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useStyles } from "./styles";

const faqs = [
  {
    category: "About Us",
    questions: [
      "How can I manage my photography business with your platform?",
      "Is the content on this website available in multiple languages?",
      "What does it mean to be a part of your photography booking platform?",
      "What should I do if I have more questions?",
    ],
  },
];

const links = [
  "About Us",
  "Client Testimonials",
  "Photography Packages",
  "List Your Services",
  "Portfolio and Metrics",
  "Bookings and Pricing",
];

const HomeFAQ: React.FC = () => {
  const classes = useStyles();

  return (
    <Container sx={classes.container}>
      <Box sx={classes.faqHeader}>
        <Typography variant="h3" sx={classes.title}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" sx={classes.description}>
          Got questions? Here you’ll find the answers most valued by our
          photographers, along with access to step-by-step guides and support.
        </Typography>
      </Box>

      <Grid container sx={classes.gridContainer}>
        <Grid item xs={12} md={4}>
          <Box sx={classes.linksContainer}>
            {links.map((link, index) => (
              <Link href="#" key={index} sx={classes.link}>
                {link}
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box>
            {faqs.map((faq, index) => (
              <Box key={index} sx={classes.faqCategory}>
                <Typography variant="h5" sx={classes.faqCategoryTitle}>
                  {faq.category}
                </Typography>
                {faq.questions.map((question, qIndex) => (
                  <Accordion key={qIndex} sx={classes.accordion}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${qIndex}-content`}
                      id={`panel${qIndex}-header`}
                      sx={classes.accordionSummary}
                    >
                      <Typography sx={classes.accordionTitle}>
                        {question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        This is where the answer to the question will go. You
                        can customize this section with specific details about
                        our photography services.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeFAQ;
