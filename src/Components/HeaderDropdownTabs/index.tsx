import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuHeaderContext } from "../../Contexts/MenuHeader";

import * as C from "./styles";

export const HeaderDropdownCompanies: React.FC = () => {
  const { wrapperCompany } = useContext(MenuHeaderContext);

  return (
    <>
      {wrapperCompany && (
        <C.ContainerCompany>
          <Link to="/shehrazade">Shehrazade</Link>
          <Link to="/radu">Radu</Link>
          <Link to="/test">Mockados</Link>
        </C.ContainerCompany>
      )}
    </>
  );
};

export const HeaderDropdownOptions: React.FC = () => {
  const { wrapperOptions } = useContext(MenuHeaderContext);
  return (
    <>
      {wrapperOptions && (
        <C.ContainerOption>
          <Link to="/opt1">Centro de custo 1</Link>
          <Link to="/opt2">Centro de custo 2</Link>
        </C.ContainerOption>
      )}
    </>
  );
};
