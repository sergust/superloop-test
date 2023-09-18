import "./App.css";
import { useState } from "react";
import SelectedCountry from "./components/selected-country/selected-country.component.tsx";
import FilteredCountries from "./components/filtered-countries/filtered-countries.component.tsx";
import { Country } from "./types/countries.interface.ts";
import SearchInput from "./components/search-input/search-input.component.tsx";
import useFetchCountries from "./hooks/useFetchCountries.ts";

function App() {
  // Using React's useState to manage search string and selected country.
  // Chose useState for its simplicity and because the state management needs of this app are straightforward.
  const [search, setSearch] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  // Custom hook to fetch country data.
  // Decided to abstract this logic into a hook for reusability and better separation of concerns.
  const { countries, loading, error } = useFetchCountries();

  // Filtering countries based on search.
  // Using toLowerCase to make the search case-insensitive.
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container mx-auto p-4">
      {/* Processing the loading and error states for better UX experience */}
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          Loading...
        </div>
      ) : error ? (
        <div className="text-red-500 text-center mt-10">
          <p>An error occurred: {error.message}</p>
        </div>
      ) : (
        <>
          {/* Sticky search input and selected country at the top of the screen.
          Chose to make them sticky for better UX, so they are always visible. */}
          <div className="flex flex-wrap gap-5 justify-between align-top sticky top-0 bg-white py-5">
            <SearchInput search={search} setSearch={setSearch} />
            <SelectedCountry country={selectedCountry} />
          </div>

          <hr className="my-10" />

          {/* Filtered countries list.
          Passed setSelectedCountry as a prop to allow child components to update the state. */}
          <FilteredCountries
            countries={filteredCountries}
            setSelectedCountry={setSelectedCountry}
          />
        </>
      )}
    </div>
  );
}

export default App;
