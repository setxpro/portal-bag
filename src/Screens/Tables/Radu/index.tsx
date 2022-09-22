import React from "react";
import { Link } from "react-router-dom";

import * as C from "./styles";

const Radu: React.FC = () => {
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
            <td>fornecedor Radu</td>
            <td>natureza Radu</td>
            <td>parcela Radu</td>
            <td>
              <Link to="/modal/1">
                <C.InfoIcon />
              </Link>
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
              <button>Send</button>
            </td>
          </tr>
          <tr>
            <td>fornecedor Radu</td>
            <td>natureza Radu</td>
            <td>parcela Radu</td>
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

export default Radu;
