import styled from "styled-components";
import { entering } from "../../pages/LoginPage/styles";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 16px;
  position: relative;

  border-radius: 5px;
  max-width: 500px;

  color: #121215;
  animation: ${entering} 0.8s ease-in-out;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
