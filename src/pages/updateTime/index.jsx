import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { observer, inject } from "@tarojs/mobx";
import "./index.scss";

@inject((stores, props) => ({
  updateTime: stores.updateTime
}))
@observer
class UpdateTime extends Component {
  render() {
    const {
      updateTime: { time }
    } = this.props;
    return (
      <View className="container">
        <Text className="container-content">更新时间：{time}</Text>
      </View>
    );
  }
}

export default UpdateTime;
