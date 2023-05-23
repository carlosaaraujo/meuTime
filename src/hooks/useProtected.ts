import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";

export const useProtected = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const apiKey = localStorage.getItem("api_key");
    if (!apiKey) goToLoginPage(navigate);
  }, [navigate]);
};
