import * as React from 'react';
import { NativeBaseProvider } from "native-base";
import { BottomBar } from './src/components/BottomBar';

const App = () => {
  return (
      <NativeBaseProvider isSSR={false}>
        <BottomBar />
      </NativeBaseProvider>
  );
};

export default App;

