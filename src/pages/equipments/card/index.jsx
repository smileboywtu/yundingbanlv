import Taro, { Component } from "@tarojs/taro";
import { View, Text, ScrollView, Image } from "@tarojs/components";
import { inject, observer } from "@tarojs/mobx";

import "./index.scss";

@inject((stores, props) => ({
  equipments: stores.equipments
}))
@observer
class Cards extends Component {
  render() {
    const {
      equipments: { equipments, components }
    } = this.props;
    return (
      <ScrollView className="container-scroll">
        {equipments.map(item => {
          const [equipment1, equipment2] = item.compose;
          return (
            <View key={item.name} className="container">
              <Image className="equipment-img" src={item.icon}></Image>

              <View className="container-right">
                <Text className="equipment-title">{item.name}</Text>
                <Text className="equipment-descript">{item.description}</Text>
              </View>

              <View className="part">
                <Image
                  className="equipment-img"
                  src={components[equipment1].icon}
                ></Image>
                {/* <Image className="add-img" src={addImage}></Image> */}
                <Image
                  className="equipment-img"
                  src={components[equipment2].icon}
                ></Image>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

export default Cards;
