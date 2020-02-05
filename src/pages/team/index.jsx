import Taro, { Component } from '@tarojs/taro'
import { View, Text, Progress, Button } from '@tarojs/components'
import {inject, observer} from '@tarojs/mobx'
import './index.scss'

@inject((store, props)=>({
  countStore: store.countStore
}))
@observer
class Team extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    navigationBarTitleText: '首页'
  }

  increment = () => {
    const { countStore } = this.props
    countStore.increment()
  }

  decrement = () => {
    const { countStore } = this.props
    countStore.decrement()
  }

  incrementAsync = () => {
    const { countStore } = this.props
    countStore.incrementAsync()
  }

  render () {
    const { countStore: { counter } } = this.props;
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Progress percent={20} showInfo strokeWidth={2} />
        <Button size='mini' type='primary'>按钮</Button>
        <View>
          <Text>current size: {counter}</Text>
          <Button size='default' type='primary' onClick={this.increment}>增加</Button>
          <Button size='default' type='warn' onClick={this.decrement}>减少</Button>
        </View>
        
      </View>
    )
  }
}


export default Team