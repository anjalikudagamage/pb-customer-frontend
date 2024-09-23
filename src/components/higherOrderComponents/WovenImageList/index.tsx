import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import img1 from "../../../assets/images/WovenImage/image1.jpg";
import img2 from "../../../assets/images/WovenImage/image2.jpg";
import img3 from "../../../assets/images/WovenImage/image3.jpg";
import img4 from "../../../assets/images/WovenImage/image4.jpg";
import img5 from "../../../assets/images/WovenImage/image5.jpg";
import img6 from "../../../assets/images/WovenImage/image6.jpg";
import img7 from "../../../assets/images/WovenImage/image7.jpg";
import img8 from "../../../assets/images/WovenImage/image8.jpg";
import img9 from "../../../assets/images/WovenImage/image9.jpg";
import img10 from "../../../assets/images/WovenImage/image10.jpg";
import img11 from "../../../assets/images/WovenImage/image11.jpg";
import img12 from "../../../assets/images/WovenImage/image12.jpg";
import {
  containerStyles,
  topicStyles,
  paragraphStyles,
  imageListStyles,
  imageListItemBoxStyles,
} from "./styles";

interface ItemData {
  img: string;
  title: string;
}

const itemData: ItemData[] = [
  {
    img:img1,
    title: "Wedding Basic Package",
  },
  {
    img: img2,
    title: "Wedding Standard Package",
  },
  {
    img: img3,
    title: "Wedding Premium Package",
  },
  {
    img: img4,
    title: "Portrait Mini Session",
  },
  {
    img: img6,
    title: "Portrait Standard Session",
  },
  {
    img: img5,
    title: "Portrait Deluxe Session",
  },
  {
    img: img7,
    title: "Event Basic Package",
  },
  {
    img: img8,
    title: "Event Standard Package",
  },
  {
    img: img9,
    title: "Event Extended Package",
  },
  {
    img: img10,
    title: "Commercial Product Photography",
  },
  {
    img: img11,
    title: "Commercial Branding Session",
  },
  {
    img: img12,
    title: "Full Day Commercial Shoot",
  },
];

const WovenImageList: React.FC = () => {
  return (
    <Box sx={containerStyles}>
      {/* Topic */}
      <Typography variant="h4" sx={topicStyles}>
        Choose Your Package
      </Typography>

      {/* Paragraph */}
      <Typography variant="body1" sx={paragraphStyles}>
        Choose the package that best fits your needs for a stunning photographer
        shoot. Whether you’re looking for a quick session or a full day of
        coverage, we have options tailored to capture your vision perfectly.
      </Typography>

      {/* Image List */}
      <ImageList sx={imageListStyles} variant="woven" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.title} sx={{ position: "relative" }}>
            <img
              srcSet={`${item.img}?w=251&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=251&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ width: "100%", height: "100%" }}
            />
            <Box sx={imageListItemBoxStyles}>
              <a
                href={`#${item.title}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography variant="subtitle1">{item.title}</Typography>
              </a>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default WovenImageList;
