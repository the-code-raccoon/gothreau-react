import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  caret-color: transparent;
`;

export const NavLogo = styled.a`
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  font-size: 40px;
  color: white;
  // margin: 2vw;
  // padding: 5px 10px;
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    position: fixed;
    left: -100%;
    top: 5rem;
    flex-direction: column;
    // background-color: #fff;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);

    &.active {
      left: 0;
    }
  }
`;

export const NavItem = styled.li`
  list-style: none;
  margin-left: 5rem;
  display: flex;
  font-family: 'Ropa Sans', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.35rem;

  a {
    text-decoration: none;
    color: white;
  }

  @media only screen and (max-width: 768px) {
    margin: 2.5rem 0;
  }
`;

export const Hamburger = styled.div`
  display: none;

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: white;
  }

  @media only screen and (max-width: 768px) {
    display: block;
    cursor: pointer;

    &.active .bar:nth-child(2) {
      opacity: 0;
    }

    &.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    &.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`;
