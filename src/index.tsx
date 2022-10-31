import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Contexts/Auth/AuthContext";
import { GetThemeProvider } from "./Contexts/Theme/GetThemeContext";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GetThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GetThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
