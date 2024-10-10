import React, { useState } from "react";
import Select from "react-select";
import { packageSelectStyles } from "./styles";

interface PackageOption {
  label: string;
  value: string;
}

const PackageDropdown: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageOption | null>(
    null
  );

  const packageOptions: PackageOption[] = [
    { label: "Wedding Package", value: "wedding" },
    { label: "Portrait Standard Package", value: "portrait" },
    { label: "Event Package", value: "event" },
    { label: "Commercial Package", value: "commercial" },
  ];

  const handleChange = (selectedOption: PackageOption | null) => {
    setSelectedPackage(selectedOption);
  };

  return (
    <Select
      options={packageOptions}
      value={selectedPackage}
      onChange={handleChange}
      placeholder="Select a package"
      styles={packageSelectStyles}
    />
  );
};

export default PackageDropdown;
