import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LoginPage } from "../pages/LoginPage";
import { SelectPage } from "../pages/SelectPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="select" element={<SelectPage />} />
      </Routes>
    </BrowserRouter>
  );
};
