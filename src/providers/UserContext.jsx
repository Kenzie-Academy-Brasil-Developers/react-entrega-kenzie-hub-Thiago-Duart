import { createContext } from "react";
import { toast } from "react-toastify";
import { apiHub } from "../services/sevices";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

  const userCadastre = async (content) => {
    const dataUser = content;

    try {
      await apiHub.post("/users", dataUser);
      toast.success("Conta criada com sucesso!!!", {
        className: "toastStyle",
      });
      return true;

    } catch (error) {
      toast.error("E-mail ja existente", {
        className: "toastStyle",
      });
      return false;
    }
  };

  const logOut = () => {
    localStorage.removeItem("@token");
  };
  
  const userProfile = async () => {
    const { token } = JSON.parse(localStorage.getItem("@token")) || [];
    try {
      const { data } = await apiHub.get(`/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ logOut, userProfile, userCadastre }}>
      {children}
    </UserContext.Provider>
  );
};
