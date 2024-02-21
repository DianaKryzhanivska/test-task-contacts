import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename="/test-task-contacts">
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </ThemeProvider>
);
