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
      {titles.length === 0 ? (
        <div className="empty-titles">
          <span>Não há títulos para aprovar</span>
        </div>
      ) : (
        <React.Fragment>
          <div className="header">Shehrazade</div>
          <div className="content-tabs">
            {titles.map((item, index) => {
              if (item.ADFIWKF === "SHEHRAZADE")
                return (
                  <React.Fragment key={index}>
                    <Link to={`/modal/${item.ANTIWKF}`}>
                      {item.ADFIWKF} | Natureza : {item.ANATWKF}
                    </Link>
                  </React.Fragment>
                );

              return null;
            })}
          </div>

          <div className="header">Original</div>
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

              return null;
            })}
          </div>

          <div className="header">Radu</div>
          <div className="content-tabs">
            {titles.map((item, index) => {
              if (item.ADFIWKF === "RADU")
                return (
                  <React.Fragment key={index}>
                    <Link to={`/modal/${item.ANTIWKF}`}>
                      {item.ADFIWKF} | Natureza : {item.ANATWKF}
                    </Link>
                  </React.Fragment>
                );

              return null;
            })}
          </div>

          <div className="header">Bag Online</div>
          <div className="content-tabs">
            {titles.map((item, index) => {
              if (item.ADFIWKF === "BAG ONLINE")
                return (
                  <React.Fragment key={index}>
                    <Link to={`/modal/${item.ANTIWKF}`}>
                      {item.ADFIWKF} | Natureza : {item.ANATWKF}
                    </Link>
                  </React.Fragment>
                );

              return null;
            })}
          </div>
        </React.Fragment>
      )}
    </C.Container>
  );
};

export default DropDownHeaderNotify;
