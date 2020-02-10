import Taro, { Component } from "@tarojs/taro";
import { observer, inject } from "@tarojs/mobx";
import { View, Text, ScrollView } from "@tarojs/components";

import UpdateTime from "../updateTime";
import TeamDetail from "./teamDetail";
import "./index.scss";

@inject((stores, props) => ({
  teamStore: stores.teamStore
}))
@observer
class Team extends Component {
  render() {
    const {
      teamStore: { teams }
    } = this.props;
    return (
      <View>
        <View className="title-container">
          <Text className="title">版本热门阵容</Text>
          <UpdateTime></UpdateTime>
        </View>

        <ScrollView className="content-container">
          <View className="team-detail">
            {teams.map((item, team_index) => {
              return (
                <TeamDetail
                  key={item + team_index}
                  compose={item.compose}
                  heros={item.heros}
                ></TeamDetail>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Team;
