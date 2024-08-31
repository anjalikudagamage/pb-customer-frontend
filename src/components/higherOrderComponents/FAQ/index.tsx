import React from 'react';
import { Container, Typography, Box, Accordion, AccordionSummary, AccordionDetails, Link, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStyles } from './styles';

const faqs = [
    {
        category: 'About us',
        questions: [
            'How will I manage my business with you?',
            'Is the content on this website available in other languages?',
            'What does it mean to be a part of our booking platform?',
            'What if I have more questions?',
        ],
    },
];

const links = [
    'About us',
    'Guest relations',
    'One Key™',
    'Property listing',
    'Ranking and metrics',
    'Reservations and rates',
];

const FAQPage: React.FC = () => {
    const classes = useStyles();

    return (
        <Container sx={classes.container}>
            <Box sx={classes.faqHeader}>
                <Typography variant="h3" sx={classes.title}>
                    FAQs
                </Typography>
                <Typography variant="body1" sx={classes.description}>
                    Have questions? Here you'll find the answers most valued by our partners, along with access to step-by-step instructions and support.
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
                                            <Typography sx={classes.accordionTitle}>{question}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                This is where the answer to the question will go. You can customize this part with real content.
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

export default FAQPage;
