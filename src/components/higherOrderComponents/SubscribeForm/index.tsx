import React, { useState } from "react";
import {
  container,
  title,
  subtitle,
  form,
  input,
  button,
  successMessage,
} from "./styles";

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      console.log("Subscribed with email:", email);
    }
  };

  return (
    <div style={container}>
      <h2 style={title}>Subscribe to our emails</h2>
      <p style={subtitle}>
        Be the first to know about new photographers and exclusive offers.
      </p>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} style={form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={input}
          />
          <button type="submit" style={button}>
            →
          </button>
        </form>
      ) : (
        <p style={successMessage}>Thank you for subscribing!</p>
      )}
    </div>
  );
};

export default SubscribeForm;
