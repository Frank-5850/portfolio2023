import React, { useEffect, useState } from "react";
import weather from "../assets/photos/Weather.jpg";
import eastBay from "../assets/photos/EastBay.jpg";
import luma from "../assets/photos/Luma.JPG";
import cop from "../assets/photos/CupOfPeace.JPG";
import {
  WorkWrapper,
  WorkContainer,
  SectionTitle,
  WorkCarousel,
  PhotoLink,
  WorkPhoto,
  WorkDetailContainer,
  WorkTitle,
  WorkDetail,
  TechList,
  Tech,
  WorkLinkContainer,
  WorkLink,
  GithubIcon,
  WebsiteIcon,
  CarouselController,
  CarouselButton,
  CurrentProjectIcon,
  CarouselButtonLeft,
  CarouselButtonRight,
  MobileWorkContainer,
  MobileWorkCard,
} from "./Work.styles";

const Work = () => {
  const [project, setProject] = useState();

  const [index, setIndex] = useState(0);

  const currentProjects = [
    {
      name: "Cup of Peace",
      description:
        "Welcome to Cup of Peace, where we bring tranquility to your doorstep, one cup at a time. We specialize in curating and delivering a diverse range of ethically sourced teas from around the world through our unique subscription service. Our mission is clear: to promote peace and serenity through the art of tea. Whether you're a casual tea enthusiast or a devoted connoisseur, our thoughtfully crafted subscription tiers cater to your individual tastes, inviting you on a peaceful journey to wellness and sensory awakening. Explore the world of tea with us and discover the profound power of every sip.",
      link: "https://cop-dev-8ea10.web.app",
      github: undefined,
      tech: ["React", "Typescript", "Firebase", "Stripe", "Material UI"],
      photo: cop,
    },
    {
      name: "Luma Action",
      description:
        "Luma Action, a dynamic force in policy planning, advocacy, and organizational development, empowers partners and clients to address complex issues and uplift communities. As a web developer, I had the privilege of contributing to their online presence, helping them illuminate the path towards positive change. This project highlights my ability to translate a powerful mission into an engaging digital platform.",
      link: "https://glassmorphic-weather.herokuapp.com/home",
      github: undefined,
      tech: [
        "React",
        "TypeScript",
        "SaSS",
        "email-js-com",
        "bluehost",
        "cPanel",
      ],
      photo: luma,
    },
    {
      name: "East Bay Recorders",
      description:
        "Introducing East Bay Recorders, an inviting and creative studio where music comes to life. This unique space boasts an impressive collection of instruments, vintage recording equipment, state-of-the-art digital tools, and a valuable network of top-notch San Francisco Bay Area session musicians. East Bay Recorders is where authentic music experiences are born, and I'm proud to have contributed to its digital presence as a web developer. This project showcases my ability to capture the essence of a creative space and translate it into an engaging online platform.",
      link: "https://eastbayrecorders.com/",
      github: "https://github.com/andrewjspivey/eastbay_recorders",
      tech: [
        "React",
        "Node",
        "styled-components",
        "Material UI",
        "React-Router",
      ],
      photo: eastBay,
    },
    {
      name: "Weather App",
      description:
        "Explore my Weather Web Application, a dynamic project that delivers precise weather forecasts for the next 24 hours and the upcoming 7 days, alongside real-time weather conditions, temperature data, and more. This intuitive application seamlessly integrates location-based services, allowing users to access weather insights based on their current location or a customized search. What sets this project apart is its elegant design, inspired by the captivating principles of glassmorphism, creating an aesthetically pleasing and user-friendly experience. This showcase in my portfolio highlights my web development skills and commitment to combining functionality with cutting-edge design.",
      link: "https://react-weather-front-368w.onrender.com/",
      github: "https://github.com/Frank-5850/weather-react",
      tech: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "OpenWeatherMap",
        "styled-components",
      ],
      photo: weather,
    },
  ];

  useEffect(() => {
    setProject(currentProjects[index]);
  }, [index, currentProjects]);

  const nextProject = () => {
    if (index === currentProjects.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevProject = () => {
    if (index === 0) {
      setIndex(currentProjects.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <WorkWrapper id="work">
      <WorkContainer>
        <SectionTitle>Recent Work</SectionTitle>
        <MobileWorkContainer>
          {currentProjects.map((project) => (
            <MobileWorkCard>
              <PhotoLink href={project.link} target="_blank">
                <WorkPhoto src={project.photo} alt={project.name} />
              </PhotoLink>
              <WorkDetailContainer>
                <WorkTitle>{project.name}</WorkTitle>
                <WorkDetail>{project.description}</WorkDetail>
                <TechList>
                  {project.tech.map((tech) => (
                    <Tech key={tech}>{tech}</Tech>
                  ))}
                </TechList>
                <WorkLinkContainer>
                  {project.github && (
                    <WorkLink href={project?.github} target="_blank">
                      <GithubIcon />
                    </WorkLink>
                  )}
                  <WorkLink href={project.link} target="_blank">
                    <WebsiteIcon />
                  </WorkLink>
                </WorkLinkContainer>
              </WorkDetailContainer>
            </MobileWorkCard>
          ))}
        </MobileWorkContainer>
        {project && (
          <WorkCarousel>
            <PhotoLink href={project.link} target="_blank">
              <WorkPhoto src={project.photo} alt={project.name} />
            </PhotoLink>
            <WorkDetailContainer>
              <WorkTitle>{project.name}</WorkTitle>
              <WorkDetail>{project.description}</WorkDetail>
              <TechList>
                {project.tech.map((tech) => (
                  <Tech key={tech}>{tech}</Tech>
                ))}
              </TechList>
              <WorkLinkContainer>
                {project?.github && (
                  <WorkLink href={project?.github} target="_blank">
                    <GithubIcon />
                  </WorkLink>
                )}
                <WorkLink href={project.link} target="_blank">
                  <WebsiteIcon />
                </WorkLink>
              </WorkLinkContainer>
            </WorkDetailContainer>
          </WorkCarousel>
        )}
        <CarouselController>
          <CarouselButton onClick={() => prevProject()}>
            <CarouselButtonLeft />
          </CarouselButton>
          {currentProjects.map((project, i) => (
            <CurrentProjectIcon
              onClick={() => setIndex(i)}
              fill={i === index ? "black" : "grey"}
              key={i}
            />
          ))}
          <CarouselButton onClick={() => nextProject()}>
            <CarouselButtonRight />
          </CarouselButton>
        </CarouselController>
      </WorkContainer>
    </WorkWrapper>
  );
};

export default Work;
