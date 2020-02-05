import Taro, { Component } from "@tarojs/taro";
import { View, Text, ScrollView, Image } from "@tarojs/components";

import "./index.scss";
import Cards from "./card";

class Equipments extends Component {
  render() {
    return (
      <View>
        <View className="title-container ">
          <Text className="title">云顶之弈装备</Text>
        </View>
        <Cards />
      </View>
    );
  }
}

export default Equipments;
