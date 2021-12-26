import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Img from '../res/logo.jpg';
export default class App7 extends Component {
  render() {
    return (
      <View>
        <Text>方式一：</Text>
        <Image source={Img} />
        <Text>方式二 ：</Text>
        <Image source={require('../res/logo.jpg')} />
        <Text>方式三 ：</Text>
        <Image
          source={{uri: 'https://picsum.photos/200/200?9'}}
          style={styles.myImg}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myImg: {
    width: 200,
    height: 200,
  },
});
