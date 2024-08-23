import React from "react";
import ImageCarousel from "../../../components/organisms/ImageCarousel";
import Image1 from "../../../assets/images/imageCarousel/image1.jpg";
import Image2 from "../../../assets/images/imageCarousel/image2.jpg";
import PhotographerCardList from "../../organisms/PhotographerCards";
import Footer from "../../atoms/Footer";

const imageUrls = [Image1, Image2];

const SearchResult: React.FC = () => {
  return (
    <div>
      <ImageCarousel
        images={imageUrls}
        title="Wedding Basic Package:  21 photographers found"
        titleStyleOverride={{ color: "blue", fontSize: "1.5rem" }}
      />
      <PhotographerCardList/>
      <Footer/>
    </div>
  );
};

export default SearchResult;
