import React, {Component} from 'react';
import {View, Button, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class App7 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num: 20,
    };
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress() {
    //alert(123);
    this.setState({
      num: this.state.num + 1,
    });
  }
  render() {
    return (
      <View>
        <Text>{this.state.num}</Text>
        <Button
          title="請按我5555"
          color="skyblue"
          onPress={this.handlePress}
          style={styles.btn}
        />
        <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
          <Text>點擊自增</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: 100,
    height: 100,
    backgroundColor: 'pink',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
