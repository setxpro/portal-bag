import React from "react";
import { useNavigate } from "react-router-dom";
import { LayoutScreen } from "../../Page/Content/styles";
import { Title } from "../../Page/Title";

import * as C from "./styles";

const ModalTablesToBillsToPay: React.FC = () => {
  const history = useNavigate();

  return (
    <LayoutScreen>
      <Title title="Mais Informações" />
      <C.Container>
        <C.ContentAreaItem>FILIAL :</C.ContentAreaItem>
        <C.ContentAreaItem>FILIAL :</C.ContentAreaItem>
        <C.ContentAreaItem>FILIAL :</C.ContentAreaItem>
        <C.ContentAreaItem>FILIAL :</C.ContentAreaItem>
        <C.ContentAreaItem>FILIAL :</C.ContentAreaItem>
        <C.ContentAreaItem>FILIAL :</C.ContentAreaItem>
        <C.ContentAreaItem>FILIAL :</C.ContentAreaItem>
        <C.ContentAreaItem>FILIAL :</C.ContentAreaItem>
      </C.Container>
      <C.ContentAreaItem>
        <C.ContentAreaTabs>
          <C.AreaTabs>
            <C.Span>
              <input type="radio" name="" />
            </C.Span>
            Aprovar
          </C.AreaTabs>
          <C.AreaTabs>
            <C.Span>
              <input type="radio" name="" />
            </C.Span>
            Reprovar
          </C.AreaTabs>
          <C.AreaTabs>
            <C.Span>
              <input type="radio" name="" />
            </C.Span>
            Esperar
          </C.AreaTabs>
        </C.ContentAreaTabs>
        <C.Button>Enviar</C.Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <C.Button onClick={() => history(-1)}>Voltar</C.Button>
      </C.ContentAreaItem>
    </LayoutScreen>
  );
};

export default ModalTablesToBillsToPay;
