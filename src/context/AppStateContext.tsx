import React, { createContext, useState, ReactNode } from "react";

interface AppState {
  countries: any[];
  setCountries: React.Dispatch<React.SetStateAction<any[]>>;
  seasons: any[];
  setSeasons: React.Dispatch<React.SetStateAction<any[]>>;
  leagues: any[];
  setLeagues: React.Dispatch<React.SetStateAction<any[]>>;
  teams: any[];
  setTeams: React.Dispatch<React.SetStateAction<any[]>>;
  selectedCountry: string;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  selectedSeason: string;
  setSelectedSeason: React.Dispatch<React.SetStateAction<string>>;
  selectedLeague: string;
  setSelectedLeague: React.Dispatch<React.SetStateAction<string>>;
  selectedTeam: string;
  setSelectedTeam: React.Dispatch<React.SetStateAction<string>>;
}

interface AppStateContextProps {
  children: ReactNode;
}

export const AppStateContext = createContext<AppState>({} as AppState);

export const AppStateProvider = ({ children }: AppStateContextProps) => {
  const [countries, setCountries] = useState<any[]>([]);
  const [seasons, setSeasons] = useState<any[]>([]);
  const [leagues, setLeagues] = useState<any[]>([]);
  const [teams, setTeams] = useState<any[]>([]);

  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("");
  const [selectedLeague, setSelectedLeague] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");

  const state: AppState = {
    countries,
    setCountries,
    seasons,
    setSeasons,
    leagues,
    setLeagues,
    teams,
    setTeams,
    selectedCountry,
    setSelectedCountry,
    selectedSeason,
    setSelectedSeason,
    selectedLeague,
    setSelectedLeague,
    selectedTeam,
    setSelectedTeam,
  };

  return (
    <AppStateContext.Provider value={state}>
      {children}
    </AppStateContext.Provider>
  );
};
