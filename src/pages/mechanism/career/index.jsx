import Taro, { Component } from "@tarojs/taro";
import { View, Text, Radio, RadioGroup } from "@tarojs/components";
import { inject, observer } from "@tarojs/mobx";
import "./index.scss";

import Hero from "../hero";

@inject((stores, props) => ({
  machanismStore: stores.machanismStore
}))
@observer
class Career extends Component {
  state = {
    career_index: 0
  };

  onSwithCareer = event => {
    this.setState({ career_index: event.detail.value });
  };

  render() {
    const {
      machanismStore: { careers, heros }
    } = this.props;
    const { career_index } = this.state;
    const career = careers[career_index];
    return (
      <View className="container">
        <View className="container-title">
          <Text>职业</Text>
        </View>

        <View className="career-switch">
          <RadioGroup onChange={this.onSwithCareer}>
            {careers.map((item, index) => {
              const checked = index == career_index ? true : false;
              return (
                <Radio
                  className="radio-item"
                  value={index}
                  key={item + index}
                  checked={checked}
                >
                  {item.career}
                </Radio>
              );
            })}
          </RadioGroup>
        </View>
        <View className="container-content">
          {
            <View className="career-container">
              <Text className="career-title">{career.career}</Text>
              {career.people_number.map((number_people, number_index) => {
                const [number, effect] = number_people;
                return (
                  <View key={number_people + number_index}>
                    <Text className="career-effect-number">{number}</Text>
                    <Text className="career-effect-descript"> {effect}</Text>
                  </View>
                );
              })}
              <Text style="margin-top: 5px;">英雄列表：</Text>
              <Hero heros={heros} names={career.people}></Hero>
            </View>
          }
        </View>
      </View>
    );
  }
}

export default Career;
