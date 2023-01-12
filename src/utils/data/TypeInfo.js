import { addData } from "./treatData"

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

// 相性リスト
const effectName = {
  "quadruple": "×４： ばつぐん",
  "double": "×２： ばつぐん",
  "same": "×１： 等倍",
  "half": "×1/2： いまひとつ",
  "quarter": "×1/4： いまひとつ",
  "no":  "×０： 効果なし",
}
const effectNameList = ["double", "same", "half", "no"]
const effectMap = {
  dispName: "",
  list: false
}
const effectObj = {
  deffenceId: "",
  attackIdList: ""
}

/**
 * 指定した"相性"に対する、攻撃側タイプの相性のマップデータを生成する
 * @param {string} effect 相性（例：効果抜群、等倍　など）
 * @param {array} attackIdList 攻撃側のポケモンのタイプ一覧（テラスタイプ含む）
 * @param {int} teraTypeId 攻撃側ポケモンのテラスタイプ
 * @returns {list} 
 */
const getTypeEffectMapList = ({effect, attackIdList, teraTypeId}) => {
  console.log("getTypeEffect")
  console.log(attackIdList)

  // 初期値設定：攻撃、防御の相性リスト
  let effectList = []
  
  // 攻撃、防御の相性リスト生成
  // デフェンス側のタイプを全ループ
  typeInfo.forEach((deffenceTypeInfo) => {
    // debugger
    const newList = { ...effectObj }
    const newAttackList = []
    newList["deffenceId"] = deffenceTypeInfo.id
    newList["attackIdList"] = newAttackList

    // 攻撃側のタイプをループ
    attackIdList.forEach((attackId) => {
      // テラスタイプなし（id: 0）の場合は、省略
      if(attackId == false){ return; }

      // デフェンスに対して弱点をつけるか判定する
      const attackTypeInfo = typeInfo.find((_oneType) => {
        return _oneType.id === attackId
      })
      if(attackTypeInfo.damage_to[effect].includes(deffenceTypeInfo.id)){
        newList["attackIdList"].push(attackId)
      }
    })

    // debugger
    if(newList["attackIdList"].length > 0){
      effectList.push(newList)
    }
  })

  // タイプIDに関してソートを行う
  const sortedType = sortType({sortList: effectList, teraTypeId})

  // 返却用用のリスト生成
  let retList = {...effectMap}
  retList["list"] = sortedType
  retList["dispName"] = effectName[effect]

  return retList      
}

