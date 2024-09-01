import { SxProps, Theme } from "@mui/material";

export const ButtonStyle: SxProps<Theme> = {
  height: "50px",
  width: "240px",
  backgroundImage:
    "linear-gradient(to right, #000000 0%, #53346D 51%, #000000 100%)",
  color: "white",

  padding: "15px 45px",
  textAlign: "center",
  textTransform: "uppercase",
  transition: "0.5s",
  backgroundSize: "200% auto",
  boxShadow: "0 0 8px #eee",
  borderRadius: "10px",
  display: "block",
  "&:hover": {
    backgroundPosition: "right center",
    color: "#fff",
    textDecoration: "none",
  },
};
