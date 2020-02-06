import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";

import "./index.scss";

class Hero extends Component {
  static defaultProps = {
    heros: {},
    names: []
  };

  render() {
    const { heros, names } = this.props;
    return (
      <View className="container">
        {names.map((hero_name, index) => {
          const hero_info = heros[hero_name];
          return (
            <View className="hero-list-container" key={index}>
              <View key={index}>
                <Image className="hero-img" src={hero_info.icon}></Image>
              </View>
              <View className="hero-list-container-right">
                <View>
                  <Text>{hero_name} </Text>
                  {hero_info.careers.map((career_name, career_index) => {
                    return (
                      <Text className="career-list" key={career_index}>
                        {career_name}{" "}
                      </Text>
                    );
                  })}
                </View>

                <View>
                  <Text className="hero-skill">{hero_info.skill}: </Text>
                  <View className="hero-description">
                    <Text>{hero_info.description}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}

export default Hero;
