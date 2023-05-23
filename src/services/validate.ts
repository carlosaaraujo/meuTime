import { NavigateFunction } from "react-router-dom";
import { goToSelectTeamPage } from "../routes/coordinator";
import { createApiInstance } from "./api";

interface validateApiKeyProps {
  apiKey: string;
  navigate: NavigateFunction;
}

export const validateApiKey = async ({
  apiKey,
  navigate,
}: validateApiKeyProps) => {
  try {
    const api = createApiInstance(apiKey);
    const response = await api.get("countries");

    const responseData = response.data;
    console.log(responseData.errors);

    if (responseData && responseData.response && responseData.response.length) {
      goToSelectTeamPage(navigate);
      return true;
    }
  } catch (error) {
    console.log(error);
  }

  return false;
};
