import React from "react";
import { Route, Routes } from "react-router-dom";
import ModalTablesToBillsToPay from "../Components/Modal/ModalTablesToBillsToPay";
import Template from "../Components/Template";
import BillsToPay from "../Screens/BillsToPay";
import FirstLogin from "../Screens/Login/FirstLogin";
import ForgetPassword from "../Screens/Login/ForgetPassword";
import PageProps from "../Screens/Login/PageProps";
import SignInSide from "../Screens/Login/Signin";
import SignUp from "../Screens/Login/SignUp";
import Table from "../Screens/RegisterTarget";
import Radu from "../Screens/Tables/Radu";
import Shehrazade from "../Screens/Tables/Shehrazade";
import SecurityRoutes from "../Security";
import Option1 from "./../Screens/Tables/SubPages/Option1/index";
import Option2 from "./../Screens/Tables/SubPages/Option2/index";

const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SecurityRoutes>
            <Template>
              <BillsToPay>
                <Shehrazade />
              </BillsToPay>
            </Template>
          </SecurityRoutes>
        }
      />
      <Route
        path="/radu"
        element={
          <SecurityRoutes>
            <Template>
              <BillsToPay>
                <Radu />
              </BillsToPay>
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
              <BillsToPay>
                <Option1 />
              </BillsToPay>
            </Template>
          </SecurityRoutes>
        }
      />
      <Route
        path="/opt2"
        element={
          <SecurityRoutes>
            <Template>
              <BillsToPay>
                <Option2 />
              </BillsToPay>
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

      <Route
        path="/table"
        element={
          <SecurityRoutes>
            <Template>
              <Table />
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
