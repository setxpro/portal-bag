import React, { useContext, useEffect, useState } from "react";

import { createContext } from "react";
import { ChildrenReactNode } from "../../Types/ChildrenProps";
import { TableProps } from "../../Types/TableProps";
import { AuthContext } from "../Auth/AuthContext";

interface Props {
  setOptions: React.Dispatch<
    React.SetStateAction<{
      [x: number]: string;
    }>
  >;
  options: {
    [x: number]: string;
  };
  sendAllResp: () => void;
  mock: {
    id: string;
    AFILWKF: string;
    AFORWKF: string;
    ALOJWKF: string;
    ANATWKF: string;
    APARWKF: string;
    APREWKF: string;
    ATIPWKF: string;
    ATITWKF: string;
  }[];
  sendOneInfo: (index: number) => void;
}

export const SendResponseContext = createContext({} as Props);

export const SendResponseProvider = ({ children }: ChildrenReactNode) => {
  const [options, setOptions] = useState<{ [x: number]: string }>({});

  const { user, getAllTable } = useContext(AuthContext);
  const [titles, setTitulo] = useState<TableProps[]>([]);

  const [mock, setMock] = useState([
    {
      id: "1",
      AFILWKF: "AFILWKF 1",
      AFORWKF: "AFORWKF 1",
      ALOJWKF: "ALOJWKF 1",
      ANATWKF: "ANATWKF 1",
      APARWKF: "APARWKF 1",
      APREWKF: "APREWKF 1",
      ATIPWKF: "ATIPWKF 1",
      ATITWKF: "ATITWKF 1",
    },
    {
      id: "2",
      AFILWKF: "AFILWKF 2",
      AFORWKF: "AFORWKF 2",
      ALOJWKF: "ALOJWKF 2",
      ANATWKF: "ANATWKF 2",
      APARWKF: "APARWKF 2",
      APREWKF: "APREWKF 2",
      ATIPWKF: "ATIPWKF 2",
      ATITWKF: "ATITWKF 2",
    },
    {
      id: "3",
      AFILWKF: "AFILWKF 3",
      AFORWKF: "AFORWKF 3",
      ALOJWKF: "ALOJWKF 3",
      ANATWKF: "ANATWKF 3",
      APARWKF: "APARWKF 3",
      APREWKF: "APREWKF 3",
      ATIPWKF: "ATIPWKF 3",
      ATITWKF: "ATITWKF 3",
    },
  ]);

  useEffect(() => {
    (async () => {
      const data = await getAllTable(`000893`);
      setTitulo(data);
    })();
  }, [getAllTable, user?.ID]);

  const sendAllResp = () => {
    const allOpt = mock.map((item, index) => {
      return {
        ...item,
        option: options[index] || "",
      };
    });

    console.log(allOpt.filter((x) => x.option));
  };

  const sendOneInfo = (index: number) => {
    if (!options[index]) return;

    if (!options[index]) {
      alert("Você esqueceu de selecionar uma opção.");
      return;
    }

    const newObject = {
      ...mock[index],
      option: options[index],
    };

    console.log(newObject);
  };

  return (
    <SendResponseContext.Provider
      value={{ options, setOptions, sendAllResp, mock, sendOneInfo }}
    >
      {children}
    </SendResponseContext.Provider>
  );
};
