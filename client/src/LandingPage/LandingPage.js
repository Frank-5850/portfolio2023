import React from "react";
import {
  Greeting,
  HeaderText,
  LandingPageContainer,
  LandingPageWrapper,
  Skills,
  LandingSocials,
} from "./landingPage.styles";
import {
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { IconBox, IconLink } from "../SocialSection/socials.styles.js";

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <LandingPageContainer>
        <Greeting>Hello, my name is</Greeting>
        <HeaderText> Franco Phan</HeaderText>
        <HeaderText>I enjoy developing the web</HeaderText>
        <Skills>MERN stack developer</Skills>
        <LandingSocials>
          <IconBox>
            <IconLink href="https://github.com/Frank-5850" target="_blank">
              <FaGithubSquare size="1.5em" />
            </IconLink>
          </IconBox>
          <IconBox>
            <IconLink
              href="https://www.linkedin.com/in/franco-phan-5b14b7144/"
              target="_blank"
            >
              <FaLinkedin size="1.5em" />
            </IconLink>
          </IconBox>
          <IconBox>
            <IconLink
              href="https://www.instagram.com/frankphan/"
              target="_blank"
            >
              <FaInstagramSquare size="1.5em" />
            </IconLink>
          </IconBox>
          <IconBox>
            <IconLink href="https://twitter.com/home" target="_blank">
              <FaTwitterSquare size="1.5em" />
            </IconLink>
          </IconBox>
        </LandingSocials>
      </LandingPageContainer>
    </LandingPageWrapper>
  );
};

export default LandingPage;
