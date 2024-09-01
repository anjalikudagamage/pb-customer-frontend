export const useStyles = () => ({
  container: {
    padding: "2rem 0",
  },
  faqHeader: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  description: {
    color: "#6c757d",
  },
  gridContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  linksContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingRight: "2rem",
  },
  link: {
    display: "block",
    marginBottom: "1rem",
    color: "#007bff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  faqCategory: {
    marginBottom: "2rem",
  },
  faqCategoryTitle: {
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  accordion: {
    boxShadow: "none",
    border: "1px solid #ddd",
    "&:not(:last-child)": {
      borderBottom: "none",
    },
    "&:before": {
      display: "none",
    },
  },
  accordionSummary: {
    backgroundColor: "#f7f7f7",
  },
  accordionTitle: {
    fontWeight: "bold",
  },
});
