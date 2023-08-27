import { createContext, useState } from "react";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [modalCreateTech, setModalCreateTech] = useState(false);
  const [modalEditTech, setModalEditTech] = useState(false);
  return (
    <TechContext.Provider
      value={{
        modalCreateTech,
        setModalCreateTech,
        setModalEditTech,
        modalEditTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
