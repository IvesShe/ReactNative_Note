import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

class Row extends Component {
  render() {
    return (
      <View style={styles.row}>
        <View style={styles.box1}>
          <Text>1</Text>
        </View>
        <View style={styles.box2}>
          <Text>2</Text>
        </View>
        <View style={styles.box3}>
          <Text>3</Text>
        </View>
      </View>
    );
  }
}

export default class App6 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 18}}>Flex佈局練習</Text>
        <View style={styles.boxs}>
          <Row />
          <Row />
          <Row />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 80,
  },
  boxs: {
    width: width * 0.9,
    height: 200,
    backgroundColor: 'pink',
    marginTop: 10,
  },
  row: {
    flex: 1,
    borderWidth: 1,
    borderColor: '000',
    flexDirection: 'row',
  },
  box1: {
    flex: 1.5,
    borderWidth: 1,
    borderColor: '#f00',
  },
  box2: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#f00',
  },
  box3: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#f00',
  },
});
