import Logo from "../../assets/Logo.png";
import Burger from "../../assets/Burger.svg";
import "./header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import MobileMenu from "../MobileMenu";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <header>
      <img src={Logo} width={134} height={27} />
      <nav className="header_nav">
        <NavLink to="/" className="nav_item">Home</NavLink>
        <NavLink to="/about" className="nav_item">About</NavLink>
        <NavLink to="/services" className="nav_item">Servise</NavLink>
      </nav>
      <button className="contactMe">Contact Me</button>
      <button onClick={handleMenu} className="Burger">
        <img src={Burger}/>
      </button>
      {menuOpen && <MobileMenu handleMenu={handleMenu}/>}
    </header>
  );
};

export default Header;