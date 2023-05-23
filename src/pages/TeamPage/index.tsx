import * as S from "./styles";
import JogadorImg from "../../assets/jordansportsite.jpg";
import { useContext, useEffect, useState } from "react";
import { AppStateContext } from "../../context/AppStateContext";
import { getPlayers } from "../../services/endpoints";
import Chart from "react-google-charts";

const mockData = [
  ["Tempo de Jogo", "Total"],
  ["0-15", 4],
  ["16-30", 17],
  ["31-45", 11],
];

const options = {
  title: "Gols Marcados por Tempo de Jogo",
  backgroundColor: "transparent",
  titleTextStyle: {
    color: "#e8e8e8",
  },
  hAxis: {
    title: "Tempo de Jogo",
    minValue: 0,
    textStyle: {
      color: "#e8e8e8",
    },
    titleTextStyle: {
      color: "#e8e8e8",
    },
  },
  vAxis: {
    title: "Total de Gols",
    textStyle: {
      color: "#e8e8e8",
    },
    titleTextStyle: {
      color: "#e8e8e8",
    },
  },
  legend: {
    textStyle: {
      color: "#e8e8e8",
    },
  },
};

export const TeamPage = () => {
  const { selectedTeam, selectedSeason } = useContext(AppStateContext);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = localStorage.getItem("api_key");

      const fetchedPlayers = await getPlayers(
        apiKey as string,
        selectedTeam,
        selectedSeason
      );
      setPlayers(fetchedPlayers);

      console.log(players);
    };

    fetchData();
  }, []);

  return (
    <S.ContainerTeamPage>
      <S.WrapperTeamPage>
        <h1>Jogadores</h1>
        <S.ContainerPlayers>
          <div>
            <img src={JogadorImg} alt="" />
            <h2>Jordan</h2>
            <small>30 anos</small>
            <small>Brasileiro</small>
          </div>
          <div>
            <img src={JogadorImg} alt="" />
            <h2>Jordan</h2>
            <small>30 anos</small>
            <small>Brasileiro</small>
          </div>
          <div>
            <img src={JogadorImg} alt="" />
            <h2>Jordan</h2>
            <small>30 anos</small>
            <small>Brasileiro</small>
          </div>
          <div>
            <img src={JogadorImg} alt="" />
            <h2>Jordan</h2>
            <small>30 anos</small>
            <small>Brasileiro</small>
          </div>
          <div>
            <img src={JogadorImg} alt="" />
            <h2>Jordan</h2>
            <small>30 anos</small>
            <small>Brasileiro</small>
          </div>
          <div>
            <img src={JogadorImg} alt="" />
            <h2>Jordan</h2>
            <small>30 anos</small>
            <small>Brasileiro</small>
          </div>
          <div>
            <img src={JogadorImg} alt="" />
            <h2>Jordan</h2>
            <small>30 anos</small>
            <small>Brasileiro</small>
          </div>
          <div>
            <img src={JogadorImg} alt="" />
            <h2>Jordan</h2>
            <small>30 anos</small>
            <small>Brasileiro</small>
          </div>
          <div>
            <img src={JogadorImg} alt="" />
            <h2>Jordan</h2>
            <small>30 anos</small>
            <small>Brasileiro</small>
          </div>
          <div>
            <img src={JogadorImg} alt="" />
            <h2>Jordan</h2>
            <small>30 anos</small>
            <small>Brasileiro</small>
          </div>
          <div>
            <img src={JogadorImg} alt="" />
            <h2>Jordan</h2>
            <small>30 anos</small>
            <small>Brasileiro</small>
          </div>
          <div>
            <img src={JogadorImg} alt="" />
            <h2>Jordan</h2>
            <small>30 anos</small>
            <small>Brasileiro</small>
          </div>
          <div>
            <img src={JogadorImg} alt="" />
            <h2>Jordan</h2>
            <small>30 anos</small>
            <small>Brasileiro</small>
          </div>
          <div>
            <img src={JogadorImg} alt="" />
            <h2>Jordan</h2>
            <small>30 anos</small>
            <small>Brasileiro</small>
          </div>
          <div>
            <img src={JogadorImg} alt="" />
            <h2>Jordan</h2>
            <small>30 anos</small>
            <small>Brasileiro</small>
          </div>
          <div>
            <img src={JogadorImg} alt="" />
            <h2>Jordan</h2>
            <small>30 anos</small>
            <small>Brasileiro</small>
          </div>
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
          <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={mockData}
            options={options}
          />
        </S.ContainerStatistics>
      </S.WrapperTeamPage>
    </S.ContainerTeamPage>
  );
};
