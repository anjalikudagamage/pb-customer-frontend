import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { fetchPhotographers } from "../../../redux/actions/photographerActions";
import Navbar from "../../organisms/Navbar";
import PhotographerImage from "../../organisms/PhotographerImage";
import PackageTable from "../../organisms/PackageTable";
import ReviewSection from "../../organisms/ReviewSection";
import FAQSection from "../../organisms/FAQSection";
import Footer from "../../atoms/Footer";
import { sectionTitleStyle, photographerDetailsStyle } from "./styles";
import Img from "../../../assets/images/photographer/image1.jpg";
import Img1 from "../../../assets/images/Review/Image1.jpg";
import Img2 from "../../../assets/images/Review/Image2.jpg";
import Img3 from "../../../assets/images/Review/image3.jpg";

const PhotographerDetailsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const selectedBusinessName = location.state?.businessName;

  const { photographers, isLoading, error } = useAppSelector(
    (state) => state.photographer
  );

  useEffect(() => {
    if (!photographers) {
      dispatch(fetchPhotographers());
    }
  }, [dispatch, photographers]);

  const photographer = photographers?.find(
    (p) => p.businessName === selectedBusinessName
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const packages = photographer?.packageDetails
    ? Object.keys(photographer.packageDetails).map((name) => {
        const [hours, photos, locations, price] =
          photographer.packageDetails[name].split(", ");
        return {
          name,
          features: [hours, photos, locations],
          price,
        };
      })
    : [];

  return (
    <div>
      <Navbar />
      <PhotographerImage
        imageUrl={Img}
        businessName={photographer?.businessName || ""}
        description={photographer?.description || ""}
      />
      <Typography sx={sectionTitleStyle}>About the Photographer</Typography>
      <Typography sx={photographerDetailsStyle}>
        As a dedicated photographer, my goal is to turn every moment into a
        lasting memory. With years of experience across various photography
        styles—whether portrait, event, commercial, or lifestyle photography—I
        bring both technical expertise and a creative eye to every project. My
        approach centers on capturing authentic expressions and unique details
        that make each story truly personal. From the warmth of a candid smile
        to the grandeur of life’s biggest events, I strive to create images that
        resonate deeply and beautifully. Together, let’s craft images that
        you’ll cherish for a lifetime, reflecting the moments that mean the most
        to you
      </Typography>
      <PackageTable packages={packages} />
      <ReviewSection
        reviews={[
          {
            image: Img1,
            author: "John",
            rating: 5,
            comment:
              "The photos were absolutely stunning! Every detail was captured perfectly, and the quality exceeded all my expectations. The whole experience felt comfortable and professional, and I’m thrilled with the final results. I highly recommend this photographer to anyone looking for quality and creativity!",
          },
          {
            image: Img2,
            author: "Anna",
            rating: 4,
            comment:
              "The session was amazing, and the photographer made us feel at ease right away. They really listened to what I wanted and brought my ideas to life with such creativity! The photos turned out beautifully, and I’m so pleased. Would definitely hire again for future events or sessions!",
          },
          {
            image: Img3,
            author: "Michael",
            rating: 5,
            comment:
              "Incredible experience! From start to finish, the photographer was professional, attentive, and so creative. The photos perfectly capture our special day, and looking at them brings back such wonderful memories. I couldn’t have asked for a better experience or more beautiful photos!",
          },
        ]}
      />
      <FAQSection
        faqs={[
          {
            question: "Do you provide raw images?",
            answer: "No, we provide only edited images.",
          },
          {
            question: "Can you travel for events?",
            answer: "Yes, travel is possible for an additional cost.",
          },
        ]}
      />
      <Footer />
    </div>
  );
};

export default PhotographerDetailsPage;
