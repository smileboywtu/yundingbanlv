import {
  observable
} from "mobx";

import xjd from "../assets/heros/xjd.jpg";
import lfl from "../assets/heros/lfl.jpg";
import dan from "../assets/heros/dan.jpg";
import qyn from "../assets/heros/qyn.jpg";
import mt from "../assets/heros/mt.jpg";
import kzk from "../assets/heros/kzk.jpg";
import j from "../assets/heros/j.jpg";
import lkd from '../assets/heros/lkd.jpg'
import wlbe from '../assets/heros/wlbe.jpg'
import jks from '../assets/heros/jks.jpg'
import se from '../assets/heros/se.jpg'
import mdys from '../assets/heros/mdys.jpg'
import alf from '../assets/heros/alf.jpg'
import jl from '../assets/heros/jl.jpg'
import mezh from '../assets/heros/mezh.jpg'
import aze from '../assets/heros/aze.jpg'
import an from '../assets/heros/an.jpg'
import ylk from '../assets/heros/ylk.jpg'
import mlfl from '../assets/heros/mlfl.png'
import mj from '../assets/heros/mj.png'
import mmt from '../assets/heros/mmt.png'
import mqyn from '../assets/heros/mqyn.png'
import mdan from '../assets/heros/mdan.png'
import mylk from '../assets/heros/mylk.png'
import mjks from '../assets/heros/mjks.png'
import mytks from '../assets/heros/mytks.png'
import ytks from '../assets/heros/ytks.jpg'
import nss from '../assets/heros/nss.jpg'
import mnss from '../assets/heros/mnss.png'



