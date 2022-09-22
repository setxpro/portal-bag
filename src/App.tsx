import React from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "./Hooks/useTheme";
import RoutesApp from "./Routes";
import SignInSide from "./Screens/Login/Signin";
import GlobalStyle from "./Styles/GlobalStyle";

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RoutesApp />
      {/* <SignInSide /> */}
    </ThemeProvider>
  );
};

export default App;
