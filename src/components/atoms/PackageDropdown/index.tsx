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
    { label: "Basic Package", value: "basic" },
    { label: "Standard Package", value: "standard" },
    { label: "Premium Package", value: "premium" },
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
