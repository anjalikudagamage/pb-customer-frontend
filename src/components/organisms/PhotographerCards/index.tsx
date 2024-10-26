import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { fetchPhotographers } from "../../../redux/actions/photographerActions";
import PhotographerCard from "../../molecules/PhotographerCard";
import { photographerCardListContainer } from "./styles";
import { IPhotographerDetails } from "../../../redux/slice/photographerSlice"; // Import photographer type

const PhotographerCardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { photographers, isLoading, error } = useAppSelector(
    (state) => state.photographer
  );

  useEffect(() => {
    dispatch(fetchPhotographers());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Box sx={photographerCardListContainer}>
      {photographers &&
        photographers.map((photographer: IPhotographerDetails, index: number) => {
          const { businessName, packageDetails } = photographer;
          const [packageType, packageInfo] = Object.entries(packageDetails)[0] as [
            string,
            string
          ];
          const features = packageInfo.split(", ").slice(0, -1);
          const price = packageInfo.split(", ").slice(-1)[0];

          return (
            <PhotographerCard
              key={index}
              imageUrl={"image_url_placeholder"} // Replace with actual image or placeholder
              businessName={businessName}
              packageType={packageType}
              features={features}
              price={price}
              availability="Available" // Example availability text
              rating="4.5" // Placeholder for rating
              reviews="10" // Placeholder for reviews
            />
          );
        })}
    </Box>
  );
};

export default PhotographerCardList;
