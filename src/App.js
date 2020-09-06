import React from 'react';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';

import Home from '@pages/Home';
import GlobalStyle from '@components/GlobalStyle'
import AppContainer from '@components/AppContainer';

import store from '@store';
import theme from './theme';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ModalProvider>
        <AppContainer>
          <Home />
        </AppContainer>
      </ModalProvider>
    </ThemeProvider>
  </Provider>
);

export default App;
