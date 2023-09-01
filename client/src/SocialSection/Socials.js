import React from "react";
import {
  SocialsContainer,
  SocialsWrapper,
  IconBox,
  IconLink,
} from "./socials.styles";
import {
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Socials = () => {
  return (
    <SocialsWrapper>
      <SocialsContainer>
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
          <IconLink href="https://www.instagram.com/frankphan/" target="_blank">
            <FaInstagramSquare size="1.5em" />
          </IconLink>
        </IconBox>
        <IconBox>
          <IconLink href="https://twitter.com/home" target="_blank">
            <FaTwitterSquare size="1.5em" />
          </IconLink>
        </IconBox>
      </SocialsContainer>
    </SocialsWrapper>
  );
};

export default Socials;
