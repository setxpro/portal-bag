import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SendResponseContext } from "../../Contexts/SendResponse";

import * as C from "./styles";
import { HeaderContext } from "./../../Contexts/Header/HeaderContext";

const DropDownHeaderNotify: React.FC = () => {
  const { titles } = useContext(SendResponseContext);
  const { openNotify } = useContext(HeaderContext);

  return (
    <C.Container isOpen={openNotify}>
      <div className="header">Fornecedor | Natureza</div>
      <div className="content-tabs">
        {titles.map((item, index) => {
          if (item.ADFIWKF === "SHEHRAZADE     ")
            return (
              <React.Fragment key={index}>
                <Link to={`/modal/${item.ANTIWKF}`}>
                  {item.ADFIWKF} | Natureza : {item.ANATWKF}
                </Link>
              </React.Fragment>
            );
        })}
      </div>
      <div className="header">Fornecedor | Natureza</div>
      <div className="content-tabs">
        {titles.map((item, index) => {
          if (item.ADFIWKF === "ORIGINAL")
            return (
              <React.Fragment key={index}>
                <Link to={`/modal/${item.ANTIWKF}`}>
                  {item.ADFIWKF} | Natureza : {item.ANATWKF}
                </Link>
              </React.Fragment>
            );
        })}
      </div>
    </C.Container>
  );
};

export default DropDownHeaderNotify;
