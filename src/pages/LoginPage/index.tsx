import React from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useUnProtected } from "../../hooks/useUnprotected";
import { validateApiKey } from "../../services/validate";

import * as S from "./styles";
import GoalImg from "../../assets/goal.svg";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [form, handleInputChange] = useForm({
    apiKey: "",
    remember: false,
  });

  useUnProtected();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validate = await validateApiKey({
      apiKey: form?.apiKey,
      navigate,
    });

    validate && localStorage.setItem("api_key", form.apiKey);
  };

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

        <S.LoginPageForm onSubmit={handleSubmit}>
          <label>Chave da API</label>
          <input
            type="text"
            name="apiKey"
            placeholder="Digite a chave da API"
            value={form?.apiKey}
            onChange={handleInputChange}
            required
          />

          <S.Checkbox>
            <div>
              <input
                type="radio"
                name="remember"
                checked={form?.remember}
                onChange={handleInputChange}
              />
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
