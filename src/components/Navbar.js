import { useState } from "react";
import { Nav, NavMenu, NavLogo, NavItem, Hamburger } from "./Navbar-styles";

import { NavLink } from "react-router-dom";

import spotify from "../assets/spotify.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import twitch from "../assets/twitch.svg";
import facebook from "../assets/facebook.svg";

export default function Navbar() {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const socials = [
    {
      link: "https://open.spotify.com/artist/0TueEXkLZbVrA2JcB5hkvW?si=JRQL9HlaRdmwG_Q1iAzTZw&dl_branch=1&nd=1",
      src: spotify,
    },
    {
      link: "https://www.instagram.com/eastyorksfinest",
      src: instagram,
    },
    {
      link: "https://www.twitter.com/eastyorksfinest",
      src: twitter,
    },
    {
      link: "https://www.youtube.com/gothreau",
      src: youtube,
    },
    {
      link: "https://www.twitch.tv/gothreau",
      src: twitch,
    },
    {
      link: "https://www.facebook.com/gothreau",
      src: facebook,
    },
  ];

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
          <a href="/" target="_blank" rel="noreferrer">
            <img src={facebook} alt={"facebook"} />
          </a>
        </NavItem>
        {socials.map((social) => {
          return (
            <NavItem key={social.link}>
              <a href={social.link} target="_blank" rel="noreferrer">
                <img src={social.src} alt={social.link} />
              </a>
            </NavItem>
          );
        })}
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
