import React from "react";
import ImageCarousel from "../../../components/organisms/ImageCarousel";
import Image1 from "../../../assets/images/imageCarousel/image1.jpg";
import Image2 from "../../../assets/images/imageCarousel/image2.jpg";
import PhotographerCard from "../../organisms/PhotographerCard";

const imageUrls = [Image1, Image2];

const SearchResult: React.FC = () => {
  return (
    <div>
      <ImageCarousel
        images={imageUrls}
        title="Wedding Basic Package:  21 photographers found"
        titleStyleOverride={{ color: "blue", fontSize: "1.5rem" }}
      />
      <PhotographerCard
        imageUrl="path/to/image.jpg"
        title="CHANA BRICKS BUNGALOW"
        location="Rathapura"
        distance="6.1 km from centre"
        roomType="Double Room"
        features={[
          "Free cancellation",
          "No prepayment needed - pay at the property",
        ]}
        price="LKR 2,108"
        availability="Only 4 rooms left at this price on our site"
        rating="8.8"
        reviews="10"
      />
    </div>
  );
};

export default SearchResult;
