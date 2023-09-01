import styled from "styled-components";

export const ContactWrapper = styled.div``;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 50vw;
  @media (min-width: 100px) and (max-width: 502px) {
    width: 100vw;
    height: auto;
    margin: 50px 0px;
  }
`;

export const ContactLink = styled.a`
  text-decoration: none;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
`;

export const ContactMessage = styled.p`
  margin: 0 0 10px 0;
`;
