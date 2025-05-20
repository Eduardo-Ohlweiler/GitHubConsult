import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/global";
import { AppRoutes } from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
