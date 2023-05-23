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

export const ContainerLoginPage = styled.div`
  display: grid;
  grid-template-areas: "aside login";

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "login";
  }
`;

export const AsideLoginPage = styled.aside`
  grid-area: aside;
  display: flex;

  justify-content: center;
  align-items: center;

  border-right: 1px solid #2c2c31;
  background-color: #18181b;

  @media (max-width: 768px) {
    img {
      display: none;
    }
  }

  img {
    width: 100%;
    max-width: 811px;
    height: 567px;
    animation: ${entering} 0.8s ease-in-out;
  }
`;

export const WrapperLoginPage = styled.div`
  height: 100vh;
  grid-area: login;

  display: flex;
  justify-content: center;

  align-items: center;
  flex-direction: column;
  color: #fff;
  animation: ${entering} 0.8s ease-in-out;

  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

export const WelcomeLoginPage = styled.div`
  width: 100%;
  max-width: 346px;
  margin-bottom: 36px;

  h2 {
    font-weight: 400;
  }
`;

export const LoginPageForm = styled.form`
  width: 100%;
  max-width: 346px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  input:nth-child(2) {
    width: 100%;
    height: 50px;

    padding: 0 8px;
    background-color: transparent;

    border: 1px solid #e2e2e2;
    border-radius: 5px;
    color: #fff;
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

export const Checkbox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;

  justify-content: space-between;
  align-items: center;

  input[type="radio"] {
    appearance: none;
    width: 16px;
    height: 16px;

    border-radius: 50%;
    background-color: #f7fafc;
    border: 1px solid #e8e8e8;

    cursor: pointer;
  }

  input[type="radio"]:checked {
    background-image: radial-gradient(white 40%, #8257e5 50%);
  }

  div {
    display: flex;
    gap: 8px;

    justify-content: center;
    align-items: center;
  }

  a {
    color: #8257e5;
  }
`;
