import React, { useState, useCallback, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Auth/AuthContext";
import { TableProps } from "../../../Types/TableProps";
import { LayoutScreen } from "../../Page/Content/styles";
import { Title } from "../../Page/Title";

import * as C from "./styles";

const ModalTablesToBillsToPay: React.FC = () => {
  const history = useNavigate();
  const { id } = useParams();

  const { getAllTable, user } = useContext(AuthContext);

  const [titles, setTitulo] = useState<TableProps[]>([]);

  const [filial, setFilial] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [natureza, setNatureza] = useState("");
  const [parcela, setParcela] = useState("");
  const [prefixo, setPrefixo] = useState("");
  const [tipo, setTipo] = useState("");
  const [numTitulo, setNumTitulo] = useState("");
  const [loja, setLoja] = useState("");

  const getInfo = useCallback(() => {
    const indice = titles.filter((i) => i.ATITWKF === id);

    setFilial(indice[0].AFILWKF);
    setFornecedor(indice[0].AFORWKF);
    setNatureza(indice[0].ANATWKF);
    setParcela(indice[0].APARWKF);
    setPrefixo(indice[0].APREWKF);
    setTipo(indice[0].ATIPWKF);
    setNumTitulo(indice[0].ATITWKF);
    setLoja(indice[0].ALOJWKF);
  }, [id, titles]);

  useEffect(() => {
    (async () => {
      const data = await getAllTable(`${user?.ID}`);
      setTitulo(data);
    })();
  }, [getAllTable, user?.ID]);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <LayoutScreen>
      <Title title="Mais Informações" />
      <C.Container>
        <C.ContentAreaItem>Filial : {filial}</C.ContentAreaItem>
        <C.ContentAreaItem>Fornecedor : {fornecedor}</C.ContentAreaItem>
        <C.ContentAreaItem>Loja : {loja}</C.ContentAreaItem>
        <C.ContentAreaItem>Natureza : {natureza}</C.ContentAreaItem>
        <C.ContentAreaItem>Parcela : {parcela} </C.ContentAreaItem>
        <C.ContentAreaItem>Prefixo : {prefixo}</C.ContentAreaItem>
        <C.ContentAreaItem>Tipo : {tipo}</C.ContentAreaItem>
        <C.ContentAreaItem>N° do Título : {numTitulo}</C.ContentAreaItem>
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
