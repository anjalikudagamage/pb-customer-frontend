export const container = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  backgroundColor: "#f8f4f1",
  color: "#333",
  fontFamily: "Arial, sans-serif",
};

export const title = {
  fontSize: "1.75rem",
  marginBottom: "0.5rem",
};

export const subtitle = {
  fontSize: "1rem",
  marginBottom: "1rem",
  color: "#666",
};

export const form = {
  display: "flex",
  alignItems: "center",
  border: "1px solid #333",
  padding: "0.5rem",
  borderRadius: "5px",
};

export const input = {
  border: "none",
  outline: "none",
  fontSize: "1rem",
  padding: "0.5rem",
  width: "200px",
  color: "#333",
};

export const button = {
  border: "none",
  background: "none",
  fontSize: "1rem",
  color: "#333",
  cursor: "pointer",
  marginLeft: "0.5rem",
};

export const successMessage = {
  fontSize: "1rem",
  color: "#28a745",
};
