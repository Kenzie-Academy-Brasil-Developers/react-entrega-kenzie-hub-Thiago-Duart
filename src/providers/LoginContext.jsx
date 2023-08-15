import { createContext } from "react";
import { toast } from "react-toastify";
import { apiHub } from "../services/sevices";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();

  const submit = async (formData) => {
    const userLogin = formData;

    try {
      const { data } = await apiHub.post("/sessions", userLogin);
      const user = {
        token: data.token,
      };

      localStorage.setItem("@token", JSON.stringify(user));
      toast.success("Login efetuado com sucesso", {
        className: "toastStyle",
      });

      navigate("/");
    } catch (error) {
      toast.error("E-mail ou Senha incorretos", {
        className: "toastStyle",
      });
    }
  };

  return (
    <LoginContext.Provider value={{ submit }}>{children}</LoginContext.Provider>
  );
};
