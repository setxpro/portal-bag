import { ReactNode, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../Components/Page/Content";
import { LayoutScreen } from "../../Components/Page/Content/styles";
import { Title } from "../../Components/Page/Title";
import { SendResponseContext } from "../../Contexts/SendResponse";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import * as C from "./styles";
import { Link } from "react-router-dom";

const BillsToPay = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const { sendAllResp } = useContext(SendResponseContext);

  const [shehrazade, setSherazade] = useState(true);
  const [radu, setRadu] = useState(false);
  const [opt1, setOpt1] = useState(true);
  const [opt2, setOpt2] = useState(false);

  function getPalletByCompanySher() {
    setSherazade(true);
    setRadu(false);
  }
  function getPalletByCompanyRad() {
    setRadu(true);
    setSherazade(false);
  }
  function getPalletByCompanyOption1() {
    setOpt1(true);
    setOpt2(false);
  }
  function getPalletByCompanyOption2() {
    setOpt2(true);
    setOpt1(false);
  }

  return (
    <LayoutScreen>
      <C.Container>
        <C.ContentTopArea>
          <Title title="Contas a Pagar" />
          <C.ContentAreabtns>
            <C.BtnTabs>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Fornecedor
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Fornecedor"
                >
                  <MenuItem onClick={() => navigate("/")}>Shehrazade</MenuItem>
                  <MenuItem onClick={() => navigate("/radu")}>Radu</MenuItem>
                </Select>
              </FormControl>
            </C.BtnTabs>
            <C.TabsInternal>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Centro de Custo
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Centro de Custo"
                >
                  <MenuItem onClick={() => navigate("/opt1")}>Opção 1</MenuItem>
                  <MenuItem onClick={() => navigate("/opt2")}>Opção 2</MenuItem>
                </Select>
              </FormControl>
            </C.TabsInternal>
          </C.ContentAreabtns>
        </C.ContentTopArea>
        <Content>
          {children}
          <C.ContentBtnSendAll>
            <button onClick={sendAllResp}>Enviar todos</button>
          </C.ContentBtnSendAll>
        </Content>
        <C.ContainerAuthors>
          <p>
            © Copyright{" "}
            <a
              href="https://www.bagaggio.com.br"
              target="_blank"
              rel="noreferrer"
            >
              BAGAGGIO
            </a>{" "}
            2022
          </p>
        </C.ContainerAuthors>
      </C.Container>
    </LayoutScreen>
  );
};

export default BillsToPay;
