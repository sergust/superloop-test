import { FC } from "react";

type SearchInputProps = {
  search: string;
  setSearch: (search: string) => void;
};

const SearchInput: FC<SearchInputProps> = ({ search, setSearch }) => {
  return (
    <input
      className="border p-2"
      type="text"
      placeholder="Search country"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchInput;
