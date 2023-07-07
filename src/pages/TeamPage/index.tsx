import * as S from "./styles";
import { useContext, useEffect, useState } from "react";
import { AppStateContext } from "../../context/AppStateContext";
import { getPlayers, getTeamStats } from "../../services/endpoints";
import { options } from "../../utils/options";
import Chart from "react-google-charts";

const mockData = [
  ["Tempo de Jogo", "Total"],
  ["0-15", 4],
  ["16-30", 17],
  ["31-45", 11],
];

export const TeamPage = () => {
  const { selectedTeam, selectedSeason, selectedLeague } =
    useContext(AppStateContext);
  const [players, setPlayers] = useState([]);
  const [stats, setStats] = useState<any>([]);
  const [formation, setFormation] = useState<string>("");

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
  }, [selectedSeason, selectedTeam]);

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
  }, [selectedLeague, selectedSeason, selectedTeam]);

  useEffect(() => {
    const mostUsedFormation = stats?.lineups?.reduce(
      (acc: any, lineup: any) => {
        if (lineup.played > acc.played) {
          return lineup;
        }
        return acc;
      }
    );

    setFormation(mostUsedFormation?.formation);

    // const formationResponse = stats.fixtures;
    // const gamesResults = {
    //   played: formationResponse.fixtures.played.total.toString(),
    //   wins: formationResponse.fixtures.wins.total.toString(),
    //   draws: formationResponse.fixtures.draws.total.toString(),
    //   loses: formationResponse.fixtures.loses.total.toString(),
    // };

    // setGamesStats([gamesResults]);
  }, [stats, formation]);

  const mappedPlayers = players.map((player: any, index: number) => {
    console.log(player);
    return (
      <div key={index}>
        <img src={player.player.photo} alt="" />
        <h2>{player.player.name}</h2>
        <small>{player.player.age}</small>
        <small>{player.player.nationality}</small>
      </div>
    );
  });

  return (
    <S.ContainerTeamPage>
      <S.WrapperTeamPage>
        <h1>Jogadores</h1>
        <S.ContainerPlayers>{mappedPlayers}</S.ContainerPlayers>

        <S.ContainerFormer>
          <h1>Formação</h1>
          <h2>{formation}</h2>
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
