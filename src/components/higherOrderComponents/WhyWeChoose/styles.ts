

export const useStyles = () => ({
  sliderContainer: {
    width: "100%",
    height: "600px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    color: "#fff",
  },
  arrowButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#fff",
    "&:first-of-type": {
      left: "10px",
    },
    "&:last-of-type": {
      right: "10px",
    },
  },
  title: {
    fontWeight: "bold",
    marginBottom: "10px",
    fontSize: "40px"
  },
  description: {
    marginTop: "15px",
    paddingLeft: "150px",
    paddingRight: "150px",
  },
});
