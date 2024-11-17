export const containerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  padding: "0",
  minHeight: "700px",
};

export const imageContainerStyle = (imageOnRight: boolean) => ({
  position: "relative",
  width: "100%",
  minHeight: "500px",
  overflow: "hidden",
  padding: "0 0",
  order: imageOnRight ? 2 : 1,
  "@media (max-width: 960px)": {
    order: 1,
  },
});

export const imageBoxStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
};

export const textContainerStyle = (imageOnRight: boolean, color: string) => ({
  width: "100%",
  minHeight: "500px",
  pl: imageOnRight ? 10 : 0,
  pr: imageOnRight ? 0 : 10,
  backgroundColor: color,
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  order: imageOnRight ? 1 : 2,
  textAlign: "left",
  "@media (max-width: 960px)": {
    order: 2,
  },
  "@media (max-width: 870px)": {
    pl: 0,
    pr: 0,
    textAlign: "center",
  },
  "@media (max-width: 600px)": {
    pl: 5,
    pr: 5,
  },
});

export const getInnerContainerStyle = (maxWidth?: string) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "8px",
  width: "100%",
  maxWidth: maxWidth ?? "250px",
  "@media (max-width: 960px)": {
    maxWidth: "200px",
  },
  "@media (max-width: 870px)": {
    maxWidth: "400px",
    alignItems: "center",
  },
  "@media (max-width: 600px)": {
    maxWidth: "350px",
  },
});

export const titleStyle = {
  fontWeight: 400,
  fontSize: "35px",
  lineHeight: 1.2,
};

export const buttonBoxStyle = {
  marginTop: "20px",
};

export const titleTextStyle = {
  color: "primary.dark",
  fontWeight: 500,
  fontSize: 30,
  lineHeight: 1,
};
