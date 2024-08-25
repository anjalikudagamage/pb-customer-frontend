import React from "react";

interface Package {
  name: string;
  price: string;
  details: string;
}

const PackagesTable: React.FC<{ packages: Package[] }> = ({ packages }) => {
  return (
    <div>
      <h2>Available Packages</h2>
      <table>
        <thead>
          <tr>
            <th>Package</th>
            <th>Price</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg, index) => (
            <tr key={index}>
              <td>{pkg.name}</td>
              <td>{pkg.price}</td>
              <td>{pkg.details}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PackagesTable;
