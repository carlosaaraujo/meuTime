import { createApiInstance } from "./api";

export const getCountries = async (apiKey: string) => {
  const api = createApiInstance(apiKey);

  return await api
    .get("countries")
    .then((res) => {
      return res.data.response;
    })
    .catch((error) => console.log(error));
};

export const getSeason = async (apiKey: string) => {
  const api = createApiInstance(apiKey);

  return await api
    .get("leagues/seasons")
    .then((res) => {
      return res.data.response;
    })
    .catch((error) => console.log(error));
};

export const getLeagues = async (
  apiKey: string,
  country: string,
  season: string
) => {
  const api = createApiInstance(apiKey);

  try {
    const response = await api.get(`leagues?code=${country}&season=${season}`);
    return response.data.response;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getTeams = async (
  apiKey: string,
  league: string,
  season: string
) => {
  const api = createApiInstance(apiKey);

  try {
    const response = await api.get(
      `standings?league=${league}&season=${season}`
    );

    return response.data.response[0].league.standings[0];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPlayers = async (
  apiKey: string,
  team: string,
  season: string
) => {
  const api = createApiInstance(apiKey);

  try {
    const response = await api.get(`players?team=${team}&season=${season}`);
    return response.data.response;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getTeamStats = async (
  apiKey: string,
  league: string,
  season: string,
  team: string
) => {
  const api = createApiInstance(apiKey);

  try {
    const response = await api.get(
      `teams/statistics?season=${season}&team=${team}&league=${league}`
    );
    return response.data.response;
  } catch (error) {
    console.log(error);
    return [];
  }
};
