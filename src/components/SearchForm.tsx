import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useSearch from "../state-management/meals/store";

const SearchForm = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();

  const searchHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      setSearchQuery(searchQuery);
      navigate("/search");
    }
  };
  return (
    <form
      onSubmit={(e) => searchHandler(e)}
      className="flex items-center justify-end"
    >
      <div className="relative bg-inherit overflow-hidden rounded-full  flex items-center justify-center">
        <FiSearch className=" text-base absolute top-[calc(50%-8px)] left-2 text-neutral-500 max-sm:text-sm max-sm:top-[calc(50%-7px)]" />
        <input
          type="search"
          placeholder="Search..."
          className="bg-neutral-100 text-sm pl-7 py-1 rounded-l-full focus:outline-none text-black max-sm:text-xs max-sm:pl-6 max-sm:w-40"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
        <button className=" bg-green-500 text-sm text-white py-1 px-2 rounded-r-full focus:outline-none max-sm:text-xs">
          search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
