import Taro, { Component } from "@tarojs/taro";
import { View, Text, ScrollView } from "@tarojs/components";
import "./index.scss";

class Introduction extends Component {
  render() {
    return (
      <View className="container">
        <View className="container-title">
          <Text>地图机制</Text>
        </View>
        <View className="container-content">
          <View style="margin-top: 10px;">
            <Text className="container-content-part">
              每局元素崛起的游戏都会随机包含一种元素：地狱火，海洋，山脉或云霄。
              本局游戏的元素可以在轮盘的中间查看，且各具一些效果。
            </Text>
          </View>

          <View style="margin-top: 10px;">
            <Text className="container-content-part">
              当你加载进入对弈区后，
              某个随机格子将注入本局游戏的元素，加强每场战斗开始时站在上面英雄的属性。
            </Text>
          </View>

          <View style="margin-top: 10px;">
            <Text className="container-content-part">
              当游戏到达3-1阶段时，会出现第二个元素格子八名玩家棋盘上元素格子的位置都是一样的。
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Introduction;
