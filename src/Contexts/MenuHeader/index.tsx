import React, { createContext, ReactNode, useContext, useState } from "react";
import { HeaderContext } from "../Header/HeaderContext";

interface Props {
  wrapperMenuCompany: () => void;
  wrapperMenuCeo: () => void;
  wrapperCompany: boolean;
  wrapperCeoContent: boolean;
  setWrapperCompany: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuHeaderContext = createContext({} as Props);

export const MenuHeaderProvider = ({ children }: { children: ReactNode }) => {
  const { setOpenMenuSidebar } = useContext(HeaderContext);

  const [wrapperCeoContent, setWrapperCeo] = useState(false);
  const [wrapperCompany, setWrapperCompany] = useState(false);

  const wrapperMenuCompany = () => {
    setWrapperCompany(!wrapperCompany);
    setOpenMenuSidebar(false);
    setWrapperCeo(false);
  };
  const wrapperMenuCeo = () => {
    setWrapperCeo(!wrapperCeoContent);
    setOpenMenuSidebar(false);
    setWrapperCompany(false);
  };

  return (
    <MenuHeaderContext.Provider
      value={{
        wrapperMenuCompany,
        wrapperCompany,
        setWrapperCompany,
        wrapperMenuCeo,
        wrapperCeoContent,
      }}
    >
      {children}
    </MenuHeaderContext.Provider>
  );
};
