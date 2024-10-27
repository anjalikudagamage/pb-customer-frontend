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
import Img from "../../../assets/images/photographerCard/image1.jpg";

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

  // If photographer data exists, format packageDetails for PackageTable
  const packages = photographer?.packageDetails
    ? Object.keys(photographer.packageDetails).map((name) => {
        const [hours, photos, locations, price] = photographer.packageDetails[name].split(", ");
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
        imageUrl={Img} // Use common image
        businessName={photographer?.businessName || ""}
        description={photographer?.description || ""}
      />
      <Typography sx={sectionTitleStyle}>About the Photographer</Typography>
      <Typography sx={photographerDetailsStyle}>
        {photographer?.description}
      </Typography>
      <PackageTable packages={packages} />
      <ReviewSection
        reviews={[
          { author: "John", rating: 5, comment: "Loved the photos!" },
          { author: "Anna", rating: 4, comment: "Great work, would hire again!" },
        ]}
      />
      <FAQSection
        faqs={[
          { question: "Do you provide raw images?", answer: "No, we provide only edited images." },
          { question: "Can you travel for events?", answer: "Yes, travel is possible for an additional cost." },
        ]}
      />
      <Footer />
    </div>
  );
};

export default PhotographerDetailsPage;
