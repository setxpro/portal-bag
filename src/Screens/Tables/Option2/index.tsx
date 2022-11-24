import React, { useContext, memo } from "react";
import { SendResponseContext } from "../../../Contexts/SendResponse";
import { Link } from "react-router-dom";
import { FormControlLabel, Radio } from "@material-ui/core";
import CheckboxUnchecked from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckboxChecked from "@material-ui/icons/CheckBox";

import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

import * as C from "./styles";
import { Title } from "../../../Components/Page/Title";

const Option2: React.FC = () => {
  const { setOptions, titles, sendOneInfo, options } =
    useContext(SendResponseContext);
  return (
    <>
      <C.ContentTopArea>
        <Title title="FINANCEIRO" />
      </C.ContentTopArea>
      <C.Container>
        <table>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Filial</th>
              <th>fornecedor</th>
              <th>natureza</th>
              <th>parcela</th>
              <th>+ Info</th>
              <th>A</th>
              <th>R</th>
              <th>E</th>
              <th>Enviar</th>
            </tr>
          </thead>
          <tbody>
            {titles.map((item, index) => {
              if (item.ALBLWKF === "FINANCEIRO")
                return (
                  <tr key={index}>
                    <td>{item.ADFIWKF}</td>
                    <td>{item.AFILWKF}</td>
                    <td>{item.AFORWKF}</td>
                    <td>{item.ANATWKF}</td>
                    <td>{item.APARWKF}</td>
                    <td>
                      <Link to={`/modal/${item.ANTIWKF}`}>
                        <C.InfoIcon />
                      </Link>
                    </td>
                    <td>
                      <div className="area">
                        <div>
                          <FormControlLabel
                            control={
                              <Radio
                                name={`radio-${item.AFILWKF}`}
                                color="primary"
                                checkedIcon={<CheckboxChecked />}
                                icon={<CheckboxUnchecked />}
                                checked={options[index] === "Aprovado"}
                                onChange={(e) => {
                                  setOptions((prevOptions) => {
                                    return {
                                      ...prevOptions,
                                      [index]: e.target.checked
                                        ? "Aprovado"
                                        : "",
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
                              name={`radio-${item.AFILWKF}`}
                              color="primary"
                              checkedIcon={<CancelIcon />}
                              icon={<CheckboxUnchecked />}
                              checked={options[index] === "Reprovado"}
                              onChange={(e) => {
                                setOptions((prevOptions) => {
                                  return {
                                    ...prevOptions,
                                    [index]: e.target.checked
                                      ? "Reprovado"
                                      : "",
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
                              name={`radio-${item.AFILWKF}`}
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

              return null;
            })}
          </tbody>
        </table>
      </C.Container>
    </>
  );
};

export default memo(Option2);
