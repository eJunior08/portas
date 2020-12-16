import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import client from './services/api';

/* Routes */
import Routes from './routes';

/* Store */
import { store } from './redux';

/* Styles */
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Routes />
        <GlobalStyles />
      </Provider>
    </ApolloProvider>
  );
}

export default App;
