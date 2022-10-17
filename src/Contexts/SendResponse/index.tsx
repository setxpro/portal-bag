import React, { useContext, useEffect, useState } from "react";

import { createContext } from "react";
import { toast } from "react-toastify";
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
  titles: TableProps[];
  sendOneInfo: (index: number) => void;
  removeOnTheList: (id: string) => void;
}

export const SendResponseContext = createContext({} as Props);

export const SendResponseProvider = ({ children }: ChildrenReactNode) => {
  const [options, setOptions] = useState<{ [x: number]: string }>({});

  const { user, getAllTable } = useContext(AuthContext);
  const [titles, setTitulo] = useState<TableProps[]>([]);

  // const [loadNotify, setLoadNotify] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getAllTable(`000893`); //000893
      setTitulo(data);
    })();
  }, [getAllTable, user?.ID]);

  const removeOnTheList = (id: string) => {
    let remove = titles.filter((i) => i.ANTIWKF !== id);
    setTitulo(remove);
  };

  const sendAllResp = () => {
    if (!options) {
      toast("Você deve ao menos selecionar uma opção!");
      return;
    }
    let conf = window.confirm("Deseja Realmente enviar todas as respostas ?");

    if (!conf) {
      toast("Abortadas pelo aprovador!");
      return;
    }

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
    if (!options[index]) {
      toast("Você deve ao menos selecionar uma opção!");
      return;
    }
    let conf = window.confirm("Deseja Realmente enviar essa resposta ?");

    if (!conf) {
      toast("Abortada pelo aprovador!");
      return;
    }

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

  //   if (titles.length > 0) {
  //     setLoadNotify(true);
  //     if (loadNotify) {
  //       notify();
  //     }
  //     setLoadNotify(false);
  //   }
  // }, [titles]);

  return (
    <SendResponseContext.Provider
      value={{
        options,
        removeOnTheList,
        setOptions,
        sendAllResp,
        titles,
        sendOneInfo,
      }}
    >
      {children}
    </SendResponseContext.Provider>
  );
};
