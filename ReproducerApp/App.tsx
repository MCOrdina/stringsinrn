import React from 'react';
import {View} from 'react-native';

function App(): React.JSX.Element {
  // TypeScript asserts that this is fine, but it will crash the app at runtime.
  // In the browser it would have been fine, but in React Native it is not.
  // react-native needs a different implementation of this type than react-dom,
  // and it should not be added to a generic @types/react package.
  const myReturnValue: React.ReactNode = 'hello world';
  return <View>{myReturnValue}</View>;
}

export default App;
