import React, { useEffect, useState, useCallback } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persister } from 'store/configureStore';
import Themes, { SUPPORTED_THEMES } from 'themes/index';

import { SafeAreaView, ScrollView, View, Text, PermissionsAndroid } from 'react-native';
import ErrorBoundary from './containers/ErrorBoundary';

const PERMISSIONS = [];

const EntryPoint = () => {
  const [stateRef, setStateRef] = useState({
    grantedPermissions: {},
  });

  // componentDidMount
  useEffect(() => {
    checkPermissions(PERMISSIONS);
  }, [checkPermissions]);

  // componentDidUpdate
  useEffect(() => {
    const { grantedPermissions } = stateRef;

    const deniedPermissions = PERMISSIONS.filter(
      (permission) => grantedPermissions[permission] !== PermissionsAndroid.RESULTS.GRANTED
    );

    if (deniedPermissions.length > 0) {
      checkPermissions(deniedPermissions);
    }
  }, [checkPermissions, stateRef]);

  const checkPermissions = useCallback(
    async (permissions) => {
      try {
        const grantedPermissions = await PermissionsAndroid.requestMultiple(permissions);
        setStateRef({ ...stateRef, grantedPermissions });
      } catch (error) {
        setStateRef({ ...stateRef, grantedPermissions: error });
      }
    },
    [stateRef]
  );

  return (
    <Provider store={store}>
      <PersistGate persistor={persister}>
        <ThemeProvider theme={Themes.getTheme(SUPPORTED_THEMES.LIGHT)}>
          <ErrorBoundary>
            <SafeAreaView>
              <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View>
                  <Text>Hello World</Text>
                </View>
              </ScrollView>
            </SafeAreaView>
          </ErrorBoundary>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default EntryPoint;
