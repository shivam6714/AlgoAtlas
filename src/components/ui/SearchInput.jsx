import "./SearchInput.css";
import { Search } from "lucide-react";

const SearchInput = ({
  placeholder = "Search...",
  value,
  onChange,
}) => {
  return (
    <div className="search-input">
      <Search size={18} />

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;