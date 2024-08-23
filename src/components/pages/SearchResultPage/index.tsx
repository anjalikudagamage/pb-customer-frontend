import React from "react";
import ImageCarousel from "../../../components/organisms/ImageCarousel";

const imageUrls = [
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg",
  "https://example.com/image3.jpg",
];

const SearchResult: React.FC = () => {
  return (
    <div>
      <ImageCarousel
        images={imageUrls}
        title="Welcome to Our Website"
        titleStyleOverride={{ color: "blue", fontSize: "2rem" }}
      />
    </div>
  );
};

export default SearchResult;
