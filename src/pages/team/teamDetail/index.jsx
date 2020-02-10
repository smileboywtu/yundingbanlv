import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import "./index.scss";

class TeamDetail extends Component {
  static defaultProps = {
    compose: [],
    heros: []
  };

  render() {
    const { compose, heros } = this.props;
    return (
      <View className="team-detail-container">
        <View className="team-detail-title">
          {compose.map((item, item_index) => {
            return <Text key={item + item_index}>{item[0] + item[1]} </Text>;
          })}
        </View>
        <View className="team-detail-heros">
          {heros.map((item, item_index) => {
            return <Text key={item + item_index}>{item[0]} </Text>;
          })}
        </View>
      </View>
    );
  }
}

export default TeamDetail;
