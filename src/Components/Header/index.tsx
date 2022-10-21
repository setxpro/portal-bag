import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/Auth/AuthContext";
import { HeaderContext } from "../../Contexts/Header/HeaderContext";
import { SendResponseContext } from "../../Contexts/SendResponse";
import { useHeader } from "../../Hooks/useHeader";
import { useTheme } from "../../Hooks/useTheme";
import DropDownHeaderNotify from "../DropDownHeaderNotify";

import * as C from "./styles";

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const { titles } = useContext(SendResponseContext);
  const {
    wrapperMenu,
    openMenuSidebar,
    blueHeader,
    redHeader,
    darkGrayHeader,
    grayHeader,
    greenHeader,
    orangeHeader,
    purpleHeader,
  } = useHeader();
  const { user } = useContext(AuthContext);

  const [isLogged, setIsLogged] = useState(false);
  const [notify, setNotify] = useState(0);
  const [avatar, setAvatar] = useState("");
  const { wrapperNotify } = useContext(HeaderContext);

  const name = user?.FULLNAME.replace(".", " ");

  let posicao = name as string;
  let item = posicao.split(" ");

  let firstLetter = item[0].charAt(0).toUpperCase();
  let secondLetter = item[1].charAt(0).toUpperCase();

  useEffect(() => {
    if (user?.ID) {
      setIsLogged(true);
      setNotify(titles.length);
    }
  }, [user?.ID, titles.length]);

  useEffect(() => {
    const storageDb = localStorage.getItem("avatar");
    setAvatar(`${storageDb}`);
  }, []);

  return (
    <C.Container
      blue={blueHeader}
      red={redHeader}
      green={greenHeader}
      purple={purpleHeader}
      gray={grayHeader}
      palletDGrayContainer={darkGrayHeader}
      orange={orangeHeader}
    >
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
        <C.ContentAreaNotify
          notify={notify}
          blue={blueHeader}
          red={redHeader}
          green={greenHeader}
          purple={purpleHeader}
          gray={grayHeader}
          palletDGrayNotify={darkGrayHeader}
          orange={orangeHeader}
        >
          <div className="notification" onClick={wrapperNotify}>
            <C.BellIcon />
          </div>
          <DropDownHeaderNotify />
        </C.ContentAreaNotify>

        <C.ContentAreaToggleTheme>
          {(theme.title === "light" && <C.Dark onClick={toggleTheme} />) ||
            (theme.title === "dark" && <C.Light onClick={toggleTheme} />)}
        </C.ContentAreaToggleTheme>

        <C.ContentAreaNameAndAvatar
          isLogged={isLogged}
          blue={blueHeader}
          red={redHeader}
          green={greenHeader}
          purple={purpleHeader}
          gray={grayHeader}
          palletDGrayContentNameAvatar={darkGrayHeader}
          orange={orangeHeader}
        >
          <C.ContentNameArea
            palletDGrayContentName={darkGrayHeader}
            palletBlueContentName={blueHeader}
            palletReadContentName={redHeader}
            palletGreenContentName={greenHeader}
            palletPurpleContentName={purpleHeader}
            palletGrayContentName={grayHeader}
          >
            <h4>{name}</h4>
            <h6>{user?.CARGO}</h6>
          </C.ContentNameArea>
          <div className="avatar">
            {(avatar === "null" && (
              <div className="avatar-notfound">
                <span>{firstLetter}</span>
                <span>{secondLetter}</span>
              </div>
            )) ||
              (avatar !== "" && <img src={avatar} alt="avatar" />)}
          </div>
        </C.ContentAreaNameAndAvatar>
      </C.ContentRight>
    </C.Container>
  );
};

export default Header;
