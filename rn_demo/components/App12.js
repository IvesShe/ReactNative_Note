import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import Img from '../res/logo.jpg';
const arr_data = [
  {
    name: 'p01',
    des: '1111111111',
  },
  {
    name: 'p02',
    des: '2222222222',
  },
  {
    name: 'p03',
    des: '3333333333',
  },
  {
    name: 'p04',
    des: '4444444444',
  },
  {
    name: 'p05',
    des: '5555555555',
  },
  {
    name: 'p06',
    des: '6666666666',
  },
];
export default class App12 extends Component {
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
        {item.name}-{item.des}
        <Image
          source={require('../res/' + 'p02' + '.jpg')}
          style={styles.myImg}
        />
      </Text>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../res/logo02.jpg')} style={styles.imgTitle} />
        <FlatList
          numColumns={3} // 每行顯示多少項
          data={this.state.arr_data} // 數據源
          renderItem={this.renderDate} // 渲染函數
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingLeft: 10,
    paddingRight: 10,
  },
  imgTitle: {
    width: 100,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
  },
  myImg: {
    width: 100,
    height: 100,
  },
});
