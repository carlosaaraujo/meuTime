import * as S from "./styles";
import JogadorImg from "../../assets/jordansportsite.jpg";

export const TeamPage = () => {
  return (
    <S.ContainerTeamPage>
      <S.WrapperTeamPage>
        <h1>Jogadores</h1>
        <S.ContainerPlayers>
          <img src={JogadorImg} alt="" />
          <img src={JogadorImg} alt="" />
          <img src={JogadorImg} alt="" />
          <img src={JogadorImg} alt="" />
          <img src={JogadorImg} alt="" />
          <img src={JogadorImg} alt="" />
          <img src={JogadorImg} alt="" />
          <img src={JogadorImg} alt="" />
          <img src={JogadorImg} alt="" />
          <img src={JogadorImg} alt="" />
          <img src={JogadorImg} alt="" />
          <img src={JogadorImg} alt="" />
          <img src={JogadorImg} alt="" />
          <img src={JogadorImg} alt="" />
        </S.ContainerPlayers>

        <S.ContainerFormer>
          <h1>Formação</h1>
          <h2>4-3-2-1</h2>
        </S.ContainerFormer>

        <S.ContainerResults>
          <h1>Tabela de resultados</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Total de Jogos</th>
                <th>Total de Vitórias</th>
                <th>Total de Derrotas</th>
                <th>Total de Empates</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>23</td>
                <td>20</td>
                <td>0</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        </S.ContainerResults>

        <S.ContainerStatistics>
          <h1>Gráfico</h1>
        </S.ContainerStatistics>
      </S.WrapperTeamPage>
    </S.ContainerTeamPage>
  );
};
