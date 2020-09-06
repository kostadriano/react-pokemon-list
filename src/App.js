import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@components/GlobalStyle'
import store from '@store';
import theme from './theme';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  </Provider>
);

export default App;
