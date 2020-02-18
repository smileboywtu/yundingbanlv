import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import equipments from './store/equipment'
import updateTime from './store/updateTime'
import machanismStore from './store/machanism'
import teamStore from './store/team'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = {
  equipments,
  updateTime,
  machanismStore,
  teamStore
}

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/mechanism/index',
      'pages/equipments/index',
      'pages/team/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#666",
      selectedColor: "#b4282d",
      backgroundColor: "#fafafa",
      borderStyle: 'black',
      list: [
        {
          pagePath: "pages/mechanism/index",
          iconPath: "./assets/tab-bar/mechanism.png",
          selectedIconPath: "./assets/tab-bar/mechanism-active.png",
          text: "云顶之弈"
        },
        {
        pagePath: "pages/team/index",
        iconPath: "./assets/tab-bar/team.png",
        selectedIconPath: "./assets/tab-bar/team-active.png",
        text: "阵容"
        }, 
        {
          pagePath: "pages/equipments/index",
          iconPath: "./assets/tab-bar/equipment.png",
          selectedIconPath: "./assets/tab-bar/equipment-active.png",
          text: "装备"
        }]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store = {store}>
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
