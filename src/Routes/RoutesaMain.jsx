import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/Login";
import { CadastrePage } from "../pages/Cadastre";
import { MyTemplate } from "../components/TemplateDefault";
import { ErrPage } from "../pages/ErrPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <MyTemplate>
            <HomePage />
          </MyTemplate>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<CadastrePage setUser={setUser} />} />
      <Route path="*" element={<ErrPage />} />
    </Routes>
  );
};
