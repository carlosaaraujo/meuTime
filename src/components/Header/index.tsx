import { useNavigate, Link } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";

import * as S from "./styles";
import Logo from "../../assets/logo.png";

export const Header = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    const getApiKey = localStorage.getItem("api_key");

    if (getApiKey) {
      localStorage.removeItem("api_key");
    }
    goToLoginPage(navigate);
  };

  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <img src={Logo} alt="" />
      </S.LogoContainer>

      <S.NavbarHeader>
        <ul>
          <li>
            {window.location.pathname !== "/" && (
              <p>
                Bem-vindo(a)! <a onClick={logoutUser}>Sair</a>
              </p>
            )}
          </li>
        </ul>
      </S.NavbarHeader>
    </S.HeaderContainer>
  );
};
