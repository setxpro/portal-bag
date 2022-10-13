import { createContext, ReactNode, useState } from "react";

interface Props {
  openMenuSidebar: boolean;
  wrapperMenu: () => void;
  setOpenMenuSidebar: React.Dispatch<React.SetStateAction<boolean>>;

  purpleHeader: boolean;
  grayHeader: boolean;
  greenHeader: boolean;
  redHeader: boolean;
  blueHeader: boolean;
  orangeHeader: boolean;
  darkGrayHeader: boolean;

  rootPalletPurple: () => void;
  rootPalletGray: () => void;
  rootPalletGreen: () => void;
  rootPalletRed: () => void;
  rootPalletBlue: () => void;
  rootPalletOrange: () => void;
  rootPalletDarkGray: () => void;
}

export const HeaderContext = createContext({} as Props);

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [openMenuSidebar, setOpenMenuSidebar] = useState(false);

  const [purpleHeader, setPurpleHeader] = useState(false);
  const [grayHeader, setGrayHeader] = useState(false);
  const [greenHeader, setGreenHeader] = useState(false);
  const [redHeader, setRedHeader] = useState(false);
  const [blueHeader, setBlueHeader] = useState(false);
  const [orangeHeader, setOrangeHeader] = useState(false);
  const [darkGrayHeader, setDarkGrayHeader] = useState(false);

  const wrapperMenu = () => {
    setOpenMenuSidebar(!openMenuSidebar);
  };

  const rootPalletPurple = () => {
    setPurpleHeader(true);
    setGrayHeader(false);
    setGreenHeader(false);
    setRedHeader(false);
    setBlueHeader(false);
    setOrangeHeader(false);
    setDarkGrayHeader(false);
  };
  const rootPalletGray = () => {
    setGrayHeader(true);
    setPurpleHeader(false);
    setGreenHeader(false);
    setRedHeader(false);
    setBlueHeader(false);
    setOrangeHeader(false);
    setDarkGrayHeader(false);
  };
  const rootPalletGreen = () => {
    setGreenHeader(true);
    setPurpleHeader(false);
    setGrayHeader(false);
    setRedHeader(false);
    setBlueHeader(false);
    setOrangeHeader(false);
    setDarkGrayHeader(false);
  };
  const rootPalletRed = () => {
    setRedHeader(true);
    setPurpleHeader(false);
    setGreenHeader(false);
    setGrayHeader(false);
    setBlueHeader(false);
    setOrangeHeader(false);
    setDarkGrayHeader(false);
  };
  const rootPalletBlue = () => {
    setBlueHeader(true);
    setRedHeader(false);
    setPurpleHeader(false);
    setGreenHeader(false);
    setGrayHeader(false);
    setOrangeHeader(false);
    setDarkGrayHeader(false);
  };
  const rootPalletOrange = () => {
    setOrangeHeader(true);
    setBlueHeader(false);
    setRedHeader(false);
    setPurpleHeader(false);
    setGreenHeader(false);
    setGrayHeader(false);
    setDarkGrayHeader(false);
  };
  const rootPalletDarkGray = () => {
    setDarkGrayHeader(true);
    setOrangeHeader(false);
    setBlueHeader(false);
    setRedHeader(false);
    setPurpleHeader(false);
    setGreenHeader(false);
    setGrayHeader(false);
  };

  return (
    <HeaderContext.Provider
      value={{
        openMenuSidebar,
        wrapperMenu,
        setOpenMenuSidebar,

        purpleHeader,
        grayHeader,
        greenHeader,
        redHeader,
        blueHeader,
        orangeHeader,
        darkGrayHeader,
        rootPalletPurple,
        rootPalletGray,
        rootPalletGreen,
        rootPalletRed,
        rootPalletBlue,
        rootPalletOrange,
        rootPalletDarkGray,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
