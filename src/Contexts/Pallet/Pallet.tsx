import { createContext, ReactNode, useState } from "react";
import { useHeader } from "../../Hooks/useHeader";

type PalletProps = {
  cHome: boolean;
  cTable: boolean;
  cFlex: boolean;
  cRelatory: boolean;
  getHome: () => void;
  getTable: () => void;
  getFlex: () => void;
  getRelatory: () => void;
};

export const PalletContext = createContext({} as PalletProps);

export const PalletProvider = ({ children }: { children: ReactNode }) => {
  const { wrapperMenu } = useHeader();

  const [cHome, setCHome] = useState(false);
  const [cTable, setCTable] = useState(false);
  const [cFlex, setFlex] = useState(false);
  const [cRelatory, setRelatory] = useState(false);

  function getHome() {
    setCHome(true);
    setCTable(false);
    setFlex(false);
    setRelatory(false);
    wrapperMenu(); // Closo sidebar onClick
  }
  function getTable() {
    setCTable(true);
    setCHome(false);
    setFlex(false);
    setRelatory(false);
    wrapperMenu(); // Closo sidebar onClick
  }
  function getFlex() {
    setFlex(true);
    setCHome(false);
    setCTable(false);
    setRelatory(false);
    wrapperMenu(); // Closo sidebar onClick
  }
  function getRelatory() {
    setRelatory(true);
    setCHome(false);
    setFlex(false);
    setCTable(false);
    wrapperMenu(); // Closo sidebar onClick
  }

  return (
    <PalletContext.Provider
      value={{
        cHome,
        cTable,
        getHome,
        getTable,
        getFlex,
        getRelatory,
        cFlex,
        cRelatory,
      }}
    >
      {children}
    </PalletContext.Provider>
  );
};
