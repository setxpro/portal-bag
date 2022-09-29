import React, { useContext, memo } from "react";
import { Link } from "react-router-dom";

import * as C from "./styles";
import { SendResponseContext } from "./../../../Contexts/SendResponse/index";

const Radu = () => {
  const { setOptions, mock, sendOneInfo } = useContext(SendResponseContext);

  const getIdByIndex = (index: number) => {
    console.log({
      ...mock[0],
      id: index,
    });
  };

  return (
    <C.Container>
      <table>
        <thead>
          <tr>
            <th>fornecedor</th>
            <th>natureza</th>
            <th>parcela</th>
            <th>+ Info</th>
            <th>A</th>
            <th>R</th>
            <th>E</th>
          </tr>
        </thead>
        <tbody>
          {mock.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.AFORWKF}</td>
                <td>{item.ANATWKF}</td>
                <td>{item.APARWKF}</td>
                <td>
                  <Link to={`/modal/${item.id}`}>
                    <C.InfoIcon onClick={() => getIdByIndex(index)} />
                  </Link>
                </td>
                <td>
                  <input
                    type="radio"
                    name={`radio-${item.id}`}
                    onChange={(e) => {
                      setOptions((prevOptions) => {
                        return {
                          ...prevOptions,
                          [index]: e.target.checked ? "Aprovado" : "",
                        };
                      });
                    }}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name={`radio-${item.id}`}
                    onChange={(e) => {
                      setOptions((prevOptions) => {
                        return {
                          ...prevOptions,
                          [index]: e.target.checked ? "Reprovado" : "",
                        };
                      });
                    }}
                  />
                </td>
                <td>
                  <input
                    type="radio"
                    name={`radio-${item.id}`}
                    onChange={(e) => {
                      setOptions((prevOptions) => {
                        return {
                          ...prevOptions,
                          [index]: e.target.checked ? "Espera" : "",
                        };
                      });
                    }}
                  />
                </td>
                <td>
                  <button onClick={() => sendOneInfo(index)}>Enviar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </C.Container>
  );
};

export default memo(Radu);
