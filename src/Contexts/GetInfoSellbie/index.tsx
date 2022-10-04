import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

interface Props {
  accessToken: string;
}

export const GetInfoSellbieContext = createContext({} as Props);

export const GetInfoSellbieProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [accessToken, setAccessToken] = useState("");

  let Token = process.env.REACT_APP_TOKEN;

  const getItems = async (Token: string | undefined) => {
    const { data } = await axios.post("https://bi.sellbie.com.br/api/auth", {
      Token,
    });

    setAccessToken(data.resultado.accessToken);
    return data;
  };

  useEffect(() => {
    getItems(Token);
  }, [Token]);

  return (
    <GetInfoSellbieContext.Provider value={{ accessToken }}>
      {children}
    </GetInfoSellbieContext.Provider>
  );
};
