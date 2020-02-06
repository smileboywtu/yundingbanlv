import Taro, { Component } from "@tarojs/taro";
import { View, Text, ScrollView } from "@tarojs/components";
import "./index.scss";

import UpdateTime from '../updateTime'
import Introduction from './introduction'
import Career from './career'

class Mechanism extends Component {
  render() {
    return (
      <View>

        <View className="title-container">
          <Text className="title">云顶之弈地图职业机制</Text>
          <UpdateTime></UpdateTime>
        </View>

        <ScrollView className='content-container'>
            <Introduction></Introduction>
            <Career></Career>
        </ScrollView>
      </View>
    );
  }
}

export default Mechanism;
