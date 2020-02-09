import { observable } from "mobx";

import xjd from "../assets/heros/xjd.jpg";
import lfl from "../assets/heros/lfl.jpg";
import dan from "../assets/heros/dan.jpg";
import qyn from "../assets/heros/qyn.jpg";
import mt from "../assets/heros/mt.jpg";
import kzk from "../assets/heros/kzk.jpg";
import j from "../assets/heros/j.jpg";

const machanismStore = observable({
  careers: [
    {
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
    }
  ],

  heros: {
    "辛吉德": {
      icon: xjd,
      careers: ["剧毒", "炼金师"],
      skill: "剧毒踪迹",
      description:
        "被动：辛吉德在他移动的地方留下一团毒云，使站在其中的敌人中毒，中毒的敌人会在一段时间里持续受到魔法伤害。"
    },
    "乐芙兰": {
      icon: lfl,
      careers: ["森林", "魔法师", "刺客"],
      skill: "幻影锁链",
      description:
        "乐芙兰朝一名随机的敌人掷出一道幻影锁链，造成魔法伤害并在短暂的延迟后将目标晕眩1.5秒。"
    },

    "戴安娜": {
      icon: dan,
      careers: ["炼狱", "刺客"],
      skill: "烈焰之瀑",
      description:
        "黛安娜创造多个环绕自身的烈焰法球，这些法球会在接触一名敌人后爆炸，造成魔法伤害。黛安娜还会获得一层护盾，持续3秒。"
    },
    "奇亚娜": {
      icon: qyn,
      careers: ["云霄", "刺客", "山脉", "海洋", "炼狱"],
      skill: "元素之刃",
      description:
        "奇亚娜引爆她前方的一小段直线区域，使区域内的敌人晕眩并造成魔法伤害。"
    },
    "魔腾": {
      icon: mt,
      careers: ["刺客", "钢铁"],
      skill: "钢铁之刃",
      description:
        "被动：魔腾的攻击每命中3次后会获得强化，对所有邻近的单位造成伤害并附加攻击特效，还会治疗自身相当于伤害值的生命值。"
    },
    "卡兹克": {
      icon: kzk,
      careers: ["沙漠", "刺客"],
      skill: "荒芜来袭",
      description:
        "卡兹克进入潜行状态然后攻击生命值最低的敌人，对其进行暴击，造成物理伤害并获得法力值。"
    },
    "劫": {
      icon: j,
      careers: ["雷霆", "刺客", "召唤师"],
      skill: "电奥义！影分身",
      description:
        "劫在他当前目标的身后创造一个他自身的分身。这个分身会继承劫的装备、属性和当前生命值，并且可以施放【电奥义！影分身】。它释放技能的法力消耗会提高。"
    }
  }
});

export default machanismStore;
