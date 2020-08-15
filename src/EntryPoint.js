import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'services/state/configureStore';
import themes, { SUPPORTED_THEMES } from 'themes';
import ErrorBoundary from '@containers/ErrorBoundary';
import Home from '@containers/Home';

export default function EntryPoint() {
  useEffect(() => {
    console.log(themes.getTheme(SUPPORTED_THEMES.LIGHT));
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={themes.getTheme(SUPPORTED_THEMES.LIGHT)}>
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
