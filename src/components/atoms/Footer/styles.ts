import { SxProps } from "@mui/system";

export const footerContainer: SxProps = {
  backgroundColor: "black",
  color: "#fff",
  px: { xs: 3, sm: 5, md: 15 },
  py: { xs: 1, sm: 2, md: 5 },
};

export const footerContent: SxProps = {
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  padding: "20px 10px",
  justifyContent: "space-between",
  boxSizing: "border-box",
  width: "100%",
};

export const leftColumn: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: { xs: "center", md: "flex-start" },
  justifyContent: "center",
  textAlign: { xs: "center", md: "left" },
  boxSizing: "border-box",
  marginTop: { xs: "-10px", md: "-50px" },
};

export const rightColumn: SxProps = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: { xs: "center", md: "flex-start" },
  marginTop: { xs: 0, md: 0 },
};

export const headerContentWrapper: SxProps = {
  minWidth: "150px",
  flex: "1 1 calc(50% - 10px)",
  marginBottom: "10px",
  textAlign: { xs: "center", md: "left" },
};

export const siteName: SxProps = {
  fontWeight: 600,
  fontSize: { xs: 20, md: 30 },
  paddingTop: { xs: "10px", md: "15px" },
};

export const sectionHeader: SxProps = {
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  fontSize: { xs: 14, md: 16 },
  fontWeight: "bold",
};

export const sectionContent: SxProps = {
  marginBottom: "18px",
  fontSize: { xs: 12, md: 14 },
};

export const paragraph: SxProps = {
  marginBottom: "10px",
  padding: "0 30px 0 2px",
  fontSize: { xs: 12, md: 14 },
};

export const icon: SxProps = {
  marginRight: "8px",
  fontSize: { xs: 14, md: 16 },
  verticalAlign: "middle",
};

export const copyright: SxProps = {
  fontSize: { xs: 10, md: 12 },
  color: "rgba(255, 255, 255, 0.7)",
};
