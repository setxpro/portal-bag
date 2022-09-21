import React, { useState } from "react";
import { useHeader } from "../../Hooks/useHeader";
import { useTheme } from "../../Hooks/useTheme";

import * as C from "./styles";

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const { wrapperMenu, openMenuSidebar } = useHeader();

  const [isLogged, setIsLogged] = useState(true);
  const [notify, setNotify] = useState(1);

  const name = "Patrick Anjos";

  return (
    <C.Container>
      <C.ContentLeft>
        <C.ContentBtenPc>
          {openMenuSidebar ? (
            <C.CloseMenu onClick={wrapperMenu} />
          ) : (
            <C.BarsMenu onClick={wrapperMenu} />
          )}
        </C.ContentBtenPc>
        <C.ContentBtnMobile>
          {openMenuSidebar ? (
            <C.CloseMenu onClick={wrapperMenu} />
          ) : (
            <C.BarsMenu onClick={wrapperMenu} />
          )}
        </C.ContentBtnMobile>
      </C.ContentLeft>
      <C.ContentRight>
        <C.ContentAreaNotify notify={notify}>
          <div className="notification">
            <C.BellIcon />
          </div>
        </C.ContentAreaNotify>

        <C.ContentAreaToggleTheme>
          {(theme.title === "light" && <C.Dark onClick={toggleTheme} />) ||
            (theme.title === "dark" && <C.Light onClick={toggleTheme} />)}
        </C.ContentAreaToggleTheme>

        <C.ContentAreaNameAndAvatar isLogged={isLogged}>
          <C.ContentNameArea>
            <h4>{name}</h4>
            <h6>Developer</h6>
          </C.ContentNameArea>
          <div className="avatar">
            <img src="https://github.com/setxpro.png" alt="avatar" />
          </div>
        </C.ContentAreaNameAndAvatar>
      </C.ContentRight>
    </C.Container>
  );
};

export default Header;
