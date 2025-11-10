import { useSelector } from "react-redux";
import { translations } from "../../utils/constant";
import { useRef } from "react";

const SearchForm = () => {
  const searchRef = useRef();
  const lang = useSelector((store) => store.config?.lang);

  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(searchRef.current.value);
  };
  return (
    <form
      className="bg-black p-4 rounded-sm shadow-sm mx-auto w-1/2 grid grid-cols-6 bg-opacity-50"
      onSubmit={(e) => handleSearch(e)}
    >
      <input
        ref={searchRef}
        className="p-2 text-white rounded-l-sm col-start-1 col-span-4"
        placeholder={translations[lang].gptSearchPlaceholder}
      />
      <button className="p-2 rounded-r-sm bg-red-500 col-start-5 col-span-2">
        {translations[lang].search}
      </button>
    </form>
  );
};

export default SearchForm;
