import "./App.css";
import { useState } from "react";
import SelectedCountry from "./components/selected-country/selected-country.component.tsx";
import FilteredCountries from "./components/filtered-countries/filtered-countries.component.tsx";
import { Country } from "./types/countries.interface.ts";
import SearchInput from "./components/search-input/search-input.component.tsx";
import useFetchCountries from "./hooks/useFetchCountries.ts";

function App() {
  const [search, setSearch] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const { countries, loading, error } = useFetchCountries();

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap gap-5 justify-between align-top sticky top-0 bg-white py-5">
        <SearchInput search={search} setSearch={setSearch} />
        <SelectedCountry country={selectedCountry} />
      </div>

      <hr className="my-10" />

      <FilteredCountries
        countries={filteredCountries}
        setSelectedCountry={setSelectedCountry}
      />
    </div>
  );
}

export default App;
