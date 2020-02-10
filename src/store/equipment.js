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
import lzhh from '../assets/equipments/lzhh.png'
import shsbj from '../assets/equipments/shsbj.png'
import gtlyzj from '../assets/equipments/gtlyzj.png'
import lddhs from '../assets/equipments/lddhs.png'
import mllmd from '../assets/equipments/mllmd.png'
import hyzw from '../assets/equipments/hyzw.png'
import mszdswzm from '../assets/equipments/mszdswzm.png'
import jshp from '../assets/equipments/jshp.png'
import xyzlzc from "../assets/equipments/xyzlzc.png"
import js from '../assets/equipments/js.png'
import gzhf from '../assets/equipments/gzhf.png'
import ztszy from '../assets/equipments/ztszy.png'
import sjzm from '../assets/equipments/sjzm.png'
import stdkdr from '../assets/equipments/stdkdr.png'
import zjz from '../assets/equipments/zjz.png'
import jjzj from '../assets/equipments/jjzj.png'
import jxjts from '../assets/equipments/jxjts.png'
import ktkj from '../assets/equipments/ktkj.png'
import dyhrz from '../assets/equipments/dyhrz.png'
import ymzl from '../assets/equipments/ymzl.png'
import jkdxq from '../assets/equipments/jkdxq.png'
import lf from '../assets/equipments/lf.png'
import wjzr from '../assets/equipments/wjzr.png'
import fyxszl from '../assets/equipments/fyxszl.png'
import zghs from '../assets/equipments/zghs.png'
import zyzs from '../assets/equipments/zyzs.png'
import sy from '../assets/equipments/sy.png'
import fjzz from '../assets/equipments/fjzz.png'
import qzst from '../assets/equipments/qzst.png'
import swzr from '../assets/equipments/swzr.png'
import jrzs from '../assets/equipments/jrzs.png'


