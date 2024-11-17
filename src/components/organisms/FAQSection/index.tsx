import React, { useState } from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  faqContainerStyles,
  faqItemStyles,
  buttonContainerStyles,
  moreTextStyles,
  demoButtonStyles,
  accordionStyles,
} from "./styles";

type FAQ = {
  question: string;
  answer: string;
};

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container sx={faqContainerStyles}>
      <Typography variant="h3" gutterBottom textAlign="center" sx={{fontSize: "40px", marginBottom: "50px"}}>
        All the A's to your Q's
      </Typography>
      <Box sx={faqItemStyles}>
        {faqs.map((faq, index) => (
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            key={index}
            sx={accordionStyles}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx ={{fontSize: "18px", fontWeight: "bold"}}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx ={{fontSize: "18px", color: "gray"}}>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box sx={buttonContainerStyles}>
        <Typography variant="body1" sx={moreTextStyles}>
          Still have questions?
        </Typography>
        <Typography variant="body2" textAlign="center" sx ={{fontSize: "18px", color: "gray"}}>
          Book a call with our team to learn how we can help you change the way
          you manage your business.
        </Typography>
        <Button variant="contained" sx={demoButtonStyles}>
          Book a demo
        </Button>
      </Box>
    </Container>
  );
};

export default FAQSection;
