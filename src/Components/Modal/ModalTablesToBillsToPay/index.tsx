import React, { useState, useCallback, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
// import { AuthContext } from "../../../Contexts/Auth/AuthContext";
import { LayoutScreen } from "../../Page/Content/styles";
import { Title } from "../../Page/Title";

import * as C from "./styles";
import { SendResponseContext } from "./../../../Contexts/SendResponse/index";

const ModalTablesToBillsToPay: React.FC = () => {
  const history = useNavigate(); // Função nativa do react-router-dom para fazer o goBack
  const { id } = useParams(); // Pegar o parametro da URL na posição ID

  /**
   *  getAllTable - função da API para obter informações dos títulos
   *  user - para pegar o parametro na posição ID do usuário para atribuir a URL
   */
  // const { user } = useContext(AuthContext);
  //

  // State da aplicação passando como parametro a props
  // TableProps para pegar a tipagem do items da tabela
  const { titles, sendOneInfo } = useContext(SendResponseContext);
  //

  // Estados de cada item da tabela para que seja exibido no modal quando for chamado
  const [filial, setFilial] = useState(""); // AFILWKF
  const [fornecedor, setFornecedor] = useState(""); // AFORWKF
  const [natureza, setNatureza] = useState(""); // ANATWKF
  const [parcela, setParcela] = useState(""); // APARWKF
  const [prefixo, setPrefixo] = useState(""); // APREWKF
  const [tipo, setTipo] = useState(""); // ATIPWKF
  const [numTitulo, setNumTitulo] = useState(""); // ATITWKF

  const [cdCeo, setCdCeo] = useState(""); // ACUSWKF
  const [loja, setLoja] = useState(""); // ALOJWKF
  const [descCeo, setDescCeo] = useState(""); // ADCCWKF
  const [descNatu, setDescNatu] = useState(""); // ADNAWKF
  const [historyCeo, setHistoryName] = useState(""); // AHISWKF
  const [companyName, setCompanyName] = useState(""); // ADFIWKF
  const [fornecedorName, setFornecedorName] = useState(""); // ANFOWKF

  //

  const [option, setOption] = useState("");

  const [choiceApproved, setChoiceApproved] = useState(false);
  const [choiceReproved, setChoiceReproved] = useState(false);
  const [choiceWait, setChoiceWait] = useState(false);

  /**
   * getInfo - função que vai percorrer todo o obj, filtrando cada item pelo numero do titulo
   * e retornará cada item desse obj em cada setState setado a baixo
   *
   * no Array de dependências esta o id e o titles -> que serão observados pelo state
   *
   * useCallback -> é uma função que retorna outra função
   */

  //

  const dataTitles = useCallback(() => {
    const data = titles.filter((i) => i.ANTIWKF === id);
    setCompanyName(data[0]?.ADFIWKF);
    setFornecedorName(data[0]?.ANFOWKF);

    setFilial(data[0]?.AFILWKF);
    setFornecedor(data[0]?.AFORWKF);
    setNatureza(data[0]?.ANATWKF);
    setPrefixo(data[0]?.APREWKF);
    setParcela(data[0]?.APARWKF);
    setTipo(data[0]?.ATIPWKF);
    setNumTitulo(data[0]?.ATITWKF);
    setLoja(data[0]?.ALOJWKF);

    setCdCeo(data[0]?.ACUSWKF);
    setDescCeo(data[0]?.ADCCWKF);
    setDescNatu(data[0]?.ADNAWKF);
    setHistoryName(data[0]?.AHISWKF);
  }, [id, titles]);

  useEffect(() => {
    dataTitles();
  }, [dataTitles]);

  const sendResponse = () => {
    if (!option) {
      toast.error("Você deve ao menos selecionar uma resposta.");
      return;
    }

    let conf = window.confirm("Deseja Realmente enviar essa esposta ?");
    if (!conf) {
      toast("Resposta abortada pelo aprovador!");
      return;
    }

    console.log({
      AFILWKF: filial,
      AFORWKF: fornecedor,
      ALOJWKF: loja,
      ANATWKF: natureza,
      APARWKF: parcela,
      APREWKF: prefixo,
      ATIPWKF: tipo,
      ATITWKF: numTitulo,
      ADCCWKF: descCeo,
      ADNAWKF: descNatu,
      AHISWKF: historyCeo,
      ADFIWKF: companyName,
      ANFOWKF: fornecedorName,
      option,
    });
    toast("Resposta enviada com sucesso!");

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
        <div className="area-title">
          <Title title={companyName} />
        </div>

        <C.ContentAreaItem>
          <h4>Filial</h4>
          <span></span>
          <p>{filial}</p>
        </C.ContentAreaItem>

        <C.ContentAreaItem>
          <h4>Nome do Fornecedor</h4>
          <span></span>
          <p>{fornecedorName}</p>
        </C.ContentAreaItem>

        <C.ContentAreaItem>
          <h4>Natureza</h4>
          <span></span>
          <p>{natureza}</p> <div className="bar-h">|</div>{" "}
          <h4>Descrição da Natureza</h4>
          <span></span>
          <p>{descNatu}</p>
        </C.ContentAreaItem>

        <C.ContentAreaItem>
          <h4>Numero do Título</h4>
          <span></span>
          <p>{numTitulo}</p> <div className="bar-h">|</div> <h4>Parcela</h4>
          <span></span>
          <p>{parcela}</p> <div className="bar-h">|</div> <h4>Prefixo</h4>
          <span></span>
          <p>{prefixo}</p> <div className="bar-h">|</div> <h4>Tipo</h4>
          <span></span>
          <p>{tipo}</p>
        </C.ContentAreaItem>

        <C.ContentAreaItem>
          <h4>Código do CEO</h4>
          <span></span>
          <p>{cdCeo}</p>
        </C.ContentAreaItem>

        <C.ContentAreaItem>
          <h4>Descrição do CEO</h4>
          <span></span>
          <p>{descCeo}</p>
        </C.ContentAreaItem>

        <C.ContentAreaItem>
          <h4>Histórico do CEO</h4>
          <span></span>
          <p>{historyCeo}</p>
        </C.ContentAreaItem>
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
