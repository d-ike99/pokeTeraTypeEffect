
const TypeIconPath = "/TypeIcon"
const TypeImagePath = "/TypeImage"
const typeInfo = [
  {  
    id: 1,
    name: {
      en: "normal",
      jp: "ノーマル"
    },
    icon_path: `${TypeIconPath}/normal_icon.png`,
    image_path: `${TypeImagePath}/normal_image.png`,
    damage_to: {
      double: [],
      same: [1, 2, 3, 4, 5, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18],
      half: [6, 9],
      no: [8]
    },
    color: "#A9A9A9",
  },
  {
    id: 2,
    name: {
      en: "fighting",
      jp: "かくとう"
    },
    icon_path: `${TypeIconPath}/fighting_icon.png`,
    image_path: `${TypeImagePath}/fighting_image.png`,
    damage_to: {
      double: [1, 6, 9, 15, 17],
      same: [2, 5, 10, 11, 12, 13, 16],
      half: [3, 4, 7, 14, 18],
      no: [8]
    },
    color: "#FF8856",
  },
  {
    id: 3,
    name: {
      en: "flying",
      jp: "ひこう"
    },
    icon_path: `${TypeIconPath}/flying_icon.png`,
    image_path: `${TypeImagePath}/flying_image.png`,
    damage_to: {
      double: [2, 7, 12],
      same: [1, 3, 4, 5, 8, 10, 11, 14, 15, 16, 17, 18],
      half: [6, 9, 13],
      no: []
    },
    color: "#993399",
 },
  {
    id: 4,
    name: {
      en: "poison",
      jp: "どく"
    },
    icon_path: `${TypeIconPath}/poison_icon.png`,
    image_path: `${TypeImagePath}/poison_image.png`,
    damage_to: {
      double: [12, 18],
      same: [1, 2, 3, 7, 10, 11, 13, 14, 15, 16, 17],
      half: [4, 5, 6, 8],
      no: [9]
    },
    color: "#9057FF",
  },
  {
    id: 5,
    name: {
      en: "ground",
      jp: "じめん"
    },
    icon_path: `${TypeIconPath}/ground_icon.png`,
    image_path: `${TypeImagePath}/ground_image.png`,
    damage_to: {
      double: [4, 6, 9, 10, 13],
      same: [1, 2, 5, 8, 11, 14, 15, 16, 17, 18],
      half: [7, 12],
      no: [3]
    },
    color: "#993399",
  },
  {
    id: 6,
    name: {
      en: "rock",
      jp: "いわ"
    },
    icon_path: `${TypeIconPath}/rock_icon.png`,
    image_path: `${TypeImagePath}/rock_image.png`,
    damage_to: {
      double: [3, 7, 10, 15],
      same: [1, 4, 6, 8, 11, 12, 13, 14, 16, 17, 18],
      half: [2, 5, 9],
      no: []
    },
    color: "#993399",
  },
  {
    id: 7,
    name: {
      en: "bug",
      jp: "むし"
    },
    icon_path: `${TypeIconPath}/bug_icon.png`,
    image_path: `${TypeImagePath}/bug_image.png`,
    damage_to: {
      double: [12, 14, 17],
      same: [1, 5, 6, 7, 11, 13, 15, 16],
      half: [2, 3, 4, 8, 9, 10, 18],
      no: []
    },
    color: "#993399",
  },
  {
    id: 8,
    name: {
      en: "ghost",
      jp: "ゴースト"
    },
    icon_path: `${TypeIconPath}/ghost_icon.png`,
    image_path: `${TypeImagePath}/ghost_image.png`,
    damage_to: {
      double: [8, 14],
      same: [2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16, 18],
      half: [17],
      no: [1]
    },
    color: "#993399",
  },
  {
    id: 9,
    name: {
      en: "steel",
      jp: "はがね"
    },
    icon_path: `${TypeIconPath}/steel_icon.png`,
    image_path: `${TypeImagePath}/steel_image.png`,
    damage_to: {
      double: [6, 15, 18],
      half: [9, 10, 11, 13],
      same: [1, 2, 3, 4, 5, 7, 8, 12, 14, 16, 17],
      no: []
    },
    color: "#BBBBBB",
  },
  {
    id: 10,
    name: {
      en: "fire",
      jp: "ほのお"
    },
    icon_path: `${TypeIconPath}/fire_icon.png`,
    image_path: `${TypeImagePath}/fire_image.png`,
    damage_to: {
      double: [7, 9, 12, 15],
      same: [1, 2, 3, 4, 5, 8, 13, 14, 17, 18],
      half: [6, 10, 11, 16],
      no: []
    },
    color: "#CC0000",
  },
  {
    id: 11,
    name: {
      en: "water",
      jp: "みず"
    },
    icon_path: `${TypeIconPath}/water_icon.png`,
    image_path: `${TypeImagePath}/water_image.png`,
    damage_to: {
      double: [5, 6, 10],
      half: [11, 12, 16],
      no: [],
      same: [1, 2, 3, 4, 7, 8, 9, 13, 14, 15, 17, 18]
    },
    color: "#005FFF",
  },
  {
    id: 12,
    name: {
      en: "grass",
      jp: "くさ"
    },
    icon_path: `${TypeIconPath}/grass_icon.png`,
    image_path: `${TypeImagePath}/grass_image.png`,
    damage_to: {
      double: [5, 6, 11],
      half: [3, 4, 7, 9, 10, 12, 16],
      no: [],
      same: [1, 2, 8, 13, 14, 15, 17, 18]
    },
    color: "#993399",
  },
  {
    id: 13,
    name: {
      en: "electric",
      jp: "でんき"
    },
    icon_path: `${TypeIconPath}/electric_icon.png`,
    image_path: `${TypeImagePath}/electric_image.png`,
    damage_to: {
      double: [3, 11],
      half: [12, 13, 16],
      no: [5],
      same: [1, 2, 4, 6, 7, 8, 9, 10, 14, 15, 17, 18]
    },
    color: "#993399",
  },
  {
    id: 14,
    name: {
      en: "psychic",
      jp: "エスパー"
    },
    icon_path: `${TypeIconPath}/psychic_icon.png`,
    image_path: `${TypeImagePath}/psychic_image.png`,
    damage_to: {
      double: [2, 4],
      half: [9, 14],
      no: [17],
      same: [1, 3, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 18]
    },
    color: "#993399",
  },
  {
    id: 15,
    name: {
      en: "ice",
      jp: "こおり"
    },
    icon_path: `${TypeIconPath}/ice_icon.png`,
    image_path: `${TypeImagePath}/ice_image.png`,
    damage_to: {
      double: [3, 5, 12, 16],
      half: [9, 10, 11, 15],
      no: [],
      same: [1, 2, 4, 6, 7, 8, 13, 14, 17, 18]
    },
    color: "#00FFFF",
  },
  {
    id: 16,
    name: {
      en: "dragon",
      jp: "ドラゴン"
    },
    icon_path: `${TypeIconPath}/dragon_icon.png`,
    image_path: `${TypeImagePath}/dragon_image.png`,
    damage_to: {
      double: [16],
      half: [9],
      no: [18],
      same: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 17]
    },
    color: "#6666CC",
  },
  {
    id: 17,
    name: {
      en: "dark",
      jp: "あく"
    },
    icon_path: `${TypeIconPath}/dark_icon.png`,
    image_path: `${TypeImagePath}/dark_image.png`,
    damage_to: {
      double: [8, 14],
      half: [2, 17, 18],
      no: [],
      same: [1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 15, 16]
    },
    color: "#003300",
  },
  {
    id: 18,
    name: {
      en: "fairy",
      jp: "フェアリー"
    },
    icon_path: `${TypeIconPath}/fairy_icon.png`,
    image_path: `${TypeImagePath}/fairy_image.png`,
    damage_to: {
      double: [2, 16, 17],
      half: [4, 9, 10],
      no: [],
      same: [1, 3, 5, 6, 7, 8, 11, 12, 13, 14, 15, 18]
    },
    color: "#993399",
  },
]




