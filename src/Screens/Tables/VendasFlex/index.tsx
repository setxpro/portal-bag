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

import { Button } from "@material-ui/core";
import { GetInfoSellbieContext } from "../../../Contexts/GetInfoSellbie";
import axios from "axios";
import * as XLSX from "xlsx";
import { VendasFlexProps } from "../../../Types/VendasFlexType";

import CircularStatic from "../../../Components/utils/SpinnTable";
import * as C from "./styles";
import SpinnerTableEmpty from "../../../Components/utils/SpinnerTableEmpty";

const VendasFlex: React.FC = () => {
  const [initialDate, setInitialDate] = useState<Date | null>(new Date());
  const [lastDate, setLastDate] = useState<Date | null>(new Date());

  const [infoTable, setInfoTable] = useState<VendasFlexProps[]>([]);
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
        `${process.env.REACT_APP_SELLBIE}/flex?idEmpresa=${process.env.REACT_APP_NUM_BAGAGGIO}&dataInicio=${dataInicial}&dataFim=${dataFinal}`,
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
    XLSX.writeFile(wb, "Vendas_do_Flex.xlsx");
  };
  return (
    <LayoutScreen>
      <C.Container>
        <C.ContentTitle>
          <Title title="Vendas do Flex" />
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
                      <th>CPFCliente</th>
                      <th>DataPagamentoAprovado</th>
                      <th>Desconto</th>
                      <th>Logradouro_Entrega</th>
                      <th>Complemento_Entrega</th>
                      <th>Estado_Entrega</th>
                      <th>Cidade_Entrega</th>
                      <th>Bairro_Entrega</th>
                      <th>Numero_Entrega</th>
                      <th>CEP_Entrega</th>
                      <th>FormaPagamento</th>
                      <th>IdOrcamento</th>
                      <th>Loja</th>
                      <th>NomeBandeira</th>
                      <th>NomeCliente</th>
                      <th>Observacao</th>
                      <th>Parcelas</th>
                      <th>NomeProduto</th>
                      <th>Descricao</th>
                      <th>ValorItem</th>
                      <th>Quantidade</th>
                      <th>ValorTotal</th>
                      <th>authorizationCode</th>
                      <th>nsu</th>
                      <th>tid</th>
                    </tr>
                  )}
                </thead>
                <tbody>
                  {infoTable.map((item, id) => (
                    <React.Fragment key={id}>
                      {item.Produtos.map((i, index) => {
                        if (item.Produtos.length >= 1) {
                          return (
                            <tr key={index}>
                              <td>{item.CPFCliente}</td>
                              <td>{item.DataPagamentoAprovado}</td>
                              <td>{item.Desconto}</td>
                              <td>{item.Endereco.Logradouro_Entrega}</td>
                              <td>{item.Endereco.Complemento_Entrega}</td>
                              <td>{item.Endereco.Estado_Entrega}</td>
                              <td>{item.Endereco.Cidade_Entrega}</td>
                              <td>{item.Endereco.Bairro_Entrega}</td>
                              <td>{item.Endereco.Numero_Entrega}</td>
                              <td>{item.Endereco.CEP_Entrega}</td>
                              <td>{item.FormaPagamento}</td>
                              <td>{item.IdOrcamento}</td>
                              <td>{item.Loja}</td>
                              <td>{item.NomeBandeira}</td>
                              <td>{item.NomeCliente}</td>
                              <td>{item.Observacao}</td>
                              <td>{item.Parcelas}</td>
                              <td>{`${i.NomeProduto}`}</td>
                              <td>{`${i.Descricao}`}</td>
                              <td>{`${i.ValorItem}`}</td>
                              <td>{`${i.Quantidade}`}</td>
                              <td>{item.ValorTotal}</td>
                              <td>{item.authorizationCode}</td>
                              <td>{item.nsu}</td>
                              <td>{item.tid}</td>
                            </tr>
                          );
                        }
                        return null;
                      })}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            )}
          </C.ContentTable>
        </Content>
      </C.Container>
    </LayoutScreen>
  );
};

export default memo(VendasFlex);
