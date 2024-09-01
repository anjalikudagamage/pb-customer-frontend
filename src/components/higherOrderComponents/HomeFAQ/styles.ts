export const useStyles = () => ({
  container: {
    padding: "8rem 0",
  },
  faqHeader: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  title: {
    color: "#1A4870",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  description: {
    color: "#6c757d",
    padding: "0 15rem",
    marginBottom: "5rem",
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
    color: "#536493",
    textDecoration: "none",
    "&:hover": {
      fontWeight: "bold",
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
    border: "none",
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
