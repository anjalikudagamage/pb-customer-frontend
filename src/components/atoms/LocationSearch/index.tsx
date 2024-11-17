import React, { useState, useEffect, useCallback } from "react";
import Select from "react-select";
import { useJsApiLoader } from "@react-google-maps/api";
import { locationSelectStyles } from "./styles";

const libraries: Array<"places"> = ["places"];

const LocationSearch: React.FC = () => {
  const [options, setOptions] = useState<{ label: string; value: string }[]>(
    []
  );
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_API_KEY",
    libraries,
  });

  const fetchPredictions = useCallback(
    (input: string) => {
      if (!isLoaded) return;
      const autocomplete = new google.maps.places.AutocompleteService();
      autocomplete.getPlacePredictions({ input }, (predictions, status) => {
        if (
          status === google.maps.places.PlacesServiceStatus.OK &&
          predictions
        ) {
          setOptions(
            predictions.map((p) => ({
              label: p.description,
              value: p.place_id,
            }))
          );
        }
      });
    },
    [isLoaded]
  );

  useEffect(() => {
    if (!isLoaded) return;
  }, [isLoaded]);

  const handleChange = (
    selectedOption: { label: string; value: string } | null
  ) => {
    if (selectedOption) {
      const placeId = selectedOption.value;

      const placeService = new google.maps.places.PlacesService(
        document.createElement("div")
      );
      placeService.getDetails({ placeId }, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && place) {
          setSelectedLocation({
            lat: place.geometry?.location?.lat() || 0,
            lng: place.geometry?.location?.lng() || 0,
          });
        }
      });
    }
  };

  return (
    <div>
      {isLoaded ? (
        <Select
          options={options}
          onInputChange={(inputValue) => fetchPredictions(inputValue)}
          onChange={handleChange}
          placeholder="Search for a location"
          styles={locationSelectStyles}
        />
      ) : (
        <p>Loading...</p>
      )}
      {selectedLocation && (
        <div>
          <p>Latitude: {selectedLocation.lat}</p>
          <p>Longitude: {selectedLocation.lng}</p>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
