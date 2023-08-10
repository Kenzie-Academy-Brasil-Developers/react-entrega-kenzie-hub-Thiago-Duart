import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/Login";
import { CadastrePage } from "../pages/Cadastre";
import { MyTemplate } from "../components/TemplateDefault";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export const RoutesMain = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("@token"));
    if (data) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

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
