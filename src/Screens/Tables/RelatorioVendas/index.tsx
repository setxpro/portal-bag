import React, { memo, useContext, useState } from "react";
import Content from "../../../Components/Page/Content";
import { LayoutScreen } from "../../../Components/Page/Content/styles";
import { Title } from "../../../Components/Page/Title";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import SearchIcon from "@mui/icons-material/Search";

import * as C from "./styles";
import { Button } from "@material-ui/core";
import { GetInfoSellbieContext } from "../../../Contexts/GetInfoSellbie";
import { RelatorioCC } from "../../../Types/RelatorioDeVendas";
import axios from "axios";
import * as XLSX from "xlsx";
import CircularStatic from "../../../Components/utils/SpinnTable";
import SpinnerTableEmpty from "../../../Components/utils/SpinnerTableEmpty";

const RelatorioVendas: React.FC = () => {
  const [initialDate, setInitialDate] = useState<Date | null>(new Date());
  const [lastDate, setLastDate] = useState<Date | null>(new Date());

  const [infoTable, setInfoTable] = useState<RelatorioCC[]>([]);
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const { accessToken } = useContext(GetInfoSellbieContext);

  const handleDate = async () => {
    let dataInicial = format(new Date(`${initialDate}`), "yyyy-MM-dd", {
      locale: ptBR,
    });

    let dataFinal = format(new Date(`${lastDate}`), "yyyy-MM-dd", {
      locale: ptBR,
    });

    try {
      setLoading(true);
      setMessage("");
      const { data } = await axios.get(
        `https://bi.sellbie.com.br/api/bi/comprasconversao?idEmpresa=67&dataInicio=${dataInicial}&dataFim=${dataFinal}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      setLoading(false);
      setInfoTable(data.resultado);
      return data;
    } catch (error: any) {
      if (message === "Verifique os dados informados.") {
        setMessage(error.response.data.mensagem);
        setLoading(false);
      }

      return;
    }
  };

  const handleExport = () => {
    const table = document.getElementById("Table2XLSX");
    const wb = XLSX.utils.table_to_book(table);
    XLSX.writeFile(wb, "Relatorios_de_Compras_e_Conversão.xlsx");
  };

  return (
    <LayoutScreen>
      <C.Container>
        <C.ContentTitle>
          <Title title="Relatório de Vendas" />
          <C.ContentDate>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label="Data Inicial"
                inputFormat="DD/MM/YYYY"
                value={initialDate}
                onChange={(date: Date | null) => setInitialDate(date)}
                renderInput={(params) => <TextField {...params} />}
              />

              <DesktopDatePicker
                label="Data Final"
                inputFormat="DD/MM/YYYY"
                value={lastDate}
                onChange={(date: Date | null) => setLastDate(date)}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </C.ContentDate>
          <C.ContentBtns>
            {loading ? (
              <CircularStatic />
            ) : (
              <Button
                variant="contained"
                color="primary"
                endIcon={<SearchIcon />}
                onClick={() => handleDate()}
              >
                Buscar
              </Button>
            )}

            <button className="btn-excel" onClick={handleExport}>
              <C.ExcelIcon />
            </button>
          </C.ContentBtns>
        </C.ContentTitle>
        <Content>
          <C.ContentTable>
            {loading ? (
              <div className="message">
                <SpinnerTableEmpty />
              </div>
            ) : (
              <table id="Table2XLSX">
                <thead>
                  {infoTable.length <= 0 ? null : (
                    <tr>
                      <th>Loja_Compra</th>
                      <th>Vendedor_Compra</th>
                      <th>Data_Compra</th>
                      <th>Nome_Cliente</th>
                      <th>CPF_Cliente</th>
                      <th>Telefone_Contato</th>
                      <th>Vendedor_Contato</th>
                      <th>Vendedor_Contato_Matricula</th>
                      <th>Loja_Vendedor_Contato</th>
                      <th>Data_Contato</th>
                      <th>ComprasTotais</th>
                    </tr>
                  )}
                </thead>
                <tbody>
                  {infoTable.map((relatory, indice) => {
                    return (
                      <tr key={indice}>
                        <td>{relatory.Loja_Compra}</td>
                        <td>{relatory.Vendedor_Compra}</td>
                        <td>{relatory.Data_Compra}</td>
                        <td>{relatory.Nome_Cliente}</td>
                        <td>{relatory.CPF_Cliente}</td>
                        <td>{relatory.Telefone_Contato}</td>
                        <td>{relatory.Vendedor_Contato}</td>
                        <td>{relatory.Vendedor_Contato_Matricula}</td>
                        <td>{relatory.Loja_Vendedor_Contato}</td>
                        <td>
                          {/* {relatory.Data_Contato === null ? null : ( */}
                          {relatory.Data_Contato}
                        </td>
                        <td>{relatory.ComprasTotais}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </C.ContentTable>
        </Content>
      </C.Container>
    </LayoutScreen>
  );
};

export default memo(RelatorioVendas);
