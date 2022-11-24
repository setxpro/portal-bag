import { createContext, ReactNode, useState } from "react";
import { useHeader } from "../../Hooks/useHeader";

type PalletProps = {
  cHome: boolean;
  cTable: boolean;
  cFlex: boolean;
  cRelatory: boolean;
  cShehrazade: boolean;
  cOriginal: boolean;
  cRadu: boolean;
  cMalas88: boolean;
  cInitial: boolean;
  cOption: boolean;
  getHome: () => void;
  getTable: () => void;
  getFlex: () => void;
  getRelatory: () => void;
  getShehrazade: () => void;
  getOriginal: () => void;
  getRadu: () => void;
  getMalas88: () => void;
  getOption: () => void;
  getRemoveStyles: () => void;
};

export const PalletContext = createContext({} as PalletProps);

export const PalletProvider = ({ children }: { children: ReactNode }) => {
  const { wrapperMenu } = useHeader();

  const [cHome, setCHome] = useState(false);
  const [cTable, setCTable] = useState(false);
  const [cFlex, setFlex] = useState(false);
  const [cRelatory, setRelatory] = useState(false);
  const [cShehrazade, setShehrazade] = useState(false);
  const [cOriginal, setOriginal] = useState(false);
  const [cRadu, setRadu] = useState(false);
  const [cMalas88, setMalas88] = useState(false);
  const [cOption, setOption] = useState(false);
  const [cInitial, setInitial] = useState(false);

  function getRemoveStyles() {
    setInitial(true);
    setShehrazade(false);
    setOption(false);
    setOriginal(false);
    setRadu(false);
    setMalas88(false);
    setCHome(false);
    setCTable(false);
    setFlex(false);
    setRelatory(false);
  }

  function getShehrazade() {
    setShehrazade(true);
    setOption(false);
    setOriginal(false);
    setRadu(false);
    setMalas88(false);
    setCHome(false);
    setCTable(false);
    setFlex(false);
    setRelatory(false);
    wrapperMenu(); // Closo sidebar onClick
  }

  function getHome() {
    setCHome(true);
    setInitial(false);
    setCTable(false);
    setFlex(false);
    setRelatory(false);
    setShehrazade(false);
    // wrapperMenu(); // Closo sidebar onClick
  }
  function getTable() {
    setCTable(true);
    setCHome(false);
    setFlex(false);
    setRelatory(false);
    setShehrazade(false);
    wrapperMenu(); // Closo sidebar onClick
  }
  function getFlex() {
    setFlex(true);
    setCHome(false);
    setCTable(false);
    setRelatory(false);
    setShehrazade(false);
    wrapperMenu(); // Closo sidebar onClick
  }
  function getRelatory() {
    setRelatory(true);
    setCHome(false);
    setFlex(false);
    setCTable(false);
    setShehrazade(false);
    wrapperMenu(); // Closo sidebar onClick
  }

  // New Companies
  function getOriginal() {
    setOriginal(true);
    setMalas88(false);
    setOption(false);
    setRadu(false);
    setShehrazade(false);
    setRelatory(false);
    setCHome(false);
    setFlex(false);
    setCTable(false);
    wrapperMenu(); // Closo sidebar onClick
  }
  function getRadu() {
    setRadu(true);
    setMalas88(false);
    setOption(false);
    setOriginal(false);
    setRelatory(false);
    setCHome(false);
    setFlex(false);
    setCTable(false);
    setShehrazade(false);
    wrapperMenu(); // Closo sidebar onClick
  }
  function getMalas88() {
    setMalas88(true);
    setOption(false);
    setOriginal(false);
    setRadu(false);
    setRelatory(false);
    setCHome(false);
    setFlex(false);
    setCTable(false);
    setShehrazade(false);
    wrapperMenu(); // Closo sidebar onClick
  }

  function getOption() {
    setOption(true);
    setOriginal(false);
    setRadu(false);
    setMalas88(false);
    setRelatory(false);
    setCHome(false);
    setFlex(false);
    setCTable(false);
    setShehrazade(false);
    wrapperMenu(); // Closo sidebar onClick
  }

  return (
    <PalletContext.Provider
      value={{
        cHome,
        cTable,
        cShehrazade,
        getShehrazade,
        getHome,
        getTable,
        getFlex,
        getRelatory,
        getOriginal,
        getRadu,
        getMalas88,
        getOption,
        cFlex,
        cRelatory,
        cOriginal,
        cRadu,
        cMalas88,
        cOption,
        getRemoveStyles,
        cInitial,
      }}
    >
      {children}
    </PalletContext.Provider>
  );
};
