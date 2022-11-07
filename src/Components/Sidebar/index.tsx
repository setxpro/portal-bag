import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth/AuthContext";
import { PalletContext } from "../../Contexts/Pallet/Pallet";
import { useHeader } from "../../Hooks/useHeader";

import * as C from "./styles";

const Sidebar: React.FC = () => {
  const {
    cHome,
    cTable,
    cTodo,
    cFlex,
    cRelatory,
    getHome,
    getTable,
    getFlex,
    getRelatory,
    getTodo,
  } = useContext(PalletContext);
  const { signout, user } = useContext(AuthContext);
  const { openMenuSidebar, wrapperMenu } = useHeader();

  const cPagar = user?.ASSIGNMENTS.includes("001");
  const cEtiquetas = user?.ASSIGNMENTS.includes("002");
  const cRelatoryVendas = user?.ASSIGNMENTS.includes("003");
  const cVendasFlex = user?.ASSIGNMENTS.includes("031");

  return (
    <C.Container wrapSidebar={openMenuSidebar}>
      <C.ContentLogo>
        <h3>BAGAGGIO</h3>
        <C.CloseMenu onClick={wrapperMenu} />
      </C.ContentLogo>
      <C.ContentNavArea>
        <nav>
          <ul>
            <Link to="/" className="home-active">
              Home
            </Link>

            {cPagar && (
              <Link
                to="/shehrazade"
                onClick={getHome}
                className={cHome ? "active" : ""}
              >
                Contas a Pagar
              </Link>
            )}

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
            <Link
              to="/todo"
              onClick={getTodo}
              className={cTodo ? "active" : ""}
            >
              TO-DO
            </Link>
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
