import React, { createContext, ReactNode, useState } from "react";

interface Props {
  wrapperMenuOptions: () => void;
  wrapperOptions: boolean;
  wrapperMenuCompany: () => void;
  wrapperCompany: boolean;
}

export const MenuHeaderContext = createContext({} as Props);

export const MenuHeaderProvider = ({ children }: { children: ReactNode }) => {
  const [wrapperCompany, setWrapperCompany] = useState(false);
  const [wrapperOptions, setWrapperOpions] = useState(false);

  const wrapperMenuOptions = () => {
    setWrapperOpions(!wrapperOptions);
    setWrapperCompany(false);
  };
  const wrapperMenuCompany = () => {
    setWrapperCompany(!wrapperCompany);
    setWrapperOpions(false);
  };

  return (
    <MenuHeaderContext.Provider
      value={{
        wrapperMenuOptions,
        wrapperOptions,
        wrapperMenuCompany,
        wrapperCompany,
      }}
    >
      {children}
    </MenuHeaderContext.Provider>
  );
};
