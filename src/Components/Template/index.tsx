import { ReactNode } from "react";
import { HeaderProvider } from "../../Contexts/Header/HeaderContext";
import { PalletProvider } from "../../Contexts/Pallet/Pallet";
import { SendResponseProvider } from "../../Contexts/SendResponse";
import Header from "../Header";
import { Layout } from "../Layout";
import Sidebar from "../Sidebar";

import * as C from "./styles";

const Template = ({ children }: { children: ReactNode }) => {
  return (
    <Layout>
      <HeaderProvider>
        <SendResponseProvider>
          <PalletProvider>
            <Sidebar />
          </PalletProvider>
          <C.Content>
            <Header />
            {children}
          </C.Content>
        </SendResponseProvider>
      </HeaderProvider>
    </Layout>
  );
};

export default Template;