const equipments = observable({

  classify: {
    "special":  "特殊装备",
    "smz": "生命值",
    "mk": "魔抗",
    "jnsh": "技能伤害",
    "hj": "护甲类",
    "gsl": "攻速类",
    "gjl": "攻击类",
    "flz": "法力值",
    "bjsb": "暴击闪避"
  },

  // 最终装备
  equipments: [{
      name: "巨人杀手",
      description: "携带者普通攻击造成目标 8% 最大生命值真实伤害",
      icon: jrzs,
      compose: ["bfdj", "fqzg"],
      classify: 'special',
    },
    {
      name: "死亡之刃",
      description: "击杀或助攻可获得一层被动： +15 攻击力",
      icon: swzr,
      compose: ["bfdj", "bfdj"]
    },
    {
      name: "窃贼手套",
      description: "佩戴者装备 2 件临时装备，装备品质基于英雄等级（占三个装备格）",
      icon: qzst,
      compose: ["qt", "qt"]
    },
    {
      name: "伏击之爪",
      description: "佩戴者获得护盾，可格挡敌人技能，打破护盾将晕眩敌方 4 秒",
      icon: fjzz,
      compose: ["jryd", "qt"]
    },
    {
      name: "水银",
      description: "在携带着被控制时，净化该控制效果，冷却时间为 3 秒",
      icon: sy,
      compose: ["fjdp", "qt"]
    },
    {
      name: "冰脉护手",
      description: "闪避时，创造一个冰霜领域，领域内敌人减缓 35% 攻速",
      icon: zyzs,
      compose: ["qt", "szj"]
    },
    {
      name: "珠光护手",
      description: "回合开始时，造成伤害 +40% 或攻击在命中时回复 40 生命值",
      icon: zyzs,
      compose: ["nszl", "qt"]
    },
    {
      name: "珠光护手",
      description: "携带者的技能可以暴击",
      icon: zghs,
      compose: ["wydb", "qt"]
    },
    {
      name: "复用型十字弩",
      description: "佩戴者死亡时装备至其他友军，每次装备提供额外 30% 攻速和暴击几率，无上限",
      icon: fyxszl,
      compose: ["fqzg", "qt"]
    },
    {
      name: "无尽之刃",
      description: "+20% 暴击几率 +125% 暴击伤害",
      icon: wjzr,
      compose: ["bfdj", "qt"]
    },
    {
      name: "灵风",
      description: "开局放逐一个敌军持续 6 秒",
      icon: lf,
      compose: ["jryd", "fjdp"]
    },
    {
      name: "基克的先驱",
      description: "邻格友军加 20% 攻速",
      icon: jkdxq,
      compose: ["bfdj", "jryd"],
      classify: 'smz'
    },
    {
      name: "幽梦之灵",
      description: "佩戴者也视为刺客",
      icon: ymzl,
      compose: ["bfdj", "jcz"],
      classify: 'special'
    },
    {
      name: "地狱火熔渣",
      description: "佩戴者也视为炼狱",
      icon: dyhrz,
      compose: ["wydb", "jcz"]
    },
    {
      name: "狂徒铠甲",
      description: "每秒恢复已失去生命值的 6%",
      icon: ktkj,
      compose: ["jryd", "jryd"],
      classify: 'smz'
    },
    {
      name: "巨型九头蛇",
      description: "攻击对目标和目标身后的敌人造成 3% 最大生命值的伤害",
      icon: jxjts,
      compose: ["fqzg", "jryd"]
    },
    {
      name: "荆棘之甲",
      description: "自我缓和物理伤害的 100%（真实伤害）",
      icon: jjzj,
      compose: ["szj", "szj"]
    },
    {
      name: "折剑者",
      description: "普攻 33% 的几率对敌人造成缴械 3 秒",
      icon: zjz,
      compose: ["fjdp", "szj"]
    },
    {
      name: "斯塔缇克电刃",
      description: "每三次普攻造成 3 个目标 100 溅射魔法伤害",
      icon: stdkdr,
      compose: ["fqzg", "nszl"]
    },
    {
      name: "朔极之矛",
      description: "使用技能后每次攻击回复 18% 最大法力值",
      icon: sjzm,
      compose: ["bfdj", "nszl"]
    },
    {
      name: "炽天使之拥",
      description: "每次技能释放获得 20 法力值",
      icon: ztszy,
      compose: ["nszl", "nszl"]
    },
    {
      name: "光之护符",
      description: "佩戴者也视为光",
      icon: gzhf,
      compose: ["fjdp", "jcz"]
    },
    {
      name: "救赎",
      description: "生命值 25% 时治疗附近所有友军 1200 点生命值",
      icon: js,
      compose: ["nszl", "jryd"]
    },
    {
      name: "蜥蜴长老之赐",
      description: "普攻造成 10% 灼伤，+2% 真实伤害",
      icon: xyzlzc,
      compose: ["jryd", "szj"]
    },
    {
      name: "疾射火炮",
      description: "攻击距离加倍",
      icon: jshp,
      compose: ["fqzg", "fqzg"]
    },
    {
      name: "灭世者的死亡之帽",
      description: "增加 75% 的技能伤害",
      icon: mszdswzm,
      compose: ["wydb", "wydb"]
    },
    {
      name: "幻影之舞",
      description: "闪避所有暴击攻击",
      icon: hyzw,
      compose: ["fqzg", "szj"]
    },
    {
      name: "莫雷洛秘典",
      description: "技能 10 秒内灼烧敌人最大生命值 10% 并禁止治疗；效果无法叠加",
      icon: mllmd,
      compose: ["wydb", "jryd"]
    },
    {
      name: "卢登的回声",
      description: "技能造成 150 点溅射伤害",
      icon: lddhs,
      compose: ["wydb", "nszl"]
    },
    {
      name: "钢铁烈焰之匣",
      description: "战斗前为自己和左右两格内英雄施加 8 秒 250 点护盾",
      icon: gtlyzj,
      compose: ["wydb", "szj"]
    },
    {
      name: "守护神板甲",
      description: "携带者也是一名守护神",
      icon: shsbj,
      compose: ["jcz", "szj"]
    },
    {
      name: "离子火花",
      description: "敌人施法掉 100 血",
      icon: lzhh,
      compose: ["wydb", "fjdp"]
    },
    {
      name: "肃静",
      description: "普通攻击有 50% 对敌人造成 3 秒沉默",
      icon: sj,
      compose: ["nszl", "fjdp"]
    },
    {
      name: "海克斯科技枪刃",
      description: "+25% 全能吸血",
      icon: hkskjqz,
      compose: ["bfdj", "wydb"]
    },
    {
      name: "鬼索的狂暴之刃",
      description: "每次攻击增加 5% 攻击速度，无上限",
      icon: gsdkbzr,
      compose: ["fqzg", "wydb"]
    },
    {
      name: "守护天使",
      description: "阵亡 2 秒后复活，复活后恢复 400 生命值",
      icon: shts,
      compose: ["bfdj", "szj"]
    },
    {
      name: "冰霜之锤",
      description: "携带者也是一名极地英雄",
      icon: bszc,
      compose: ["jryd", "jcz"],
      classify: 'smz'
    },
    {
      name: "冰霜之心",
      description: "邻近格子的敌人降低 20% 攻击速度",
      icon: bszx,
      compose: ["nszl", "szj"]
    },
    {
      name: "巨龙之爪",
      description: "装备者获得 50% 魔法抗性",
      icon: jlzz,
      compose: ["fjdp", "fjdp"]
    },
    {
      name: "法师之帽",
      description: "携带者也是一名魔法师",
      icon: fszm,
      compose: ["jcz", "nszl"],
      classify: 'special'
    },
    {
      name: "卢安娜的飓风",
      description: "攻击两名额外敌人造成 50% 伤害",
      icon: landjf,
      compose: ["fjdp", "fqzg"]
    },
    {
      name: "狂战士之斧",
      description: "佩戴者也归为狂战士",
      icon: kzszf,
      compose: ["jcz", "qt"],
      classify: 'special'
    },
    {
      name: "饮血剑",
      description: "普攻攻击附带 40% 吸血",
      icon: yxj,
      compose: ["fjdp", "bfdj"]
    },
    {
      name: "自然之力",
      description: "可上阵人数+1",
      icon: zrzl,
      compose: ["jcz", "jcz"],
      classify: 'special'
    },
    {
      name: "破败王者之刃",
      description: "携带者也是一名剑士",
      icon: pbwzzr,
      compose: ["jcz", "fqzg"],
      classify: 'special'
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
