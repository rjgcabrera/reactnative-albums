// import { AppRegistry } from 'react-native';
// import App from './App';
// 
// AppRegistry.registerComponent('albums', () => App);

// Import a library to help create a component
import React from 'react';
// import ReactNative from 'react-native';
// import { Text, AppRegistry} from 'react-native';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
// const App = () => {
//   return(
//     <Text>Some Text</Text>
//   );
// };

const App = () => (
  <Header />
);

// Render a component
// ReactNative.AppRegistry.registerComponent('albums', () => App);
AppRegistry.registerComponent('albums', () => App);

