import React from "react";
import {
  NavWrapper,
  IconContainer,
  HamburgerIconContainer,
  HamburgerIcon,
  HamburgerLinks,
  NavGroup,
  NavItem,
  Resume,
  NavContainer,
  NavLink,
  LogoImg,
  ResumeLink,
} from "./nav.styles";
import logo from "../assets/logo.png";
import { useState } from "react";
import "../App.css";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavContainer>
      <NavWrapper className="navbar">
        <IconContainer>
          <NavItem style={{ padding: "0" }}>
            <NavLink href="/">
              <LogoImg src={logo} alt="logo" />
            </NavLink>
          </NavItem>
        </IconContainer>
        {/* <HamburgerIconContainer>
          <HamburgerIcon onClick={toggleMobileMenu}>
            X
            <HamburgerLinks>About</HamburgerLinks>
            <HamburgerLinks>Work</HamburgerLinks>
            <HamburgerLinks>Contact</HamburgerLinks>
          </HamburgerIcon>
        </HamburgerIconContainer> */}
        <NavGroup>
          <NavItem>
            <NavLink href="#aboutMe">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#work">Work</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
          <Resume>
            <ResumeLink
              href="https://online.fliphtml5.com/poskt/sgmf/#p=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </ResumeLink>
          </Resume>
        </NavGroup>
      </NavWrapper>
    </NavContainer>
  );
};

export default Nav;
