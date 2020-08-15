import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CameraView from 'containers/Camera';
import Home from './Home';

const MainStack = createStackNavigator();

const MainStackNav = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Camera" component={CameraView} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNav;
