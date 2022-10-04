import React, { useContext, useEffect, useState } from "react";

import { createContext } from "react";
import { toast } from "react-toastify";
import { ChildrenReactNode } from "../../Types/ChildrenProps";
import { TableProps } from "../../Types/TableProps";
import { AuthContext } from "../Auth/AuthContext";

// import Logo from "./bag.png";

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
  titles: TableProps[];
  sendOneInfo: (index: number) => void;
}

export const SendResponseContext = createContext({} as Props);

export const SendResponseProvider = ({ children }: ChildrenReactNode) => {
  const [options, setOptions] = useState<{ [x: number]: string }>({});

  const { user, getAllTable } = useContext(AuthContext);
  const [titles, setTitulo] = useState<TableProps[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getAllTable(`000893`); //000893
      setTitulo(data);
    })();
  }, [getAllTable, user?.ID]);

  const sendAllResp = () => {
    const allOpt = titles.map((item, index) => {
      return {
        ...item,
        option: options[index] || "",
      };
    });

    console.log(allOpt.filter((x) => x.option));
    toast("Respostas enviadas com sucesso!");
  };

  const sendOneInfo = (index: number) => {
    if (!options[index]) return;

    if (!options[index]) {
      alert("Você esqueceu de selecionar uma opção.");
      return;
    }

    const newObject = {
      ...titles[index],
      option: options[index],
    };

    console.log(newObject);

    toast(`Resposta enviada com sucesso!`);
  };

  // useEffect(() => {
  //   function requestPermission() {
  //     return new Promise((resolve, reject) => {
  //       const permissionResult = Notification.requestPermission((result) => {
  //         resolve(result);
  //       });

  //       if (permissionResult) {
  //         permissionResult.then(resolve, reject);
  //       }
  //     }).then((permissionResult) => {
  //       if (permissionResult !== "granted") {
  //         throw new Error("Permissipn not grantes");
  //       }
  //     });
  //   }

  //   Notification.requestPermission();
  //   function notify() {
  //     Notification.requestPermission(() => {
  //       let notification = new Notification("BagWeb", {
  //         icon: `${Logo}`,
  //         body: "Chegou uma nova aprovação de despesas. Click aqui para fazer login.",
  //       });
  //       notification.onclick = () => {
  //         window.open("http://localhost:3000");
  //       };
  //     });
  //   }

  //   // notify();
  // }, [titles, titlesCompare]);

  return (
    <SendResponseContext.Provider
      value={{ options, setOptions, sendAllResp, titles, sendOneInfo }}
    >
      {children}
    </SendResponseContext.Provider>
  );
};
