import styled from "styled-components";

export const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 100vw;
  @media (min-width: 502px) and (max-width: 768px) {
    margin: 100px 0px;
    height: auto;
    width: auto;
  }
  @media (min-width: 100px) and (max-width: 501px) {
    margin: 20px 0px;
    height: auto;
    width: auto;
  }
`;

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  width: 50vw;
  @media (min-width: 502px) and (max-width: 768px) {
    margin: 100px 0px;
    height: auto;
    width: auto;
  }
  @media (min-width: 100px) and (max-width: 501px) {
    margin-top: 100px;
    width: 100vw;
  }
`;

export const Greeting = styled.h3`
  margin: 0 50px;
`;

export const HeaderText = styled.h1`
  font-size: 3em;
  margin: 0 50px;
  @media (max-width: 1024px) {
    font-size: 2em;
  }
  @media (max-width: 425px) {
    font-size: 1.5em;
  }
`;

export const Skills = styled.h4`
  margin: 10px 50px;
  @media (max-width: 425px) {
    font-size: 1em;
  }
`;

export const LandingSocials = styled.div`
  display: flex;
  margin: 0px 50px;
  @media (min-width: 769px) {
    display: none;
  }
`;
