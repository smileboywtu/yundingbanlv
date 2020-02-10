import { observable } from "mobx";

const teamStore = observable({
  teams: [
      {
          compose: [
              [6, "光"],
              [2, "月蚀"],
              [2, "秘书"]
          ],
          heros: [
              ["贾克斯", []],
              ["索拉卡", []],
              ["亚托克斯", []],
              ["约里克", []],
              ["内瑟斯", []],
              ["卢锡安", []],
              ["蕾欧娜", []],
              ["卡尔玛", []]
          ]
      }
  ]
});

export default teamStore;
