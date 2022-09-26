import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../Components/Page/Content";
import { LayoutScreen } from "../../Components/Page/Content/styles";
import { Title } from "../../Components/Page/Title";

import * as C from "./styles";
import Shehrazade from "./../Tables/Shehrazade/index";

const BillsToPay = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

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
              <div
                className={shehrazade ? "active-tab" : ""}
                onClick={getPalletByCompanySher}
              >
                <span>55</span>
                <button onClick={() => navigate("/")}>Shehrazade</button>
              </div>
              <div
                className={radu ? "active-tab" : ""}
                onClick={getPalletByCompanyRad}
              >
                <span>300</span>
                <button onClick={() => navigate("/radu")}>Radu</button>
              </div>
            </C.BtnTabs>
            <C.TabsInternal>
              <span
                className={opt1 ? "active-sub-tab" : ""}
                onClick={getPalletByCompanyOption1}
              >
                <button>Opção 1</button>
              </span>
              <span
                className={opt2 ? "active-sub-tab" : ""}
                onClick={getPalletByCompanyOption2}
              >
                <button>Opção 2</button>
              </span>
            </C.TabsInternal>
          </C.ContentAreabtns>
        </C.ContentTopArea>
        <Content>
          {children}
          <C.ContentBtnSendAll>
            <button>Enviar todos</button>
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
