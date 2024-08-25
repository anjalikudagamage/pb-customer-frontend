import React from "react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC<{ faqs: FAQ[] }> = ({ faqs }) => {
  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <strong>{faq.question}</strong>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
