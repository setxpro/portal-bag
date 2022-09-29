import React from "react";

import * as C from "./styles";

const Shehrazade: React.FC = () => {
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>fornecedor Shehrazade</td>
            <td>natureza Shehrazade</td>
            <td>parcela Shehrazade</td>
            <td>
              <C.InfoIcon />
            </td>
            <td>
              <input type="radio" name="radio-" />
            </td>
            <td>
              <input type="radio" name="radio-" />
            </td>
            <td>
              <input type="radio" name="radio-" />
            </td>
            <td>
              <button>Enviar</button>
            </td>
          </tr>
          <tr>
            <td>fornecedor Shehrazade</td>
            <td>natureza Shehrazade</td>
            <td>parcela Shehrazade</td>
            <td>
              <C.InfoIcon />
            </td>
            <td>
              <input type="radio" name="radio-" />
            </td>
            <td>
              <input type="radio" name="radio-" />
            </td>
            <td>
              <input type="radio" name="radio-" />
            </td>
            <td>
              <button>Enviar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </C.Container>
  );
};

export default Shehrazade;
