import { createContext } from "react";
import { apiHub } from "../services/sevices";
import { useQuery } from "@tanstack/react-query";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const logOut = () => {
    localStorage.removeItem("@token");
  };
  const key = ["profile"];
  const { isLoading, isError, data } = useQuery({
    queryKey: key,
    queryFn: async () => {
      const token = JSON.parse(localStorage.getItem("@token"));
      const response = await apiHub.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    },
  });

  if (isLoading) {
    return <p className="font title1">Carregando...</p>;
  }
  if (isError) {
    return <p className="font title1">Algo deu Errado</p>;
  }
  const dataProfile = data?.data;
  return (
    <UserContext.Provider value={{ logOut, dataProfile }}>
      {children}
    </UserContext.Provider>
  );
};
