import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './template/navigator';
import CustomStatusBar from './template/customStatusBar';
import store from './store';
import { blue } from './template/colors';

export default class App extends React.Component {
  render() {
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

