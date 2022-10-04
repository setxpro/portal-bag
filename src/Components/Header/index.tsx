import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/Auth/AuthContext";
import { useHeader } from "../../Hooks/useHeader";
import { useTheme } from "../../Hooks/useTheme";

import * as C from "./styles";

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const { wrapperMenu, openMenuSidebar } = useHeader();
  const { user } = useContext(AuthContext);

  const [isLogged, setIsLogged] = useState(false);
  const [notify, setNotify] = useState(5);

  const name = user?.FULLNAME.replace(".", " ");

  let posicao = name as string;
  let item = posicao.split(" ");

  let firstLetter = item[0].charAt(0).toUpperCase();
  let secondLetter = item[1].charAt(0).toUpperCase();

  useEffect(() => {
    if (user?.ID) {
      setIsLogged(true);
      setNotify(5);
    }
  }, [user?.ID]);

  return (
    <C.Container>
      <C.ContentLeft>
        <C.ContentBtenPc>
          {openMenuSidebar ? "" : <C.BarsMenu onClick={wrapperMenu} />}
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
            {user?.AVATAR === undefined && (
              <div className="avatar-notfound">
                <span>{firstLetter}</span>
                <span>{secondLetter}</span>
              </div>
            )}
            {user?.AVATAR && <img src={user.AVATAR} alt="avatar" />}
          </div>
        </C.ContentAreaNameAndAvatar>
      </C.ContentRight>
    </C.Container>
  );
};

export default Header;
