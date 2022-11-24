import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import * as C from "./styles";
import { SendResponseContext } from "./../../Contexts/SendResponse";
import { MenuHeaderContext } from "./../../Contexts/MenuHeader";

export const HeaderDropdownCompanies: React.FC = () => {
  const { titles } = useContext(SendResponseContext);
  const { wrapperCompany } = useContext(MenuHeaderContext);

  const [countItems] = useState(3); // Alter when insert company
  const company = titles[0]?.ADFIWKF.replace("     ", "");
  const centerCust = titles[0]?.ADCCWKF.replace(
    "                                                         ",
    ""
  );

  let count = countItems;

  const [ceoC, setCeoC] = useState(false);
  const wrapperCeo = () => {
    setCeoC(!ceoC);
    setCeoB(false);
  };

  const [ceoB, setCeoB] = useState(false);
  const wrapperCeo2 = () => {
    setCeoB(!ceoB);
    setCeoC(false);
  };

  return (
    <C.ContainerCompany item={count} wr={ceoC} wr2={ceoB} open={wrapperCompany}>
      <Link to="#" onClick={wrapperCeo}>
        Shehrazade <C.ArrowDown />
      </Link>

      {company === "SHEHRAZADE" && centerCust === "CEO" ? (
        <Link to="/opt1" className="drop1">
          CEO
        </Link>
      ) : (
        ""
      )}

      <Link to="#" onClick={wrapperCeo2}>
        Original <C.ArrowDown />
      </Link>

      {company === "SHEHRAZADE" && centerCust === "CEO" ? (
        <Link to="/original" className="drop2">
          CEO
        </Link>
      ) : (
        ""
      )}
    </C.ContainerCompany>
  );
};
