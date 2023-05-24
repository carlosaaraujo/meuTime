import { keyframes, styled } from "styled-components";

const entering = keyframes`
  from {
    opacity: 0;
    transform: translateY(-200px);
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ContainerSelectPage = styled.div`
  display: grid;
  grid-template-areas: "aside select";

  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "select";
  }
`;

export const AsideSelectPage = styled.aside`
  grid-area: aside;
  display: flex;

  justify-content: center;
  align-items: center;

  border-right: 1px solid #2c2c31;

  img {
    width: 100%;
    max-width: 811px;

    height: 567px;
    animation: ${entering} 0.8s ease-in-out;
    padding: 0 12px;
  }

  @media (max-width: 768px) {
    img {
      display: none;
    }
  }
`;

export const WrapperSelectPage = styled.div`
  height: 90vh;
  grid-area: select;
  padding: 12px;

  display: flex;
  justify-content: center;

  align-items: center;
  flex-direction: column;

  color: #fff;
  animation: ${entering} 0.8s ease-in-out;
`;

export const WelcomeSelectPage = styled.div`
  width: 100%;
  max-width: 346px;
  margin-bottom: 36px;

  h2 {
    font-weight: 400;
  }
`;

export const SelectPageForm = styled.form`
  width: 100%;
  max-width: 346px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  select {
    max-width: 350px;
    width: 100%;
    height: 50px;

    border: none;
    border-radius: 5px;
    padding: 0 8px;
  }

  button {
    width: 100%;
    height: 50px;

    background-color: #764fd0;
    color: #fff;

    border: none;
    border-radius: 5px;

    font-weight: 700;
    font-size: 16px;
    transition: background-color 0.2s ease-in-out;
  }

  button:hover {
    background-color: #8257e5;
  }
`;
