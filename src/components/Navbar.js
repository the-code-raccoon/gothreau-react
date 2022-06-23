import { useState } from "react";
import { Nav, NavMenu, NavLogo, NavItem, Hamburger } from "./Navbar-styles";

export default function Navbar() {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  return (
    <Nav>
      <NavLogo>Gothreau</NavLogo>
      <NavMenu className={hamburgerActive ? "active" : ""}>
        <NavItem>
          <a href="/about">About</a>
        </NavItem>
        <NavItem>
          <a href="/music">Music</a>
        </NavItem>
        <NavItem>
          <a href="/contact">Contact</a>
        </NavItem>
        <NavItem>
          
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
