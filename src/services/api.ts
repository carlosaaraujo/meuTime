import axios, { AxiosRequestConfig } from "axios";

export const createApiInstance = (apiKey: string) => {
  const headers: AxiosRequestConfig["headers"] = {
    "X-RapidAPI-Key": apiKey,
    "x-rapidapi-host": "v3.football.api-sports.io",
  };

  return axios.create({
    baseURL: "https://v3.football.api-sports.io/",
    headers: headers,
  });
};
