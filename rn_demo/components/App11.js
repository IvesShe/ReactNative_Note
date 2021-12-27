import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';

const arr_data = [
  {
    id: 1,
    data: 10,
  },
  {
    id: 2,
    data: 20,
  },
  {
    id: 3,
    data: 30,
  },
  {
    id: 4,
    data: 40,
  },
];
export default class App10 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr_data,
    };
  }
  renderDate({item}) {
    // 決定每一項的展示方式
    return (
      <Text>
        {item.id}-{item.data}
      </Text>
    );
  }
  render() {
    return (
      <View>
        <Text>55665</Text>
        <FlatList
          numColumns={1} // 每行顯示多少項
          data={this.state.arr_data} // 數據源
          renderItem={this.renderDate} // 渲染函數
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
