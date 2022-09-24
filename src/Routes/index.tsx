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
