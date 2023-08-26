import { createContext } from "react";
import { toast } from "react-toastify";
import { apiHub } from "../services/sevices";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  
  const logOut = () => {
    localStorage.removeItem("@token");
  };
  
  const userProfile = async () => {
    const  token  = JSON.parse(localStorage.getItem("@token")) || [];
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
    <UserContext.Provider value={{ logOut, userProfile}}>
      {children}
    </UserContext.Provider>
  );
};