/**
 * 指定した"相性"に対する、攻撃側タイプの相性のマップデータを生成する
 * @param {string} effect 相性（例：効果抜群、等倍　など）
 * @param {array} attackIdList 攻撃側のポケモンのタイプ一覧（テラスタイプ含む）
 * @param {int} teraTypeId 攻撃側ポケモンのテラスタイプ
 * @returns {list} 
 */
 const getPokeEffectMapList = ({deffencePokeInfoList, attackIdList, teraTypeId}) => {
  console.log("getTypeEffect")
  console.log(attackIdList)

  // 返却用のリスト生成
  let quadrupleList = {...effectMap}
  quadrupleList["dispName"] = effectName["quadruple"]
  quadrupleList["list"] = []
  let doubleList = {...effectMap}
  doubleList["dispName"] = effectName["double"]
  doubleList["list"] = []
  let sameList = {...effectMap}
  sameList["dispName"] = effectName["same"]
  sameList["list"] = []
  let halfList = {...effectMap}
  halfList["dispName"] = effectName["half"]
  halfList["list"] = []
  let quarterList = {...effectMap}
  quarterList["dispName"] = effectName["quarter"]
  quarterList["list"] = []
  let noList = {...effectMap}
  noList["dispName"] = effectName["no"]
  noList["list"] = []

  // 攻撃、防御の相性リスト生成
  // デフェンス側のタイプを全ループ
  deffencePokeInfoList.forEach((onePokeInfo) => {
    // ディフェンスのポケモンのタイプを取得
    const deffenceIdlist = [...onePokeInfo.typeId]

    // 相性格納用変数用意
    const effectInfo = { ...effectObj }
    effectInfo["deffenceId"] = "防御側ポケモンのID"


    // 防御側のポケモンID格納
    let oldDeffencePokeId = ""
    let oldAddList = ""

    // 攻撃側のタイプをループ（例：サザンドラなら、悪とドラゴンの二つのタイプ）
    attackIdList.forEach((attackId) => {
      // テラスタイプなし（id: 0）の場合は、省略
      if(attackId == false){ return; }

      // デフェンスに対して弱点をつけるか判定する
      // 攻撃側のタイプ相性を取得する
      const attackTypeInfo = typeInfo.find((_oneType) => {
        return _oneType.id === attackId
      })

      // 相性取得：攻撃側IDが、防御側のIDに対してどの"相性"になるか？判別
      // カウント用初期値設定
      let doubleCnt = 0
      let sameCnt = 0
      let halfCnt = 0
      let noFlg = false

      

      // ディフェンスIDのループ（ドサイドン、地面、岩）
      deffenceIdlist.forEach((deffenceId) => {
        // 防御ポケモンのタイプ判定
        effectNameList.forEach((effect) => {
          if(attackTypeInfo.damage_to[effect].includes(deffenceId)){
            switch (effect) {
              case 'double':
                doubleCnt += 1
                break;
              case 'same':
                sameCnt += 1
                break;
              case 'half':
                halfCnt += 1
                break;
              case 'no':
                noFlg = true
                break;
              default:
                break;
            }
          }
        })
      })

      // debugger
      // カウントの結果をもとに、返却用のリストを更新
      // 4倍判定
      if(doubleCnt == 2){
        quadrupleList = addData({deffenceId: onePokeInfo.id, attackId: attackId, argList: quadrupleList, sameAddFlg: (oldDeffencePokeId == onePokeInfo.id) && (oldAddList == "quadruple")})
        oldAddList = "quadruple"
      // 2倍判定
      } else if(doubleCnt == 1 && noFlg == false && halfCnt == 0) {
        doubleList = addData({deffenceId: onePokeInfo.id, attackId: attackId, argList: doubleList, sameAddFlg: (oldDeffencePokeId == onePokeInfo.id) && (oldAddList == "double")})
        oldAddList = "double"
      // 等倍判定
      } else if((doubleCnt == 1 && halfCnt == 1) || (sameCnt == 2) || (sameCnt == 1 && halfCnt == 0 && noFlg == false)){
        sameList = addData({deffenceId: onePokeInfo.id, attackId: attackId, argList: sameList, sameAddFlg: (oldDeffencePokeId == onePokeInfo.id) && (oldAddList == "same")})
        oldAddList = "same"
      // 1/2判定
      } else if(halfCnt == 1 && noFlg == false && doubleCnt == 0){
        halfList = addData({deffenceId: onePokeInfo.id, attackId: attackId, argList: halfList, sameAddFlg: (oldDeffencePokeId == onePokeInfo.id) && (oldAddList == "half")})
        oldAddList = "half"
      // 1/4判定
      } else if(halfCnt == 2){
        quarterList = addData({deffenceId: onePokeInfo.id, attackId: attackId, argList: quarterList, sameAddFlg: (oldDeffencePokeId == onePokeInfo.id) && (oldAddList == "quarter")})
        oldAddList = "quarter"
      // 無効判定
      } else if(noFlg == true){
        noList = addData({deffenceId: onePokeInfo.id, attackId: attackId, argList: noList, sameAddFlg: (oldDeffencePokeId == onePokeInfo.id) && (oldAddList == "no")})
        oldAddList = "no"
      }

      // ポケモン更新
      oldDeffencePokeId = onePokeInfo.id


    })

  })

  // debugger
  // タイプIDに関してソートを行う
  // const sortedType = sortType({sortList: effectList, teraTypeId})


  return {
    quadrupleList: quadrupleList,
    doubleList: doubleList,
    sameList: sameList,
    halfList: halfList,
    quarterList: quarterList,
    noList: noList
  }      
}

// 取得したポケモンのデータから、名称、アイコンのURL、種族値、タイプを取得する
const treatPokeInfoData = ({res_info, name}) => {

  // 初期値定義
  const pokeInfoJson = {
    name: "",
    typeId: [],
    icon_src: "",
    stats: []
  }

  // タイプID取得
  const type = getTypeIdFromEnName(res_info.types)

  // 種族値取得
  const stats = [
    {
      name: "H",
      stat: res_info.stats[0].base_stat
    },
    {
      name: "A",
      stat: res_info.stats[1].base_stat
    },
    {
      name: "B",
      stat: res_info.stats[2].base_stat
    },
    {
      name: "C",
      stat: res_info.stats[3].base_stat,
    },
    {
      name: "D",
      stat: res_info.stats[4].base_stat
    },
    {
      name: "S",
      stat: res_info.stats[5].base_stat,
    }
  ]

  // json作成
  let newPokeInfo = {...pokeInfoJson}
  newPokeInfo["name"] = name
  newPokeInfo["icon_src"] = res_info.sprites.front_default
  newPokeInfo["typeId"] = type
  newPokeInfo["stats"] = stats

  console.log("newpoke info")
  console.log(newPokeInfo)

  return newPokeInfo
}

export {typeInfo, typeJpName, getTypeId, getTypeIdFromEnName, getTypeInfo, getTypeEffectMapList, treatPokeInfoData, getPokeEffectMapList }