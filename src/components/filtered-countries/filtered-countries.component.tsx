import { FC } from "react";
import { Country } from "../../types/countries.interface.ts";
interface FilteredCountriesProps {
  countries: Country[];
  setSelectedCountry: (country: Country) => void;
}

const FilteredCountries: FC<FilteredCountriesProps> = ({
  countries,
  setSelectedCountry,
}) => {
  return (
    <div>
      {countries.map((country, index) => (
        <div
          key={index}
          className="cursor-pointer hover:bg-gray-200 transition-colors p-2"
          onClick={() => setSelectedCountry(country)}
        >
          {country.flag} {country.name.common}
        </div>
      ))}
    </div>
  );
};

export default FilteredCountries;
