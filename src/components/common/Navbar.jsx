import "./Navbar.css";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="search-box">
        <Search size={18} />

        <input placeholder="Search algorithms..." />
      </div>

      <div className="profile">S</div>
    </nav>
  );
};

export default Navbar;