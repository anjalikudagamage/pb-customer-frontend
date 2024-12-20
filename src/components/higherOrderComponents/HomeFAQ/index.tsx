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

import {
  container,
  faqHeader,
  title,
  description,
  gridContainer,
  linksContainer,
  link,
  faqCategory,
  faqCategoryTitle,
  accordion,
  accordionSummary,
  accordionTitle,
  answer
} from "./styles";

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
  return (
    <Container sx={container}>
      <Box sx={faqHeader}>
        <Typography variant="h3" sx={title}>
          Frequently Asked Questions
        </Typography>
        <Typography variant="body1" sx={description}>
          Got questions? Here you’ll find the answers most valued by our
          photographers, along with access to step-by-step guides and support.
        </Typography>
      </Box>

      <Grid container sx={gridContainer}>
        <Grid item xs={12} md={4}>
          <Box sx={linksContainer}>
            {links.map((linkItem, index) => (
              <Link href="#" key={index} sx={link}>
                {linkItem}
              </Link>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box>
            {faqs.map((faq, index) => (
              <Box key={index} sx={faqCategory}>
                <Typography variant="h5" sx={faqCategoryTitle}>
                  {faq.category}
                </Typography>
                {faq.questions.map((question, qIndex) => (
                  <Accordion key={qIndex} sx={accordion}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${qIndex}-content`}
                      id={`panel${qIndex}-header`}
                      sx={accordionSummary}
                    >
                      <Typography sx={accordionTitle}>{question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={answer}>
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
