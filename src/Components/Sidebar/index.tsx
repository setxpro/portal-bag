import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/Auth/AuthContext";
import { PalletContext } from "../../Contexts/Pallet/Pallet";
import { useHeader } from "../../Hooks/useHeader";
import { SendResponseContext } from "./../../Contexts/SendResponse/index";

import * as C from "./styles";

const Sidebar: React.FC = () => {
  const { titles } = useContext(SendResponseContext);

  const {
    cHome,
    cTable,
    cFlex,
    cRelatory,
    getHome,
    getTable,
    getFlex,
    getRelatory,
    getShehrazade,
    cShehrazade,
    cOriginal,
    getOriginal,
    cRadu,
    getRadu,
    cMalas88,
    getMalas88,
    cOption,
    getOption,
    getRemoveStyles,
    cInitial,
  } = useContext(PalletContext);
  const { signout, user } = useContext(AuthContext);
  const { openMenuSidebar, wrapperMenu } = useHeader();

  const [open, setOpen] = useState(true);

  const cPagar = user?.ASSIGNMENTS.includes("001");
  const cEtiquetas = user?.ASSIGNMENTS.includes("002");
  const cRelatoryVendas = user?.ASSIGNMENTS.includes("003");
  const cVendasFlex = user?.ASSIGNMENTS.includes("031");

  function getThemeAndOpenDropdown() {
    getHome();
    setOpen(!open);

    if (countSher >= 1 && opts === false) {
      return toast.warning("Não há títulos registrado no momento!");
    }
  }

  // Verify if exists
  const item01 =
    titles.find((item) => item.ALBLWKF)?.ALBLWKF ===
    "SEM CENTRO DE CUSTO CADASTRADO";
  const item02 = titles.find((item) => item.ALBLWKF)?.ALBLWKF === "FINANCEIRO";
  const item03 = titles.find((item) => item.ALBLWKF)?.ALBLWKF === "FISCAL";

  // Verify the length items

  const opt = titles.find((item) => item.ADFIWKF);

  let countSher = opt?.ADFIWKF.length as number; // count items
  let opts = opt?.ALBLWKF === "CC"; // true

  let nameSher = opt?.ADFIWKF === "SHEHRAZADE"; // true
  let nameOri = opt?.ADFIWKF === "ORIGINAL";
  let nameRad = opt?.ADFIWKF === "RADU";
  let nameMal88 = opt?.ADFIWKF === "MALAS 88";
  let nameEsBag = opt?.ADFIWKF === "ES BAG";
  let nameBagBr = opt?.ADFIWKF === "BAG BRASILO";
  let nameBagMerc = opt?.ADFIWKF === "BAGMERCADAO";
  let nameBagLog = opt?.ADFIWKF === "BAGLOG";
  let nameBagOn = opt?.ADFIWKF === "BAG ONLINE";
  let nameBagImp = opt?.ADFIWKF === "BAGIMPERIAL";

  return (
    <C.Container wrapSidebar={openMenuSidebar}>
      <C.ContentLogo>
        <h3>BAGAGGIO</h3>
        <C.CloseMenu onClick={wrapperMenu} />
      </C.ContentLogo>
      <C.ContentNavArea>
        <nav>
          <ul>
            <Link
              to="/"
              className={cInitial ? "active" : ""}
              onClick={getRemoveStyles}
            >
              Home
            </Link>
            {cPagar && (
              <Link
                // to="/shehrazade"
                to="#"
                onClick={getThemeAndOpenDropdown}
                className={cHome ? "active cta" : ""}
              >
                <span>Contas a Pagar</span> <C.ArrowIcon />
              </Link>
            )}

            {open && (
              <>
                {countSher >= 1 && opts === true && nameSher ? (
                  <Link
                    to="/shehrazade"
                    onClick={getShehrazade}
                    className={cShehrazade ? "active" : ""}
                  >
                    SHEHRAZADE
                  </Link>
                ) : null}

                {countSher >= 1 && opts === true && nameOri ? (
                  <Link
                    to="/original"
                    onClick={getOriginal}
                    className={cOriginal ? "active" : ""}
                  >
                    ORIGINAL
                  </Link>
                ) : null}

                {countSher >= 1 && opts === true && nameRad ? (
                  <Link
                    to="/radu"
                    onClick={getRadu}
                    className={cRadu ? "active" : ""}
                  >
                    RADU
                  </Link>
                ) : null}

                {countSher >= 1 && opts === true && nameMal88 ? (
                  <Link
                    to="/malas88"
                    onClick={getMalas88}
                    className={cMalas88 ? "active" : ""}
                  >
                    MALAS 88
                  </Link>
                ) : null}

                {countSher >= 1 && opts === true && nameEsBag ? (
                  <Link
                    to="/#"
                    onClick={getMalas88}
                    className={cMalas88 ? "active" : ""}
                  >
                    ES BAG
                  </Link>
                ) : null}
                {countSher >= 1 && opts === true && nameBagBr ? (
                  <Link
                    to="/#"
                    // onClick={getMalas88}
                    // className={cMalas88 ? "active" : ""}
                  >
                    BAG BRASIL
                  </Link>
                ) : null}
                {countSher >= 1 && opts === true && nameBagMerc ? (
                  <Link
                    to="/#"
                    // onClick={getMalas88}
                    // className={cMalas88 ? "active" : ""}
                  >
                    BAGMERCADAO
                  </Link>
                ) : null}
                {countSher >= 1 && opts === true && nameBagLog ? (
                  <Link
                    to="/#"
                    // onClick={getMalas88}
                    // className={cMalas88 ? "active" : ""}
                  >
                    BAGLOG
                  </Link>
                ) : null}
                {countSher >= 1 && opts === true && nameBagOn ? (
                  <Link
                    to="/#"
                    // onClick={getMalas88}
                    // className={cMalas88 ? "active" : ""}
                  >
                    BAG ONLINE
                  </Link>
                ) : null}
                {countSher >= 1 && opts === true && nameBagImp ? (
                  <Link
                    to="/#"
                    // onClick={getMalas88}
                    // className={cMalas88 ? "active" : ""}
                  >
                    BAGIMPERIAL
                  </Link>
                ) : null}
              </>
            )}
            {item01 ? "" : null}
            {item02 ? (
              <Link
                to="/opt1"
                onClick={getOption}
                className={cOption ? "active" : ""}
              >
                FINANCEIRO
              </Link>
            ) : null}
            {item03 ? (
              <Link
                to="/opt1"
                onClick={getOption}
                className={cOption ? "active" : ""}
              >
                FISCAL
              </Link>
            ) : null}

            {cEtiquetas && (
              <Link
                to="/etiquetasDeConserto"
                onClick={getTable}
                className={cTable ? "active" : ""}
              >
                Cadastro Etiquetas
              </Link>
            )}
            {cVendasFlex && (
              <Link
                to="/vendas-flex"
                onClick={getFlex}
                className={cFlex ? "active" : ""}
              >
                Vendas do Flex
              </Link>
            )}
            {cRelatoryVendas && (
              <Link
                to="/relatorio-vendas"
                onClick={getRelatory}
                className={cRelatory ? "active" : ""}
              >
                Relatório de Vendas
              </Link>
            )}
            {/* <Link
              to="/todo"
              onClick={getTodo}
              className={cTodo ? "active" : ""}
            >
              TO-DO
            </Link> */}
          </ul>
        </nav>
      </C.ContentNavArea>
      <C.ContentAreaSettings>
        <C.LogoutIcon onClick={() => signout()} />
        <Link to="/settings">
          <C.SettingsIcon onClick={wrapperMenu} />
        </Link>
      </C.ContentAreaSettings>
    </C.Container>
  );
};

export default Sidebar;
