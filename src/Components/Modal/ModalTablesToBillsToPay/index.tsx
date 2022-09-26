import React, { useState, useCallback, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Auth/AuthContext";
import { TableProps } from "../../../Types/TableProps";
import { LayoutScreen } from "../../Page/Content/styles";
import { Title } from "../../Page/Title";

import * as C from "./styles";

const ModalTablesToBillsToPay: React.FC = () => {
  const history = useNavigate(); // Função nativa do react-router-dom para fazer o goBack
  const { id } = useParams(); // Pegar o parametro da URL na posição ID

  /**
   *  getAllTable - função da API para obter informações dos títulos
   *  user - para pegar o parametro na posição ID do usuário para atribuir a URL
   */
  const { getAllTable, user } = useContext(AuthContext);
  //

  // State da aplicação passando como parametro a props
  // TableProps para pegar a tipagem do items da tabela
  const [titles, setTitulo] = useState<TableProps[]>([]);
  //

  // Estados de cada item da tabela para que seja exibido no modal quando for chamado
  const [filial, setFilial] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [natureza, setNatureza] = useState("");
  const [parcela, setParcela] = useState("");
  const [prefixo, setPrefixo] = useState("");
  const [tipo, setTipo] = useState("");
  const [numTitulo, setNumTitulo] = useState("");
  const [loja, setLoja] = useState("");
  //

  /**
   * getInfo - função que vai percorrer todo o obj, filtrando cada item pelo numero do titulo
   * e retornará cada item desse obj em cada setState setado a baixo
   *
   * no Array de dependências esta o id e o titles -> que serão observados pelo state
   *
   * useCallback -> é uma função que retorna outra função
   */
  const getInfo = useCallback(async () => {
    const data = await getAllTable(`${user?.ID}`);
    setFilial(data[0].AFILWKF);
    setFornecedor(data[0].AFORWKF);
    setNatureza(data[0].ANATWKF);
    setParcela(data[0].APARWKF);
    setPrefixo(data[0].APREWKF);
    setTipo(data[0].ATIPWKF);
    setNumTitulo(data[0].ATITWKF);
    setLoja(data[0].ALOJWKF);
  }, [id, titles]);
  //

  /**
   * useEffect -> sempre que o componente for montado ele vai executar a função getInfo para obter
   * todas os states setados
   */
  useEffect(() => {
    getInfo();
  }, [getInfo]);
  //

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
