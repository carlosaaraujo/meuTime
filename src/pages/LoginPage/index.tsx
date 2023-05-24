import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useUnProtected } from "../../hooks/useUnprotected";
import { validateApiKey } from "../../services/validate";

import * as S from "./styles";
import GoalImg from "../../assets/goal.svg";
import Modal from "../../components/Modal";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
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

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
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

            <a onClick={handleOpenModal}>Como pegar a chave?</a>

            <Modal isOpen={modalOpen} onClose={handleCloseModal}>
              <p>
                Para acessar a aplicação, o usuário deverá criar uma conta na
                API-Football antes. Assim, ele receberá uma key de autenticação
                para usar na tela de login da Meu Time, ao invés de usuário e
                senha. Por baixa dos panos, a aplicação utilizará a key
                informada para realizar as requisições.
              </p>
            </Modal>
          </S.Checkbox>

          <button className="btn-submit" type="submit">
            Entrar
          </button>
        </S.LoginPageForm>
      </S.WrapperLoginPage>
    </S.ContainerLoginPage>
  );
};
