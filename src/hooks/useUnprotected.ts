import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToSelectTeamPage } from "../routes/coordinator";

export const useUnProtected = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const apiKey = localStorage.getItem("api_key");
    if (apiKey) goToSelectTeamPage(navigate);
  }, [navigate]);
};
