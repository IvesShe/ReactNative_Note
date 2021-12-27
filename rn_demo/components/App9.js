import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class App9 extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://m.momoshop.com.tw/main.momo'}}
        // source={{uri: 'https://github.com/IvesShe/CocosCreatorDemo'}}
        // source={{uri: 'https://cn.vuejs.org'}}
        // source={{uri: 'http://hv-uat-h5.sc.gcp/home'}}
        // source={{uri: 'http://10.1.10.106:5501/'}}
        // source={{uri: 'http://10.1.10.106:8036/'}}
        // http://hv-uat-h5.sc.gcp/home
        //http://10.1.10.106:8036/
        //       http://192.168.133.2:8036/
        // > Network:  http://192.168.128.2:8036/
        // > Network:  http://192.168.204.2:8036/
        startInLoadingState={true}
      />
    );
  }
}
