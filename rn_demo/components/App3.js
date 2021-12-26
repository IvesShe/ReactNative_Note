import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';

const {width, height, scale} = Dimensions.get('window');
export default class App3 extends Component {
  render() {
    return (
      <View>
        <Text>屏幕的寬度是：{width}</Text>
        <Text>屏幕的亮度是：{height}</Text>
        <Text>屏幕的像素比是：{scale}</Text>
      </View>
    );
  }
}
