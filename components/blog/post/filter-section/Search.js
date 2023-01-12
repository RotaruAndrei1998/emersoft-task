import { HiSearch } from "react-icons/hi";

const Search = ({ handleSearch }) => {
  return (
    <div>
      <div className="relative mt-1 rounded-md shadow-sm w-72 border border-gray-300">
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full rounded-md border-gray-300 pl-2 py-3 pr-7 focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Search for post title"
          onChange={(value) => handleSearch(value.target.value)}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-1">
          <HiSearch className="w-5 h-5"/>
        </div>
      </div>
    </div>
  );
};

export default Search;
