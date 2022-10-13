import React, { useContext, memo, useState } from "react";
import { SendResponseContext } from "../../../Contexts/SendResponse";
import { Link } from "react-router-dom";
import { FormControlLabel, Radio } from "@material-ui/core";
import CheckboxUnchecked from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckboxChecked from "@material-ui/icons/CheckBox";

import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

import * as C from "./styles";

const Test: React.FC = () => {
  const { setOptions, sendOneInfo, options } = useContext(SendResponseContext);

  const [data] = useState([
    {
      id: 1,
      filial: "Filial 1",
      fornecedor: "fornecedor 1",
      natureza: "natureza 1",
      parcela: "parcela 1",
    },
    {
      id: 2,
      filial: "Filial 2",
      fornecedor: "fornecedor 2",
      natureza: "natureza 2",
      parcela: "parcela 2",
    },
    {
      id: 3,
      filial: "Filial 3",
      fornecedor: "fornecedor 3",
      natureza: "natureza 3",
      parcela: "parcela 3",
    },
  ]);

  return (
    <C.Container>
      <table>
        <thead>
          <tr>
            <th>Filial</th>
            <th>Fornecedor</th>
            <th>Natureza</th>
            <th>Parcela</th>
            <th>+ Info</th>
            <th>A</th>
            <th>R</th>
            <th>E</th>
            <th>Enviar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.filial}</td>
                <td>{item.fornecedor}</td>
                <td>{item.natureza}</td>
                <td>{item.parcela}</td>
                <td>
                  <Link to={`/modal/${item.id}`}>
                    <C.InfoIcon />
                  </Link>
                </td>
                <td>
                  <div className="area">
                    <div>
                      <FormControlLabel
                        control={
                          <Radio
                            name={`radio-${item.id}`}
                            color="primary"
                            checkedIcon={<CheckboxChecked />}
                            icon={<CheckboxUnchecked />}
                            checked={options[index] === "Aprovado"}
                            onChange={(e) => {
                              setOptions((prevOptions) => {
                                return {
                                  ...prevOptions,
                                  [index]: e.target.checked ? "Aprovado" : "",
                                };
                              });
                            }}
                          />
                        }
                        label=""
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <div className="area">
                    <FormControlLabel
                      control={
                        <Radio
                          name={`radio-${item.id}`}
                          color="primary"
                          checkedIcon={<CancelIcon />}
                          icon={<CheckboxUnchecked />}
                          checked={options[index] === "Reprovado"}
                          onChange={(e) => {
                            setOptions((prevOptions) => {
                              return {
                                ...prevOptions,
                                [index]: e.target.checked ? "Reprovado" : "",
                              };
                            });
                          }}
                        />
                      }
                      label=""
                    />
                  </div>
                </td>
                <td>
                  <div className="area">
                    {" "}
                    <FormControlLabel
                      control={
                        <Radio
                          name={`radio-${item.id}`}
                          color="primary"
                          checkedIcon={<AccessTimeFilledIcon />}
                          icon={<CheckboxUnchecked />}
                          checked={options[index] === "Espera"}
                          onChange={(e) => {
                            setOptions((prevOptions) => {
                              return {
                                ...prevOptions,
                                [index]: e.target.checked ? "Espera" : "",
                              };
                            });
                          }}
                        />
                      }
                      label=""
                    />
                  </div>
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

export default memo(Test);
