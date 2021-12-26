import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

const {width, height, scale} = Dimensions.get('window');
export default class App4 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>111屏幕的寬度是：{width}</Text>
        <Text>屏幕的亮度是：{height}</Text>
        <Text>屏幕的像素比是：{scale}</Text>
        <View style={styles.line} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: 'pink',
  },
  line: {
    height: 1 / scale,
    backgroundColor: '#000',
  },
});
