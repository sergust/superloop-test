import { FC } from "react";
import { Country } from "../../types/countries.interface.ts";

interface SelectedCountryProps {
  country: Country | null;
}

const SelectedCountry: FC<SelectedCountryProps> = ({ country }) => {
  if (!country) return null;

  return (
    <div className="mt-4">
      <h2>{country.name.common}</h2>
      <p>Official Name: {country.name.official}</p>
      <p>
        Currency: {Object.values(country.currencies)[0].name} (
        {Object.values(country.currencies)[0].symbol})
      </p>
      <p>
        <img src={country.flags[0]} alt="flag" className="w-16 inline" />
        <img
          src={country.flags[1]}
          alt="coat-of-arms"
          className="w-16 inline"
        />
      </p>
      <p>Drives on: {country.driveOn}</p>
    </div>
  );
};

export default SelectedCountry;
