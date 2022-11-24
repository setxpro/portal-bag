import React, { ReactNode, useContext } from "react";
import Content from "../../Components/Page/Content";
import { LayoutScreen } from "../../Components/Page/Content/styles";
// import { Title } from "../../Components/Page/Title";
import { SendResponseContext } from "../../Contexts/SendResponse";

import * as C from "./styles";

function GetMEssage() {
  return (
    <div
      style={{
        height: "calc(100vh - 200px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Não há títulos para determinada rotina.</h1>
    </div>
  );
}

const BillsToPay = ({ children }: { children: ReactNode }) => {
  const { sendAllResp, titles } = useContext(SendResponseContext);

  return (
    <LayoutScreen>
      <C.Container>
        {/* <C.ContentTopArea>
          <Title title="Aprovação de despesas" />
        </C.ContentTopArea> */}
        <Content>
          {titles.length <= 0 ? (
            <GetMEssage />
          ) : (
            <React.Fragment>
              <React.Fragment>{children}</React.Fragment>

              <C.ContentBtnSendAll>
                <button onClick={sendAllResp}>Enviar todos</button>
              </C.ContentBtnSendAll>
            </React.Fragment>
          )}
        </Content>
      </C.Container>
    </LayoutScreen>
  );
};

export default BillsToPay;
