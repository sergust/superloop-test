import { FC } from "react";

type SearchInputProps = {
  search: string;
  setSearch: (search: string) => void;
};

const SearchInput: FC<SearchInputProps> = ({ search, setSearch }) => {
  return (
    <div>
      <h1 className="text-xl mb-4">Search for a country:</h1>

      <input
        className="border p-2 h-fit"
        type="text"
        placeholder="Search country"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
