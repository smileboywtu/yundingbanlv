import {
  observable
} from 'mobx'

import kzszf from '../assets/equipments/kzszf.png'
import jcz from '../assets/equipments/jcz.png'
import qt from '../assets/equipments/qt.png'
import yxj from '../assets/equipments/yxj.png'
import bfdj from '../assets/equipments/bfdj.png'
import fjdp from '../assets/equipments/fjdp.png'
import zrzl from '../assets/equipments/zrzl.png'
import pbwzzr from '../assets/equipments/pbwzzr.png'
import fqzg from '../assets/equipments/fqzg.png'
import landjf from '../assets/equipments/landjf.png'
import fszm from '../assets/equipments/fszm.png'
import nszl from '../assets/equipments/nszl.png'
import jlzz from '../assets/equipments/jlzz.png'
import bszx from '../assets/equipments/bszx.png'
import szj from '../assets/equipments/szj.png'
import jryd from '../assets/equipments/jryd.png'
import bszc from '../assets/equipments/bszc.png'
import shts from '../assets/equipments/shts.png'
import gsdkbzr from '../assets/equipments/gsdkbzr.png'
import wydb from '../assets/equipments/wydb.png'
import hkskjqz from '../assets/equipments/hkskjqz.png'
import sj from '../assets/equipments/sj.png'

const equipments = observable({
  // 最终装备
  equipments: [{
      name: "肃静",
      description: "普通攻击有50%对敌人造成3秒沉默",
      icon: sj,
      compose: ["nszl", "fjdp"]
    },
    {
      name: "海克斯科技枪刃",
      description: "+25%全能吸血",
      icon: hkskjqz,
      compose: ["bfdj", "wydb"]
    },
    {
      name: "鬼索的狂暴之刃",
      description: "每次攻击增加5%攻击速度，无上限",
      icon: gsdkbzr,
      compose: ["fqzg", "wydb"]
    },
    {
      name: "守护天使",
      description: "阵亡2秒后复活，复活后恢复400生命值",
      icon: shts,
      compose: ["bfdj", "szj"]
    },
    {
      name: "冰霜之锤",
      description: "携带者也是一名极地英雄",
      icon: bszc,
      compose: ["jryd", "jcz"]
    },
    {
      name: "冰霜之心",
      description: "邻近格子的敌人降低20%攻击速度",
      icon: bszx,
      compose: ["nszl", "szj"]
    },
    {
      name: "巨龙之爪",
      description: "装备者获得50%魔法抗性",
      icon: jlzz,
      compose: ["fjdp", "fjdp"]
    },
    {
      name: "法师之帽",
      description: "携带者也是一名魔法师",
      icon: fszm,
      compose: ["jcz", "nszl"]
    },
    {
      name: "卢安娜的飓风",
      description: "攻击两名额外敌人造成50%伤害",
      icon: landjf,
      compose: ["fjdp", "fqzg"]
    },
    {
      name: "狂战士之斧",
      description: "佩戴者也归为狂战士",
      icon: kzszf,
      compose: ["jcz", "qt"]
    },
    {
      name: "饮血剑",
      description: "普攻攻击附带40%吸血",
      icon: yxj,
      compose: ["fjdp", "bfdj"]
    },
    {
      name: "自然之力",
      description: "可上阵人数+1",
      icon: zrzl,
      compose: ["jcz", "jcz"]
    },
    {
      name: "破败王者之刃",
      description: "携带者也是一名剑士",
      icon: pbwzzr,
      compose: ["jcz", "fqzg"]
    }
  ],

  // components
  components: {
    "wydb": {
      name: "无用大棒",
      icon: wydb,
      description: "+20%技能伤害"
    },
    "jryd": {
      name: "巨人腰带",
      icon: jryd,
      description: "+200生命值"
    },
    "szj": {
      name: "锁子甲",
      icon: szj,
      description: "+25护甲"
    },
    "fqzg": {
      name: "反曲之弓",
      icon: fqzg,
      description: "+15%攻速"
    },
    "jcz": {
      name: "金铲子",
      icon: jcz,
      description: "特殊装备合成并必备道具"
    },
    "qt": {
      name: "全套",
      icon: qt,
      description: "提供 +10% 暴击几率和 +10% 闪避几率"
    },
    "bfdj": {
      name: "暴风大剑",
      icon: bfdj,
      description: "+15点攻击力"
    },
    "fjdp": {
      name: "负极斗篷",
      icon: fjdp,
      description: "+25点魔法抗性"
    },
    "nszl": {
      name: "女神之泪",
      icon: nszl,
      description: "+20法力值"
    }
  }
})

export default equipments
