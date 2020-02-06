import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import "./index.scss";
import Cards from "./card";
import UpdateTime from "../updateTime";

class Equipments extends Component {
  render() {
    return (
      <View>
        <View className="title-container ">
          <Text className="title">云顶之弈装备</Text>
          <UpdateTime />
        </View>
        <Cards />
      </View>
    );
  }
}

export default Equipments;
