import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PalletContext } from "../../Contexts/Pallet/Pallet";
import { useHeader } from "../../Hooks/useHeader";

import * as C from "./styles";

const Sidebar: React.FC = () => {
  const { cHome, cTable, getHome, getTable } = useContext(PalletContext);

  const { openMenuSidebar, wrapperMenu } = useHeader();

  return (
    <C.Container wrap={openMenuSidebar}>
      <C.ContentLogo>
        <h3>BAGAGGIO</h3>
        <C.CloseMenu onClick={wrapperMenu} />
      </C.ContentLogo>
      <C.ContentNavArea>
        <nav>
          <ul>
            <Link
              to="/sherhazade"
              onClick={getHome}
              className={cHome ? "active" : ""}
            >
              Contas a Pagar
            </Link>
            <Link to="/" onClick={getTable} className={cTable ? "active" : ""}>
              Cadastro Etiquetas
            </Link>
          </ul>
        </nav>
      </C.ContentNavArea>
    </C.Container>
  );
};

export default Sidebar;
