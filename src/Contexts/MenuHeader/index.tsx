import React, { createContext, ReactNode, useContext, useState } from "react";
import { HeaderContext } from "../Header/HeaderContext";

interface Props {
  wrapperMenuOptions: () => void;
  wrapperOptions: boolean;
  wrapperMenuCompany: () => void;
  wrapperCompany: boolean;
  setWrapperCompany: React.Dispatch<React.SetStateAction<boolean>>;
  setWrapperOpions: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuHeaderContext = createContext({} as Props);

export const MenuHeaderProvider = ({ children }: { children: ReactNode }) => {
  const [wrapperCompany, setWrapperCompany] = useState(false);
  const [wrapperOptions, setWrapperOpions] = useState(false);
  const { setOpenMenuSidebar } = useContext(HeaderContext);

  const wrapperMenuOptions = () => {
    setWrapperOpions(!wrapperOptions);
    setWrapperCompany(false);
    setOpenMenuSidebar(false);
  };
  const wrapperMenuCompany = () => {
    setWrapperCompany(!wrapperCompany);
    setWrapperOpions(false);
    setOpenMenuSidebar(false);
  };

  return (
    <MenuHeaderContext.Provider
      value={{
        wrapperMenuOptions,
        wrapperOptions,
        wrapperMenuCompany,
        wrapperCompany,
        setWrapperCompany,
        setWrapperOpions,
      }}
    >
      {children}
    </MenuHeaderContext.Provider>
  );
};
