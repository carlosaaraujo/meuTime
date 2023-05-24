import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;

  height: 10vh;
  padding: 16px;

  display: flex;
  align-items: center;

  justify-content: space-between;
  background-color: transparent;
`;

export const LogoContainer = styled.div`
  img {
    width: 100%;
    max-width: 150px;
  }
`;

export const NavbarHeader = styled.nav`
  ul {
    list-style: none;
  }

  color: #e8e8e8;

  a {
    color: #764fd0;
  }
`;
