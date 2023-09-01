import styled from "styled-components";

export const AboutMeWrapper = styled.div``;

export const AboutMeContainer = styled.div`
  display: flex;
  width: 65vw;
  margin-bottom: 50px;
  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    width: 80vw;
  }
  @media (min-width: 502px) and (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 0px 75px;
    width: 100%;
  }
  @media (max-width: 501px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 0;
    width: 100%;
  }
`;

export const AboutMeSection = styled.div`
  @media (min-width: 1025px) {
    padding-right: 20px;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    padding-right: 15px;
  }
  @media (max-width: 501px) {
    padding: 10px 50px;
  }
`;

export const SectionTitle = styled.h1`
  margin: 0 0 10px 0;
  @media (max-width: 501px) {
    margin: 0;
  }
`;

export const SectionText = styled.p`
  margin: 10px 0;
`;

export const SkillSection = styled.ul`
  padding: 0;
  display: flex;
  flex-flow: row wrap;
`;

export const Skills = styled.li`
  list-style: none;
  padding: 5px;
  margin: 3px 3px;
  background: grey;
  color: white;
  border-radius: 5px;
`;

export const PhotoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;
  @media (min-width: 450px) and (max-width: 768px) {
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
  }
  @media (min-width: 100px) and (max-width: 501px) {
    width: 100%;
    align-items: center;
  }
`;

export const Photo = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  border-radius: 5px;
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 375px;
  }
  @media (min-width: 100px) and (max-width: 501px) {
    width: 80vw;
  }
`;
