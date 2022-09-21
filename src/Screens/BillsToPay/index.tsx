import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../../Components/Page/Content";
import { LayoutScreen } from "../../Components/Page/Content/styles";
import { Title } from "../../Components/Page/Title";

import * as C from "./styles";

const BillsToPay = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  return (
    <LayoutScreen>
      <C.Container>
        <C.ContentTopArea>
          <Title title="Contas a Pagar" />
          <C.BtnTabs>
            <div>
              <span>55</span>
              <button onClick={() => navigate("/sherhazade")}>
                Shehrazade
              </button>
            </div>
            <div>
              <span>300</span>
              <button onClick={() => navigate("/radu")}>Radu</button>
            </div>
            {/* <div>
              <span>1000</span>
              <button onClick={() => navigate("*")}>Empresa</button>
            </div> */}
          </C.BtnTabs>
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
