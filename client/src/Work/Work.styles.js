import styled from "styled-components";
import { FaGithubSquare } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import {
  RiCheckboxBlankCircleLine,
  RiArrowRightSLine,
  RiArrowLeftSLine,
} from "react-icons/ri";

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1025px) {
    width: 65vw;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 80vw;
  }
  @media (min-width: 502px) and (max-width: 768px) {
    padding: 0px 75px;
    width: 90vw;
  }
  @media (max-width: 501px) {
    width: 95%;
  }
`;

export const SectionTitle = styled.h1`
  align-self: start;
`;

export const WorkCarousel = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center;
  @media (min-width: 1025px) {
    display: flex;
    flex-flow: row;
  }
  @media (min-width: 100px) and (max-width: 768px) {
    display: none;
  }
`;

export const PhotoLink = styled.a`
  border-radius: 10px;
  @media (min-width: 502px) and (max-width: 768px) {
    width: 80%;
  }
  @media (min-width: 100px) and (max-width: 501px) {
    width: 80%;
  }
`;

export const WorkPhoto = styled.img`
  border-radius: 10px;
  border: solid 1px black;
  width: 100%;
  @media (min-width: 502px) and (max-width: 768px) {
    border-radius: 5px;
  }
  @media (min-width: 100px) and (max-width: 501px) {
    border-radius: 5px;
  }
`;

export const WorkDetailContainer = styled.div`
  @media (min-width: 1025px) {
    padding-left: 20px;
    min-width: 40%;
    max-width: 50%;
    align-self: start;
  }
`;

export const WorkTitle = styled.h1`
  margin: 0 10px 10px 0;
`;

export const WorkDetail = styled.p`
  margin: 10px 0;
`;

export const TechList = styled.ul`
  padding: 0;
  display: flex;
  flex-flow: row wrap;
`;

export const Tech = styled.li`
  list-style: none;
  padding: 5px;
  margin: 3px 3px;
  background: grey;
  color: white;
  border-radius: 5px;
`;

export const WorkLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const WorkLink = styled.a`
  text-decoration: none;
  margin: 0 5px;
`;

export const GithubIcon = styled(FaGithubSquare)`
  color: white;
  font-size: 1.5em;
  margin: 0 5px;
`;

export const WebsiteIcon = styled(MdOpenInNew)`
  color: white;
  font-size: 1.5em;
  margin: 0 5px;
`;

export const CarouselController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin: 0;
  @media (min-width: 100px) and (max-width: 769px) {
    display: none;
  }
`;

export const CarouselButton = styled.button`
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
`;

export const CarouselButtonLeft = styled(RiArrowLeftSLine)`
  color: white;
  cursor: pointer;
  margin: 0 10px;
`;

export const CarouselButtonRight = styled(RiArrowRightSLine)`
  color: white;
  cursor: pointer;
  margin: 0 10px;
`;

export const CurrentProjectIcon = styled(RiCheckboxBlankCircleLine)`
  margin: 0 5px;
  cursor: pointer;
`;

export const MobileWorkContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileWorkCard = styled.div`
  margin-bottom: 25px;
`;
