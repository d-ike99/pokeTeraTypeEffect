import React from 'react'
import { usePokeInfo } from '../../../utils/context/PokeInfoContext'
import { useTeraType } from '../../../utils/context/TeraTypeContext'
import { getTypeEffect } from '../../../utils/data/TypeInfo'
import EffectBox from './EffectBox/EffectBox'
import { EffectBoxContainerStyled } from "./PokeEffectContainerStyle"
import styled from 'styled-components'
import { DispLabel } from '../../Common/Label'


// 相性リスト
const effectName = {
  "double": "×２： ばつぐん",
  "same": "×１： 等倍",
  "half": "×1/2： いまひとつ",
  "no":  "×０： 効果なし",
}
const effectMap = {
  dispName: "",
  list: []
}

const PokeEffectContainer = () => {
    // typeId取得
    const pokeInfo = usePokeInfo();
    const typelist = pokeInfo["typeId"]
    const teraTypeId = useTeraType();
  
    console.log("pokeinfo effetinfo")
    console.log(typelist)
    console.log(typeof(pokeInfo.typeId))
  
    const attackIdList = [...pokeInfo.typeId, teraTypeId]
    // const attackIdList = [2, 4]
    const effect = "double"
  
    if(pokeInfo.typeId.length === 0){
      return <>ロード中</>
    }
  
    // double
    const retList = getTypeEffect({attackIdList: attackIdList, effect: effect, teraTypeId})
    let newEffectMapList = {...effectMap}
    newEffectMapList["list"] = retList
    newEffectMapList["dispName"] = effectName.double
  
    // 相性関係作成
    const harfList = getTypeEffect({attackIdList: attackIdList, effect: "half", teraTypeId})
    let newHarlMapList = {...effectMap}
    newHarlMapList["list"] = harfList
    newHarlMapList["dispName"] = effectName.half
  
  
    const noList = getTypeEffect({attackIdList: attackIdList, effect: "no", teraTypeId})
    let newNoMapList = {...effectMap}
    newNoMapList["list"] = noList
    newNoMapList["dispName"] = effectName.no
  
    const sameList = getTypeEffect({attackIdList: attackIdList, effect: "same", teraTypeId})
    let newSameMapList = {...effectMap}
    newSameMapList["list"] = sameList
    newSameMapList["dispName"] = effectName.same
  return (
    <>
      <DispLabel>
        <span>相性</span>
      </DispLabel>
      <EffectBoxContainerStyled>
        <EffectBox key={effectName.double} effectMapList={newEffectMapList} />
        <EffectBox key={effectName.same} effectMapList={newSameMapList}/>
        <EffectBox key={effectName.half} effectMapList={newHarlMapList}/>
        <EffectBox key={effectName.no} effectMapList={newNoMapList}/>
      </EffectBoxContainerStyled>
    </>
    
  )
}

export default PokeEffectContainer