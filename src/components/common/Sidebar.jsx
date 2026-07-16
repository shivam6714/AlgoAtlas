import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { navigation } from "../../data/navigation";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">AlgoAtlas</div>

      <nav className="menu">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <Icon />

              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;