const machanismStore = observable({
  careers: [{
      career: "炼金师",
      people: ["辛吉德"],
      people_number: [
        [1, "炼金师会穿过其他单位并且永不停止移动"]
      ]
    },
    {
      career: "刺客",
      people: ["戴安娜", "乐芙兰", "奇亚娜", "魔腾", "卡兹克", "劫"],
      people_number: [
        [3, "50% 的暴击伤害和 +10% 暴击几率"],
        [6, "150% 的暴击伤害和 +20% 暴击几率"]
      ]
    },
    {
      career: "狂战士",
      people: ["雷克顿", "沃利贝尔", "贾克斯", "赛恩", "蒙多医生", "奥拉夫"],
      people_number: [
        [3, "狂战士的攻击有40%的几率对目标背后锥形区域造成伤害"],
        [6, "狂战士的攻击有100%的几率对目标背后锥形区域造成伤害，并额外提供给所有狂战士25攻击力"]
      ]
    },
    {
      career: "召唤使",
      people: ["婕拉", "玛尔扎哈", "阿兹尔", "安妮", "约里克", "劫"],
      people_number: [
        [3, "增加召唤生物30%的生命值和持续时间"],
        [6, "增加召唤生物120%的生命值和持续时间"]
      ]
    }
  ],

  heros: {
    "内瑟斯": {
      micon: mnss,
      icon: nss,
      careers: ["光", "守护神"],
      skill: "破晓降临",
      description: "内瑟斯在接下来的7秒将自己笼罩在圣光之中，获得额外生命值并且每秒对邻近的敌人造成魔法伤害。"
    },
    "亚托克斯": {
      micon: mytks,
      icon: ytks,
      careers: ["光", "剑士"],
      skill: "圣光利刃",
      description: "亚托克斯顺劈他面前的区域，对区域内的敌人造成伤害。"
    },
    "约里克": {
      micon: mylk,
      icon: ylk,
      careers: ["光", "召唤使"],
      skill: "牧魂人",
      description: "约里克为生命值最低的名友军施以祝福。在他们死亡时，他们会作为光之仆从复活，光之仆从会从激活的【光】元素特质加成中获益。"
    },

    "安妮": {
      icon: an,
      careers: ["炼狱", "召唤使"],
      skill: "提伯斯",
      description: "安妮在目标附近召唤提伯斯，对所有邻近敌人造成魔法伤害。提伯斯会在该战斗环节的剩余时间里进行战斗，直到被击杀为止，每次普通攻击造成魔法伤害。提伯斯在场上时，安妮不会获得法力值。"
    },
    "阿兹尔": {
      icon: aze,
      careers: ["沙漠", "召唤使"],
      skill: "沙兵现身",
      description: "阿兹尔在一名随机的敌人附近召唤一个沙漠士兵。在阿兹尔攻击时，沙漠士兵会对附近的敌人进行攻击，沿直线造成魔法伤害。沙漠士兵持续6秒。"
    },
    "玛尔扎哈": {
      icon: mezh,
      careers: ["影", "召唤使"],
      skill: "暗影虫群",
      description: "玛尔扎哈召唤多个影灵。影灵的每次攻击造成魔法伤害。影灵会从已激活的【影】元素特质加成中获益。"
    },
    "婕拉": {
      icon: jl,
      careers: ["炼狱", "召唤使"],
      skill: "狂野生长",
      description: "婕拉在棋盘边缘的随机位置召唤火焰喷射者。它们会攻击距离最近的敌人3秒，每次攻击造成魔法伤害。"
    },
    "奥拉夫": {
      icon: alf,
      careers: ["极地", "狂战士"],
      skill: "诸神黄昏",
      description: "奥拉夫获得攻击速度，并基于已损失生命值获得生命偷取，并且在该回合的剩余时间里免疫控制效果。"
    },
    "蒙多医生": {
      icon: mdys,
      careers: ["剧毒", "狂战士"],
      skill: "肾上腺激素",
      description: "蒙多医生创造一团持续一段时间的护体毒云。毒云每秒对附近的敌人造成基于他最大生命值的魔法伤害，并且自身获得相当于基于伤害值的治疗效果。"
    },
    "赛恩": {
      icon: se,
      careers: ["影", "狂战士"],
      skill: "残虐猛击",
      description: "赛恩蓄力片刻，随后将他的斧头朝一个方向砸下，对命中的所有敌人造成击飞效果和魔法伤害。"
    },
    "贾克斯": {
      micon: mjks,
      icon: jks,
      careers: ["狂战士", "光"],
      skill: "反击风暴",
      description: "贾克斯在一段时间里闪避所有即将到来的攻击，随后对附近所有敌人进行打击，造成魔法伤害和1.5秒的晕眩。"
    },
    "沃利贝尔": {
      icon: wlbe,
      careers: ["雷霆", "极地", "狂战士"],
      skill: "狂野之咬",
      description: "沃利贝尔撕咬他的目标，造成魔法伤害。如果目标的生命值低于35%，这个技能会将目标击杀并回满沃利贝尔的法力值。"
    },
    "雷克顿": {
      icon: lkd,
      careers: ["沙漠", "狂战士"],
      skill: "暴君狂击",
      description: "雷克顿挥舞他的战刃，对附近的敌人造成伤害并且每命中一个敌人就会治疗他自身生命值。"
    },
    "辛吉德": {
      icon: xjd,
      careers: ["剧毒", "炼金师"],
      skill: "剧毒踪迹",
      description: "被动：辛吉德在他移动的地方留下一团毒云，使站在其中的敌人中毒，中毒的敌人会在一段时间里持续受到魔法伤害。"
    },
    "乐芙兰": {
      micon: mlfl,
      icon: lfl,
      careers: ["森林", "魔法师", "刺客"],
      skill: "幻影锁链",
      description: "乐芙兰朝一名随机的敌人掷出一道幻影锁链，造成魔法伤害并在短暂的延迟后将目标晕眩1.5秒。"
    },

    "戴安娜": {
      micon: mdan,
      icon: dan,
      careers: ["炼狱", "刺客"],
      skill: "烈焰之瀑",
      description: "黛安娜创造多个环绕自身的烈焰法球，这些法球会在接触一名敌人后爆炸，造成魔法伤害。黛安娜还会获得一层护盾，持续3秒。"
    },
    "奇亚娜": {
      micon: mqyn,
      icon: qyn,
      careers: ["云霄", "刺客", "山脉", "海洋", "炼狱"],
      skill: "元素之刃",
      description: "奇亚娜引爆她前方的一小段直线区域，使区域内的敌人晕眩并造成魔法伤害。"
    },
    "魔腾": {
      micon: mmt,
      icon: mt,
      careers: ["刺客", "钢铁"],
      skill: "钢铁之刃",
      description: "被动：魔腾的攻击每命中3次后会获得强化，对所有邻近的单位造成伤害并附加攻击特效，还会治疗自身相当于伤害值的生命值。"
    },
    "卡兹克": {
      icon: kzk,
      careers: ["沙漠", "刺客"],
      skill: "荒芜来袭",
      description: "卡兹克进入潜行状态然后攻击生命值最低的敌人，对其进行暴击，造成物理伤害并获得法力值。"
    },
    "劫": {
      micon: mj,
      icon: j,
      careers: ["雷霆", "刺客", "召唤师"],
      skill: "电奥义！影分身",
      description: "劫在他当前目标的身后创造一个他自身的分身。这个分身会继承劫的装备、属性和当前生命值，并且可以施放【电奥义！影分身】。它释放技能的法力消耗会提高。"
    }
  }
});

export default machanismStore;
