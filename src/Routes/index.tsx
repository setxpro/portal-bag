import React from "react";
import { Route, Routes } from "react-router-dom";
import ModalTablesToBillsToPay from "../Components/Modal/ModalTablesToBillsToPay";
import Template from "../Components/Template";
import { MenuHeaderProvider } from "../Contexts/MenuHeader";
import BillsToPay from "../Screens/BillsToPay";
import FirstLogin from "../Screens/Login/FirstLogin";
import ForgetPassword from "../Screens/Login/ForgetPassword";
import PageProps from "../Screens/Login/PageProps";
import SignInSide from "../Screens/Login/Signin";
import SignUp from "../Screens/Login/SignUp";
import EtiquetasDeConserto from "../Screens/EtiquetasDeConserto";
import Radu from "../Screens/Tables/Radu";
import OriginalCompany from "../Screens/Tables/ORIGINAL";
import Shehrazade from "../Screens/Tables/Shehrazade";
import Test from "../Screens/Tables/Test";
import SecurityRoutes from "../Security";
import Option1 from "./../Screens/Tables/SubPages/Option1/index";
import Option2 from "./../Screens/Tables/SubPages/Option2/index";
import RelatorioVendas from "./../Screens/Tables/RelatorioVendas/index";
import { GetInfoSellbieProvider } from "../Contexts/GetInfoSellbie";
import VendasFlex from "../Screens/Tables/VendasFlex";
import Home from "../Screens/Home";
import Settings from "../Screens/settings";

const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SecurityRoutes>
            <Template>
              <MenuHeaderProvider>
                <Home />
              </MenuHeaderProvider>
            </Template>
          </SecurityRoutes>
        }
      />
      <Route
        path="/shehrazade"
        element={
          <SecurityRoutes>
            <Template>
              <MenuHeaderProvider>
                <BillsToPay>
                  <Shehrazade />
                </BillsToPay>
              </MenuHeaderProvider>
            </Template>
          </SecurityRoutes>
        }
      />
      <Route
        path="/radu"
        element={
          <SecurityRoutes>
            <Template>
              <MenuHeaderProvider>
                <BillsToPay>
                  <Radu />
                </BillsToPay>
              </MenuHeaderProvider>
            </Template>
          </SecurityRoutes>
        }
      />
      <Route
        path="/original"
        element={
          <SecurityRoutes>
            <Template>
              <MenuHeaderProvider>
                <BillsToPay>
                  <OriginalCompany />
                </BillsToPay>
              </MenuHeaderProvider>
            </Template>
          </SecurityRoutes>
        }
      />
      <Route
        path="/test"
        element={
          <SecurityRoutes>
            <Template>
              <MenuHeaderProvider>
                <BillsToPay>
                  <Test />
                </BillsToPay>
              </MenuHeaderProvider>
            </Template>
          </SecurityRoutes>
        }
      />
      {/**
       * Sub Pastas
       * 1 - Option 1
       * 2 - Option 2
       *
       */}
      <Route
        path="/opt1"
        element={
          <SecurityRoutes>
            <Template>
              <MenuHeaderProvider>
                <BillsToPay>
                  <Option1 />
                </BillsToPay>
              </MenuHeaderProvider>
            </Template>
          </SecurityRoutes>
        }
      />
      <Route
        path="/opt2"
        element={
          <SecurityRoutes>
            <Template>
              <MenuHeaderProvider>
                <BillsToPay>
                  <Option2 />
                </BillsToPay>
              </MenuHeaderProvider>
            </Template>
          </SecurityRoutes>
        }
      />

      {/**
       * Sub Pastas fim
       */}
      <Route
        path="/modal/:id"
        element={
          <SecurityRoutes>
            <Template>
              <ModalTablesToBillsToPay />
            </Template>
          </SecurityRoutes>
        }
      />

      {/** Tabelas normais */}
      <Route
        path="/etiquetasDeConserto"
        element={
          <SecurityRoutes>
            <Template>
              <EtiquetasDeConserto />
            </Template>
          </SecurityRoutes>
        }
      />
      <Route
        path="/settings"
        element={
          <SecurityRoutes>
            <Template>
              <Settings />
            </Template>
          </SecurityRoutes>
        }
      />
      <Route
        path="/relatorio-vendas"
        element={
          <SecurityRoutes>
            <Template>
              <GetInfoSellbieProvider>
                <RelatorioVendas />
              </GetInfoSellbieProvider>
            </Template>
          </SecurityRoutes>
        }
      />
      <Route
        path="/vendas-flex"
        element={
          <SecurityRoutes>
            <Template>
              <GetInfoSellbieProvider>
                <VendasFlex />
              </GetInfoSellbieProvider>
            </Template>
          </SecurityRoutes>
        }
      />

      {/**
       * Rotas para Login
       */}
      <Route path="/login" element={<SignInSide />} />
      <Route
        path="/firstlogin"
        element={
          <PageProps>
            <FirstLogin />
          </PageProps>
        }
      />
      <Route
        path="/forgot-pass"
        element={
          <PageProps>
            <ForgetPassword />
          </PageProps>
        }
      />
      <Route
        path="/update-pass"
        element={
          <PageProps>
            <SignUp />
          </PageProps>
        }
      />
      {/**
       * Rotas para Login
       */}
    </Routes>
  );
};

export default RoutesApp;
