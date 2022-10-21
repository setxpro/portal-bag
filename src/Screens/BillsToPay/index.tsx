import React, { ReactNode, useContext } from "react";
import Content from "../../Components/Page/Content";
import { LayoutScreen } from "../../Components/Page/Content/styles";
import { Title } from "../../Components/Page/Title";
import { SendResponseContext } from "../../Contexts/SendResponse";

import * as C from "./styles";
import { HeaderDropdownCompanies } from "../../Components/HeaderDropdownTabs";
import { MenuHeaderContext } from "../../Contexts/MenuHeader";

const BillsToPay = ({ children }: { children: ReactNode }) => {
  const { sendAllResp, titles } = useContext(SendResponseContext);
  const { wrapperMenuCompany } = useContext(MenuHeaderContext);
  return (
    <LayoutScreen>
      <C.Container>
        <C.ContentTopArea>
          <Title title="Aprovação de despesas" />
          <C.ContentAreabtns>
            <C.BtnTabs>
              <C.ContentAreaDropdownCompany>
                <span onClick={wrapperMenuCompany}>
                  Empresas | Centro de Custo
                </span>
                <HeaderDropdownCompanies />
              </C.ContentAreaDropdownCompany>
            </C.BtnTabs>
          </C.ContentAreabtns>
        </C.ContentTopArea>
        <Content>
          {titles.length <= 0 ? (
            ""
          ) : (
            <React.Fragment>
              <React.Fragment>{children}</React.Fragment>

              <C.ContentBtnSendAll>
                <button onClick={sendAllResp}>Enviar todos</button>
              </C.ContentBtnSendAll>
            </React.Fragment>
          )}
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
