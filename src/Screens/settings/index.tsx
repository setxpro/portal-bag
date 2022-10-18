import React, { useState } from "react";

import * as C from "./styles";
import { Title } from "./../../Components/Page/Title/index";
import Content from "../../Components/Page/Content";
import { useHeader } from "../../Hooks/useHeader";
import { useTheme } from "./../../Hooks/useTheme";

const Settings = () => {
  const [newPicture, setNewPicture] = useState<string | ArrayBuffer | null>("");
  const [loading, setLoading] = useState(false);

  const {
    rootPalletBlue,
    rootPalletDarkGray,
    rootPalletGray,
    rootPalletGreen,
    rootPalletOrange,
    rootPalletPurple,
    rootPalletRed,
  } = useHeader();

  const { toggleTheme } = useTheme();

  const handleProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        setNewPicture(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file[0]);
    }
  };

  const handleBase64 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setLoading(true);
    const storageData = localStorage.setItem("avatar", `${newPicture}`);

    if (!newPicture) {
      alert("Você deve ao menos importar uma imagem antes de cadastrar...");
      return;
    }
    return storageData;
  };

  return (
    <C.Container>
      <Title title="Configurações" />
      <C.ContentArea>
        <Content>
          <C.ContentTheme>
            <div className="content-alter-theme">
              <h4>Alterar o thema</h4>
              <div className="sub-content-alter-theme">
                <button onClick={toggleTheme}>
                  <C.Light />
                </button>
                <button onClick={toggleTheme}>
                  <C.Dark />
                </button>
              </div>
            </div>
            <div className="content-toggle-theme">
              <h4>Alterar o header</h4>
              <div className="sub-content-toggle-theme">
                <button onClick={rootPalletPurple}></button>
                <button onClick={rootPalletGray}></button>
                <button onClick={rootPalletGreen}></button>
                <button onClick={rootPalletRed}></button>
                <button onClick={rootPalletBlue}></button>
                <button onClick={rootPalletOrange}></button>
                <button onClick={rootPalletDarkGray}></button>
              </div>
            </div>
          </C.ContentTheme>
          <C.ContentToggleAvatar>
            <h4>Trocar ou cadastrar uma imagem</h4>
            <div className="content-avatar">
              {newPicture !== "" && <img src={`${newPicture}`} alt="avatar" />}

              <input
                type="file"
                name="profile"
                accept="image/*"
                onChange={(e) => handleProfile(e)}
              />
              {loading && (
                <div className="message-register-avatar">
                  <C.CheckOky /> Imagem Registrada com Sucesso!
                </div>
              )}
              {!loading && (
                <button onClick={handleBase64}>Cadastrar imagem</button>
              )}
            </div>
          </C.ContentToggleAvatar>
        </Content>
      </C.ContentArea>
    </C.Container>
  );
};

export default Settings;
