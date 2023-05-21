import * as S from "./styles";
import CelebrationImg from "../../assets/celebration.svg";

export const SelectPage = () => {
  return (
    <S.ContainerSelectPage>
      <S.AsideSelectPage>
        <img src={CelebrationImg} alt="" />
      </S.AsideSelectPage>

      <S.WrapperSelectPage>
        <S.WelcomeSelectPage>
          <h2>Estamos quase lá</h2>
          <h1>Qual é o seu time?</h1>
        </S.WelcomeSelectPage>

        <S.SelectPageForm>
          <label>Selecione um país</label>
          <select name="" id="">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
          </select>

          <label>Selecione a temporada</label>
          <select name="" id="">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
          </select>

          <label>Selecione a liga</label>
          <select name="" id="">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
          </select>

          <label>Selecione o time</label>
          <select name="" id="">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
          </select>

          <button type="submit">Confirmar</button>
        </S.SelectPageForm>
      </S.WrapperSelectPage>
    </S.ContainerSelectPage>
  );
};
