import { View, Text } from 'react-native';
import React from 'react';
import RootNavigator from './src/navigations/root-navigations';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <RootNavigator />
    </SafeAreaProvider>
  );
};

export default App;
