import Taro, { Component } from "@tarojs/taro";
import {
  View,
  Text,
  ScrollView,
  Image,
  RadioGroup,
  Radio
} from "@tarojs/components";
import { inject, observer } from "@tarojs/mobx";

import "./index.scss";

@inject((stores, props) => ({
  equipments: stores.equipments,
  updateTime: stores.updateTime
}))
@observer
class Cards extends Component {
  static state = {
    equipments_filtered: []
  };

  onSwithEquipment = event => {
    const equipment_name = event.detail.value;
    const {
      equipments: { equipments }
    } = this.props;
    this.setState({
      equipments_filtered: equipments.filter(item =>
        item.compose.includes(equipment_name)
      )
    });
  };

  componentWillMount() {
    const {
      equipments: { equipments }
    } = this.props;
    this.setState({ equipments_filtered: equipments });
  }

  render() {
    const {
      equipments: { components }
    } = this.props;
    const { equipments_filtered } = this.state;

    return (
      <ScrollView className="container-scroll">
        <View className="equipment-switch">
          <RadioGroup onChange={this.onSwithEquipment}>
            {Object.keys(components).map((item, component_index) => {
              const component_detail = components[item];
              return (
                <Radio
                  className="radio-item"
                  value={item}
                  key={item + component_index}
                >
                  {component_detail.name}
                </Radio>
              );
            })}
          </RadioGroup>
        </View>
        {equipments_filtered &&
          equipments_filtered.map(item => {
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
