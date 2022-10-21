import Content from "../../Components/Page/Content";
import { LayoutScreen } from "../../Components/Page/Content/styles";
import { Title } from "../../Components/Page/Title";

import * as C from "./styles";

const EtiquetasDeConserto = () => {
  return (
    <LayoutScreen>
      <Title title="Aprovação Etiquetas de Conserto" />
      <Content> </Content>
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
    </LayoutScreen>
  );
};

export default EtiquetasDeConserto;
