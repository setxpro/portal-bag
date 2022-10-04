import { ReactNode, useContext } from "react";
import Content from "../../Components/Page/Content";
import { LayoutScreen } from "../../Components/Page/Content/styles";
import { Title } from "../../Components/Page/Title";
import { SendResponseContext } from "../../Contexts/SendResponse";

import * as C from "./styles";
import {
  HeaderDropdownCompanies,
  HeaderDropdownOptions,
} from "../../Components/HeaderDropdownTabs";
import { MenuHeaderContext } from "../../Contexts/MenuHeader";

const BillsToPay = ({ children }: { children: ReactNode }) => {
  const { sendAllResp } = useContext(SendResponseContext);
  const { wrapperMenuCompany, wrapperMenuOptions } =
    useContext(MenuHeaderContext);
  return (
    <LayoutScreen>
      <C.Container>
        <C.ContentTopArea>
          <Title title="Contas a Pagar" />
          <C.ContentAreabtns>
            <C.BtnTabs>
              <C.ContentAreaDropdownCompany onClick={wrapperMenuCompany}>
                <span>Empresas</span>
                <HeaderDropdownCompanies />
              </C.ContentAreaDropdownCompany>
              <C.ContentAreaDropdownOptions onClick={wrapperMenuOptions}>
                <span>Centro de Custo</span>
                <HeaderDropdownOptions />
              </C.ContentAreaDropdownOptions>
            </C.BtnTabs>
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
