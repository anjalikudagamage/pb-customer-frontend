import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { fetchPhotographers } from "../../../redux/actions/photographerActions";
import PhotographerCard from "../../molecules/PhotographerCard";
import { photographerCardListContainer } from "./styles";
import { IPhotographerDetails } from "../../../redux/slice/photographerSlice";

const PhotographerCardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { photographers, isLoading, error } = useAppSelector(
    (state) => state.photographer
  );

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedPackage = searchParams.get("package");

  // Helper function to match selectedPackage to backend package names
  const formatPackageName = (packageName: string | null) => {
    if (!packageName) return null;
    const lowerPackage = packageName.toLowerCase();
    if (lowerPackage === "wedding") return "Wedding Package";
    if (lowerPackage === "event") return "Event Package";
    if (lowerPackage === "portrait") return "Portrait Standard Package";
    if (lowerPackage === "commercial") return "Commercial Package";
    return packageName;
  };

  const formattedPackage = formatPackageName(selectedPackage);

  useEffect(() => {
    dispatch(fetchPhotographers());
  }, [dispatch]);

  const filteredPhotographers = photographers?.filter((photographer: IPhotographerDetails) =>
    formattedPackage
      ? Object.keys(photographer.packageDetails).some(
          (packageName) => packageName === formattedPackage
        )
      : true
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Box sx={photographerCardListContainer}>
      {filteredPhotographers &&
        filteredPhotographers.map((photographer, index) => {
          const { businessName, packageDetails } = photographer;
          const packageInfo = packageDetails[formattedPackage!];
          const features = packageInfo.split(", ").slice(0, -1);
          const price = packageInfo.split(", ").slice(-1)[0];

          return (
            <PhotographerCard
              key={index}
              imageUrl={"image_url_placeholder"}
              businessName={businessName}
              packageType={formattedPackage!}
              features={features}
              price={price}
              availability="Available"
              rating="4.5"
              reviews="10"
            />
          );
        })}
    </Box>
  );
};

export default PhotographerCardList;
