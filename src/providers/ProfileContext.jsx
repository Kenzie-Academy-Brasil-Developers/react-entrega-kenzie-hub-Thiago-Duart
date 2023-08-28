import { createContext, useEffect } from "react";
import { apiHub } from "../services/sevices";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const ProfileContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("@token"));
    if (data) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  const token = JSON.parse(localStorage.getItem("@token"));

  const {
    isLoading,
    isError,
    data: dataProfile,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const response =
        token &&
        (await apiHub.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }));
      return response;
    },
  });

  if (isLoading) {
    return <p className="font title1">Carregando...</p>;
  }
  if (isError) {
    return <p className="font title1">Algo deu Errado</p>;
  }

  return (
    <ProfileContext.Provider value={{ dataProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
