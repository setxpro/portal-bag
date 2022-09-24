import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/Auth/AuthContext";
import { PalletContext } from "../../Contexts/Pallet/Pallet";
import { useHeader } from "../../Hooks/useHeader";

import * as C from "./styles";

const Sidebar: React.FC = () => {
  const { cHome, cTable, getHome, getTable } = useContext(PalletContext);
  const { signout } = useContext(AuthContext);
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
            <Link to="/" onClick={getHome} className={cHome ? "active" : ""}>
              Contas a Pagar
            </Link>
            <Link
              to="/table"
              onClick={getTable}
              className={cTable ? "active" : ""}
            >
              Cadastro Etiquetas
            </Link>
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
