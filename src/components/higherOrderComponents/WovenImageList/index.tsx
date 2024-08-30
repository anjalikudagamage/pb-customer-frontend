import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WeddingImage1 from "../../../assets/images/WovenImage/image2.jpg";
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
    img: WeddingImage1,
    title: "Wedding Basic Package",
  },
  {
    img: WeddingImage1,
    title: "Wedding Standard Package",
  },
  {
    img: WeddingImage1,
    title: "Wedding Premium Package",
  },
  {
    img: WeddingImage1,
    title: "Portrait Mini Session",
  },
  {
    img: WeddingImage1,
    title: "Portrait Standard Session",
  },
  {
    img: WeddingImage1,
    title: "Portrait Deluxe Session",
  },
  {
    img: WeddingImage1,
    title: "Event Basic Package",
  },
  {
    img: WeddingImage1,
    title: "Event Standard Package",
  },
  {
    img: WeddingImage1,
    title: "Event Extended Package",
  },
  {
    img: WeddingImage1,
    title: "Commercial Product Photography",
  },
  {
    img: WeddingImage1,
    title: "Commercial Branding Session",
  },
  {
    img: WeddingImage1,
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
