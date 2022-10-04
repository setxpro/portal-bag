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
    cFlex,
    cRelatory,
    getHome,
    getTable,
    getFlex,
    getRelatory,
  } = useContext(PalletContext);
  const { signout, user } = useContext(AuthContext);
  const { openMenuSidebar, wrapperMenu } = useHeader();

  console.log();

  const cPagar = user?.ASSIGNMENTS[0];
  const cEtiquetas = user?.ASSIGNMENTS[1];
  const cRelatoryVendas = user?.ASSIGNMENTS[3];
  const cVendasFlex = user?.ASSIGNMENTS[4];

  return (
    <C.Container wrapSidebar={openMenuSidebar}>
      <C.ContentLogo>
        <h3>BAGAGGIO</h3>
        <C.CloseMenu onClick={wrapperMenu} />
      </C.ContentLogo>
      <C.ContentNavArea>
        <nav>
          <ul>
            <Link to="/" className="active">
              Home
            </Link>
            {cPagar === "001" && (
              <Link
                to="/shehrazade"
                onClick={getHome}
                className={cHome ? "active" : ""}
              >
                Contas a Pagar
              </Link>
            )}
            {cEtiquetas === "002" && (
              <Link
                to="/table"
                onClick={getTable}
                className={cTable ? "active" : ""}
              >
                Cadastro Etiquetas
              </Link>
            )}

            {cVendasFlex !== "003" && (
              <Link
                to="/vendas-flex"
                onClick={getFlex}
                className={cFlex ? "active" : ""}
              >
                Vendas do Flex
              </Link>
            )}
            {cRelatoryVendas !== "031" && (
              <Link
                to="/relatorio-vendas"
                onClick={getRelatory}
                className={cRelatory ? "active" : ""}
              >
                Relatório de Vendas
              </Link>
            )}
            <Link to="#" onClick={() => signout()}>
              Logout
            </Link>
          </ul>
        </nav>
      </C.ContentNavArea>
    </C.Container>
  );
};

export default Sidebar;
