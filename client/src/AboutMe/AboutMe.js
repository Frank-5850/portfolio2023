import React from "react";
import photo from "../assets/profile pic.jpg";
import {
  AboutMeContainer,
  AboutMeSection,
  AboutMeWrapper,
  Photo,
  PhotoSection,
  SectionText,
  SectionTitle,
  Skills,
  SkillSection,
} from "./AboutMe.styles";

const AboutMe = () => {
  return (
    <AboutMeWrapper id="aboutMe">
      <AboutMeContainer>
        <AboutMeSection>
          <SectionTitle>About Me</SectionTitle>
          <SectionText>
            Greetings, My name is Franco Phan and I love building things for the
            web. I always had an interest in programming but never really chased
            it until recently.
          </SectionText>
          <SectionText>
            I began studying full stack web development at the University of
            Berkeley Extension in California. Taking on a 6 month boot camp
            starting in September 2019. I learned a lot about the fundamentals
            of web development and how to build a full stack application.
          </SectionText>
          <SectionText>
            I have the privilege of working as a React-web apprentice for
            Bitwise Industries/ Alphaworks. This is where I am honing my skills
            as a front-end developer creating multiple projects.
          </SectionText>
          <SectionText>Languages I am currently using:</SectionText>
          <SkillSection>
            <Skills>Javascript (ES6+)</Skills>
            <Skills>React JS</Skills>
            <Skills>MongoDB</Skills>
            <Skills>Node JS</Skills>
            <Skills>Express JS</Skills>
            <Skills>CSS</Skills>
            <Skills>styled-components</Skills>
          </SkillSection>
        </AboutMeSection>
        <PhotoSection>
          <Photo src={photo} />
        </PhotoSection>
      </AboutMeContainer>
    </AboutMeWrapper>
  );
};

export default AboutMe;
