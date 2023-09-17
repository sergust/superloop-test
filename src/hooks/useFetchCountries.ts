import { useState, useEffect } from "react";
import { Country } from "../types/countries.interface.ts";

const useFetchCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://restcountries.com/v3.1/all");
        setCountries(await response.json());
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { countries, loading, error };
};

export default useFetchCountries;
