import * as S from "./styles";
import { useContext, useEffect, useState } from "react";
import { AppStateContext } from "../../context/AppStateContext";
import { getPlayers, getTeamStats } from "../../services/endpoints";
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
  const { selectedTeam, selectedSeason, selectedLeague } =
    useContext(AppStateContext);
  const [players, setPlayers] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = localStorage.getItem("api_key");

      const fetchedPlayers = await getPlayers(
        apiKey as string,
        selectedTeam,
        selectedSeason
      );
      setPlayers(fetchedPlayers);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = localStorage.getItem("api_key");

      const fetchedStats = await getTeamStats(
        apiKey as string,
        selectedLeague,
        selectedSeason,
        selectedTeam
      );

      setStats(fetchedStats);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(stats);
  }, [stats]);

  const mappedPlayers = players.map((player: any, index: number) => {
    return (
      <div key={index}>
        <img src={player.player.photo} alt="" />
        <h2>{player.player.name}</h2>
        <small>{player.player.age}</small>
        <small>{player.player.nationality}</small>
      </div>
    );
  });

  useEffect(() => {
    console.log(stats);
  }, [stats]);

  return (
    <S.ContainerTeamPage>
      <S.WrapperTeamPage>
        <h1>Jogadores</h1>
        <S.ContainerPlayers>{mappedPlayers}</S.ContainerPlayers>

        <S.ContainerFormer>
          <h1>Formação</h1>
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
