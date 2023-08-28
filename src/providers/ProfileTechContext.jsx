import { createContext, useState } from "react";
import { apiHub } from "../services/sevices";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const ProfileTechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [modalCreateTech, setModalCreateTech] = useState(false);
  const [modalEditTech, setModalEditTech] = useState(false);
  const [dataTech, setDataTech] = useState({
    title: String,
    status: String,
    id: String,
  });
  const queryclient = useQueryClient();
  
  const token = JSON.parse(localStorage.getItem("@token"));
  const key = ["profile"];

  const deleteTech = useMutation({
    mutationFn: (techId) => {
      return apiHub.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      setModalCreateTech(false);
      toast.success("Tecnologia deletada com sucesso !!!", {
        className: "toastStyle",
      });
      queryclient.refetchQueries(key);
    },
  });

  const editTech = useMutation({
    mutationFn: (data) => {
      return apiHub.put(`/users/techs/${dataTech.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      toast.success("Status editado com sucesso!!!", {
        className: "toastStyle",
      });
      queryclient.refetchQueries(key);
      setModalEditTech(false);
    }
  });
  return (
    <ProfileTechContext.Provider
      value={{
        modalCreateTech,
        setModalCreateTech,
        setModalEditTech,
        modalEditTech,
        setDataTech,
        dataTech,
        editTech,
        deleteTech,
      }}
    >
      {children}
    </ProfileTechContext.Provider>
  );
};
