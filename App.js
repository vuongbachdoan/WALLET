import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from "native-base";
import { BottomBar } from './src/components/BottomBar';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <BottomBar />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

