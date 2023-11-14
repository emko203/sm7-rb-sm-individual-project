import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TouchScreen from './src/screens/TouchScreen';

const App = () => {
  const AppStack = createStackNavigator();

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name="Touch" component={TouchScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
