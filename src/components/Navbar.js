import { useState } from "react";

import { NavLink } from "react-router-dom";

import { Nav, NavMenu, NavLogo, NavItem, Hamburger } from "./Navbar-styles";

export default function Navbar() {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const closeMenu = () => {
    setHamburgerActive((prev) => !prev);
  };

  return (
    <Nav>
      <NavLogo>Gothreau</NavLogo>
      <NavMenu className={hamburgerActive ? "active" : ""}>
        <NavItem onClick={closeMenu}>
          <NavLink to="about">About</NavLink>
        </NavItem>
        <NavItem onClick={closeMenu}>
          <NavLink to="music">Music</NavLink>
        </NavItem>
        <NavItem onClick={closeMenu}>
          <NavLink to="contact">Contact</NavLink>
        </NavItem>
      </NavMenu>
      <Hamburger
        className={hamburgerActive ? "active" : ""}
        onClick={() => {
          setHamburgerActive((prev) => !prev);
        }}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </Hamburger>
    </Nav>
  );
}
