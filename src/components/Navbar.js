import { useState } from "react";
import { Nav, NavMenu, NavLogo, NavItem, Hamburger } from "./Navbar-styles";

export default function Navbar() {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  return (
    <Nav>
      <NavLogo>Gothreau</NavLogo>
      <NavMenu className={hamburgerActive ? "" : "active"}>
        <NavItem>
          <a href="/about" class="nav-link">
            About
          </a>
        </NavItem>
        <NavItem>
          <a href="/music" class="nav-link">
            Music
          </a>
        </NavItem>
        <NavItem>
          <a href="/contact" class="nav-link">
            Contact
          </a>
        </NavItem>
      </NavMenu>
      <Hamburger
        className={hamburgerActive ? "active" : ""}
        onClick={() => {
          setHamburgerActive((prev) => !prev);
        }}
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </Hamburger>
    </Nav>
  );
}
