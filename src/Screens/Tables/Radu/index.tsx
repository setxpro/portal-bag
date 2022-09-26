import React, { useState, useEffect, useContext, memo } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Auth/AuthContext";
import { TableProps } from "../../../Types/TableProps";

import * as XLSX from "xlsx";

import * as C from "./styles";

const Radu: React.FC = () => {
  const { user, getAllTable } = useContext(AuthContext);
  const [titles, setTitulo] = useState<TableProps[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getAllTable(`${user?.ID}`);
      setTitulo(data);
    })();
  }, []);

  const getIdByIndex = (index: number) => {
    console.log({
      ...titles[0],
      id: index,
    });
  };

  const handleExport = () => {
    var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet([...titles]);

    XLSX.utils.book_append_sheet(wb, ws, "MyDocument");
    XLSX.writeFile(wb, "Document.xlsx");
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
            <th>
              <button onClick={handleExport}>Csv</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {titles.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.AFORWKF}</td>
                <td>{item.ANATWKF}</td>
                <td>{item.APARWKF}</td>
                <td>
                  <Link to={`/modal/${item.ATITWKF}`}>
                    <C.InfoIcon onClick={() => getIdByIndex(index)} />
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
                  <button>Enviar</button>
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
