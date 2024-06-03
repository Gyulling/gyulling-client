import React from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './Router';
import { GlobalStyle } from './style/globalStyle';
import theme from './style/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
