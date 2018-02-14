import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './template/navigator';
import CustomStatusBar from './template/customStatusBar';
import store from './store';
import { blue } from './template/colors';
import './config/reactotronConfig';
import './config/devToolsConfig';

export default class App extends React.Component {
  render() {
    console.tron.log('Iniciando APP...');
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <CustomStatusBar backgroundColor={blue} barStyle='light-content' />
          <Navigator />
        </View>
      </Provider>
    );
  }
}