const typeJpName = (typeId) => {
  const ret = typeInfo.find((oneType) => {
    return oneType["id"] === typeId
  })
  return ret.name.jp
}

const getTypeId = (typeEnName) => {
  console.log("typeId")
  console.log(typeEnName.type.name)

  // debugger
  const test = typeInfo.find((oneType) => {
    return oneType.name.en === typeEnName.type.name
  })
  console.log(test)

  return test["id"]
}

const getTypeIdFromEnName = (types) => {
  const typeIdlist = types.map((type) => {
    return getTypeId(type)
  })

  return typeIdlist
}

const getTypeInfo = (typeId) => {
  // console.log("getTypeIcon called")
  // console.log(typeId)
  const ret = typeInfo.find((oneType) => {
    return typeId === oneType.id
  })
  // console.log(ret)

  return ret
}

// ソート
// 条件：弱点をつけるようになったタイプが、一つの場合
//      かつ、上記のタイプがテラタイプである
// ソート方法：条件に該当するidを後半に移動する
const sortType = ({sortList, teraTypeId}) => {
  const sortedList = sortList.sort((first, second) => {
    // debugger

    // firstタイプがテラタイプかつ、一つの判定
    if(first.attackIdList.length == 1 && first.attackIdList.includes(teraTypeId)){
      // secondタイプが一つ以上の場合（firstと交換）
      if(second.attackIdList.length != 1){
        return 1
      } else if (second.attackIdList.length == 1 && second.attackIdList.includes(teraTypeId)){
        return -1
      }
      return 1
    }
    return -1
  })
  return sortedList
}

const getTypeEffect = ({attackIdList, effect, teraTypeId}) => {
  console.log("getTypeEffect")
  console.log(attackIdList)

  const listTemp = {
    deffenceId: "",
    attackIdList: ""
  }
  const attackIdListTemp = []

  // 一つのidでループ
  let retList = []

  // デフェンス側のタイプを全ループ
  typeInfo.forEach((oneType) => {
    // debugger
    const newList = { ...listTemp }
    const  newAttackList = [...attackIdListTemp]
    newList["deffenceId"] = oneType.id
    newList["attackIdList"] = newAttackList

    // 攻撃側のタイプをループ
    attackIdList.forEach((attackId) => {
      // テラスタイプなし（id: 0）の場合は、省略
      if(attackId == 0){ return; }

      // デフェンスに対して弱点をつけるか判定する
      const test = typeInfo.find((_oneType) => {
        return _oneType.id === attackId
      })
      if(test.damage_to[effect].includes(oneType.id)){
        newList["attackIdList"].push(attackId)
      }
    })

    // debugger
    if(newList["attackIdList"].length > 0){
      retList.push(newList)
    }
  })

  console.log("ret")
  const sortedType = sortType({sortList: retList, teraTypeId})

  return sortedType
      
}

export {typeInfo, typeJpName, getTypeId, getTypeIdFromEnName, getTypeInfo, getTypeEffect }