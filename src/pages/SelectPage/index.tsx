import { useContext, useEffect } from "react";
import {
  getCountries,
  getLeagues,
  getSeason,
  getTeams,
} from "../../services/endpoints";
import * as S from "./styles";
import CelebrationImg from "../../assets/celebration.svg";
import { SelectInput } from "../../components/SelectInput";
import { useNavigate } from "react-router-dom";
import { goToTeamPage } from "../../routes/coordinator";
import { AppStateContext } from "../../context/AppStateContext";

export const SelectPage = () => {
  const {
    countries,
    setCountries,
    selectedCountry,
    setSelectedCountry,
    seasons,
    setSeasons,
    selectedSeason,
    setSelectedSeason,
    leagues,
    setLeagues,
    selectedLeague,
    setSelectedLeague,
    teams,
    setTeams,
    selectedTeam,
    setSelectedTeam,
  } = useContext(AppStateContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = localStorage.getItem("api_key");

      const fetchedCountries = await getCountries(apiKey as string);
      setCountries(fetchedCountries);

      const fetchedSeasons = await getSeason(apiKey as string);
      setSeasons(fetchedSeasons);
    };

    fetchData();
  }, [setCountries, setSeasons]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = localStorage.getItem("api_key");

      const fetchedLeagues = await getLeagues(
        apiKey as string,
        selectedCountry,
        selectedSeason
      );

      setLeagues(fetchedLeagues);
    };

    if (selectedCountry && selectedSeason) {
      fetchData();
    }
  }, [selectedCountry, selectedSeason, setLeagues]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = localStorage.getItem("api_key");

      const fetchedTeam = await getTeams(
        apiKey as string,
        selectedLeague,
        selectedSeason
      );

      setTeams(fetchedTeam);
    };

    if (selectedLeague && selectedSeason) {
      fetchData();
    }
  }, [selectedLeague, selectedSeason, setTeams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    goToTeamPage(navigate);
  };

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

        <S.SelectPageForm onSubmit={handleSubmit}>
          <SelectInput
            label="Selecione um país"
            value={selectedCountry}
            options={countries.map(
              (country: { code: string; name: string }) => ({
                value: country.code,
                label: country.name,
              })
            )}
            onChange={setSelectedCountry}
          />

          <SelectInput
            label="Selecione a temporada"
            value={selectedSeason}
            options={seasons.map((season) => ({
              value: season,
              label: season,
            }))}
            onChange={setSelectedSeason}
            disabled={!selectedCountry}
            dependentValue={selectedCountry}
          />

          <SelectInput
            label="Selecione a liga"
            value={selectedLeague}
            options={leagues.map((league) => ({
              value: league.league.id,
              label: league.league.name,
            }))}
            onChange={setSelectedLeague}
            disabled={!selectedSeason}
            dependentValue={selectedLeague}
          />

          <SelectInput
            label="Selecione o time"
            value={selectedTeam}
            options={teams.map((team) => ({
              value: team.team.id,
              label: team.team.name,
            }))}
            onChange={setSelectedTeam}
            disabled={!selectedLeague}
            dependentValue={selectedLeague}
          />

          <button type="submit">Confirmar</button>
        </S.SelectPageForm>
      </S.WrapperSelectPage>
    </S.ContainerSelectPage>
  );
};
