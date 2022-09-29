import React, { useState, useCallback, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../Contexts/Auth/AuthContext";
// import { TableProps } from "../../../Types/TableProps";
import { LayoutScreen } from "../../Page/Content/styles";
import { Title } from "../../Page/Title";

import * as C from "./styles";
import { SendResponseContext } from "./../../../Contexts/SendResponse/index";

const ModalTablesToBillsToPay: React.FC = () => {
  const history = useNavigate(); // Função nativa do react-router-dom para fazer o goBack
  // const { id } = useParams(); // Pegar o parametro da URL na posição ID

  /**
   *  getAllTable - função da API para obter informações dos títulos
   *  user - para pegar o parametro na posição ID do usuário para atribuir a URL
   */
  const { getAllTable, user } = useContext(AuthContext);
  //

  // State da aplicação passando como parametro a props
  // TableProps para pegar a tipagem do items da tabela
  // const [titles] = useState<TableProps[]>([]);
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

  const [option, setOption] = useState("");

  const [choiceApproved, setChoiceApproved] = useState(false);
  const [choiceReproved, setChoiceReproved] = useState(false);
  const [choiceWait, setChoiceWait] = useState(false);

  const { mock } = useContext(SendResponseContext);
  const { id } = useParams();

  /**
   * getInfo - função que vai percorrer todo o obj, filtrando cada item pelo numero do titulo
   * e retornará cada item desse obj em cada setState setado a baixo
   *
   * no Array de dependências esta o id e o titles -> que serão observados pelo state
   *
   * useCallback -> é uma função que retorna outra função
   */
  const getInfo = useCallback(async () => {
    // const data = await getAllTable(`${user?.ID}`);

    let info = mock.filter((i) => i.id === id);
    setFilial(info[0].AFILWKF);
    setFornecedor(info[0].AFORWKF);
    setNatureza(info[0].ANATWKF);
    setParcela(info[0].APARWKF);
    setPrefixo(info[0].APREWKF);
    setTipo(info[0].ATIPWKF);
    setNumTitulo(info[0].ATITWKF);
    setLoja(info[0].ALOJWKF);
  }, [getAllTable, user?.ID]);
  //

  /**
   * useEffect -> sempre que o componente for montado ele vai executar a função getInfo para obter
   * todas os states setados
   */
  useEffect(() => {
    getInfo();
  }, [getInfo]);
  //

  const sendResponse = () => {
    console.log({
      filial,
      fornecedor,
      loja,
      natureza,
      parcela,
      prefixo,
      tipo,
      numTitulo,
      option,
    });

    history(-1);
  };

  function getApproved() {
    setChoiceApproved(true);
    setChoiceReproved(false);
    setChoiceWait(false);
  }
  function getReprover() {
    setChoiceReproved(true);
    setChoiceApproved(false);
    setChoiceWait(false);
  }
  function getWait() {
    setChoiceWait(true);
    setChoiceReproved(false);
    setChoiceApproved(false);
  }

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
            <C.Span onClick={getApproved}>
              {choiceApproved && <C.CheckIcon />}
              <input
                type="radio"
                name="rd"
                value="Aprovado"
                onChange={(e) => setOption(e.target.value)}
              />
            </C.Span>
            Aprovar
          </C.AreaTabs>
          <C.AreaTabs>
            <C.Span onClick={getReprover}>
              {choiceReproved && <C.CheckIcon />}

              <input
                type="radio"
                name="rd"
                value="Reprovado"
                onChange={(e) => setOption(e.target.value)}
              />
            </C.Span>
            Reprovar
          </C.AreaTabs>
          <C.AreaTabs>
            <C.Span onClick={getWait}>
              {choiceWait && <C.CheckIcon />}
              <input
                type="radio"
                name="rd"
                value="Espera"
                onChange={(e) => setOption(e.target.value)}
              />
            </C.Span>
            Esperar
          </C.AreaTabs>
        </C.ContentAreaTabs>
        <C.Button onClick={sendResponse}>Enviar</C.Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <C.Button onClick={() => history(-1)}>Voltar</C.Button>
      </C.ContentAreaItem>
    </LayoutScreen>
  );
};

export default ModalTablesToBillsToPay;
