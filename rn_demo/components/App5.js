import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default class App5 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={{fontSize: 20}}>1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={{fontSize: 40}}>2</Text>
        </View>
        <View style={styles.box3}>
          <Text style={{fontSize: 30}}>3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // row、column、row-reverse、column-reverse
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'green',
    // flex-start,flex-end,center,space-between,space-around
    justifyContent: 'center',
    // flex-start,flex-end,center,stretch,baseline
    alignItems: 'center',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'pink',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#fcf',
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: '#ffc',
  },
});
