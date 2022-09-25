import { createContext, ReactNode, useState } from "react";

interface Props {
  openMenuSidebar: boolean;
  wrapperMenu: () => void;
}

export const HeaderContext = createContext({} as Props);

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [openMenuSidebar, setOpenMenuSidebar] = useState(false);
  const wrapperMenu = () => setOpenMenuSidebar(!openMenuSidebar);

  return (
    <HeaderContext.Provider
      value={{
        openMenuSidebar,
        wrapperMenu,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
