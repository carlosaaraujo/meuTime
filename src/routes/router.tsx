import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { SelectPage } from "../pages/SelectPage";
import { TeamPage } from "../pages/TeamPage";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="select" element={<SelectPage />} />
      <Route path="team" element={<TeamPage />} />
    </Routes>
  );
};
