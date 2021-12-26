import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class App9 extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://m.momoshop.com.tw/main.momo'}}
        startInLoadingState={true}
      />
    );
  }
}
