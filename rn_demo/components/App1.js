import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class App1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt1}>您好，React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  txt1: {
    color: 'red',
  },
  container: {
    backgroundColor: 'pink',
  },
});
