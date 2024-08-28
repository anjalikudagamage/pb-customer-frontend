import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Container,
    Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type FAQ = {
    question: string;
    answer: string;
};

const faqs: FAQ[] = [
    {
        question: 'How can I Join GDG Eldoret?',
        answer: 'Join our GDG Community Here to become an official member.',
    },
    {
        question: 'Must I be from Eldoret?',
        answer: 'No, you do not need to be from Eldoret to join GDG Eldoret.',
    },
    {
        question: 'Do we have any subscription fee?',
        answer: 'No, there is no subscription fee required to join GDG Eldoret.',
    },
    {
        question: 'Where do I register for events early?',
        answer: 'You can register for events early on our official website.',
    },
];

const FAQSection: React.FC = () => {
    return (
        <Container maxWidth="md">
            <Typography variant="h4" component="h2" gutterBottom textAlign="center">
                Frequently Asked Questions (FAQs)
            </Typography>
            <Box>
                {faqs.map((faq, index) => (
                    <Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography variant="h6">{`Q${index + 1}. ${faq.question}`}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1">{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Container>
    );
};

export default FAQSection;

