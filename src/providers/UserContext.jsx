import { createContext } from "react";
import { apiHub } from "../services/sevices";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const { token } = JSON.parse(localStorage.getItem("@token")) || [];
  const logOut = () => {
    localStorage.removeItem("@token");
  };
  const userProfile = async () => {
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
    <UserContext.Provider value={{ logOut, userProfile }}>
      {children}
    </UserContext.Provider>
  );
};
