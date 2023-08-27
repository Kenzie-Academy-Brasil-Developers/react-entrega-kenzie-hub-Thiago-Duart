import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/Login";
import { CadastrePage } from "../pages/Cadastre";
import { MyTemplate } from "../components/TemplateDefault";
export const RoutesMain = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MyTemplate>
            <HomePage />
          </MyTemplate>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastrePage />} />
    </Routes>
  );
};
