import React from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./Hooks/useTheme";
import RoutesApp from "./Routes";
import GlobalStyle from "./Styles/GlobalStyle";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer />
      <RoutesApp />
    </ThemeProvider>
  );
};

export default App;
