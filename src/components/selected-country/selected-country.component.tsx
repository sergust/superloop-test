import { FC } from "react";
import { Country } from "../../types/countries.interface.ts";

interface SelectedCountryProps {
  country: Country | null;
}

const SelectedCountry: FC<SelectedCountryProps> = ({ country }) => {
  if (!country) return null;

  return (
    <div>
      <h1 className="text-xl mb-4">Selected Country</h1>
      <h2>{country.name.common}</h2>
      <p>Official Name: {country.name.official}</p>
      <p>
        Currency: {Object.values(country.currencies)[0].name} (
        {Object.values(country.currencies)[0].symbol})
      </p>
      <div className="flex gap-5 h-fit">
        <img src={country.flags.svg} alt="flag" className="w-16 inline" />
        <img
          src={country.coatOfArms.svg}
          alt="coat-of-arms"
          className="w-16 inline"
        />
      </div>
      <p>Drives on: {country.car.side}</p>
    </div>
  );
};

export default SelectedCountry;
