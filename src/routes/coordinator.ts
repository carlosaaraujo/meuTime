import { NavigateFunction } from "react-router-dom";

export const goToLoginPage = (navigate: NavigateFunction) => {
  navigate("/");
};

export const goToSelectTeamPage = (navigate: NavigateFunction) => {
  navigate("/select");
};

export const goToTeamPage = (navigate: NavigateFunction) => {
  navigate("/team");
};
