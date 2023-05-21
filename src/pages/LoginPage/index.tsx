import * as S from "./styles";
import GoalImg from "../../assets/goal.svg";

export const LoginPage = () => {
  return (
    <S.ContainerLoginPage>
      <S.AsideLoginPage>
        <img src={GoalImg} alt="" />
      </S.AsideLoginPage>

      <S.WrapperLoginPage>
        <S.WelcomeLoginPage>
          <h2>Bem-vindo(a) de volta!</h2>
          <h1>Faça login na sua conta</h1>
        </S.WelcomeLoginPage>

        <S.LoginPageForm>
          <label>Chave da API</label>
          <input type="text" placeholder="Digite a chave da API" required />

          <S.Checkbox>
            <div>
              <input type="radio" />
              <label>Lembrar da chave</label>
            </div>

            <a>Como pegar a chave?</a>
          </S.Checkbox>

          <button type="submit">Entrar</button>
        </S.LoginPageForm>
      </S.WrapperLoginPage>
    </S.ContainerLoginPage>
  );
};
