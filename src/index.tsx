import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./Contexts/Auth/AuthContext";
import { GetThemeProvider } from "./Contexts/Theme/GetThemeContext";

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
