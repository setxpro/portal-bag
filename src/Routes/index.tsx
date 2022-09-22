import React from "react";
import { Route, Routes } from "react-router-dom";
import ModalTablesToBillsToPay from "../Components/Modal/ModalTablesToBillsToPay";
import Template from "../Components/Template";
import BillsToPay from "../Screens/BillsToPay";
import Table from "../Screens/RegisterTarget";
import Radu from "../Screens/Tables/Radu";
import Shehrazade from "../Screens/Tables/Shehrazade";
import SecurityRoutes from "../Security";

const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/sherhazade"
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
        path="/"
        element={
          <SecurityRoutes>
            <Template>
              <Table />
            </Template>
          </SecurityRoutes>
        }
      />
    </Routes>
  );
};

export default RoutesApp;
