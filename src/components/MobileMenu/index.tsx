import { NavLink } from "react-router-dom";
import "./mobile.css";

const MobileMenu = ({ handleMenu }) => {
  return (
    <div className="mobile_menu" onClick={handleMenu}>
      <nav className="mobile_menu_nav">
        <NavLink to="/" className="nav_item">
          Home
        </NavLink>
        <NavLink to="/about" className="nav_item">
          About
        </NavLink>
        <NavLink to="/services" className="nav_item">
          Servise
        </NavLink>
      </nav>
    </div>
  );
};

export default MobileMenu;
