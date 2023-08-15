import { createContext } from "react";
import { toast } from "react-toastify";
import { apiHub } from "../services/sevices";
import { useNavigate } from "react-router-dom";

export const CadastreContext = createContext({});

export const CadastreProvider = ({ children }) => {
  const navigate = useNavigate();

  const userCadastre = async (content) => {
    const dataUser = content;
    try {
      await apiHub.post("/users", dataUser);
      toast.success("Conta criada com sucesso!!!", {
        className: "toastStyle",
      });
      setTimeout(() => {
        navigate("/login");
      }, 4000);
    } catch (error) {
      toast.error("E-mail ja existente", {
        className: "toastStyle",
      });
    }
  };

  return (
    <CadastreContext.Provider value={{ userCadastre }}>
      {children}
    </CadastreContext.Provider>
  );
};
