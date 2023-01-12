import React from 'react'
import { usePokeInfo } from '../../../utils/context/PokeInfoContext'
import { useTeraType } from '../../../utils/context/TeraTypeContext'
import { getTypeEffectMapList, getPokeEffectMapList } from '../../../utils/data/TypeInfo'
import EffectBox from './EffectBox/EffectBox'
import { EffectBoxContainerStyled } from "./PokeEffectContainerStyle"
import { DispLabel } from '../../Common/Label'
import { useRankingPokeInfo } from '../../../utils/context/RankingPokeInfoContext'
import { useSelectDispEffect } from '../../../utils/context/SelectDispEffect'

const PokeEffectContainer = () => {
  // typeId取得
  const pokeInfo = usePokeInfo();
  const typelist = pokeInfo["typeId"]
  const teraTypeId = useTeraType();
  const rankingPokeInfo = useRankingPokeInfo();
  const selectDispEffect = useSelectDispEffect()

  console.log("pokeinfo effetinfo")
  console.log(typelist)
  console.log(typeof(pokeInfo.typeId))

  // 表示タブの状態取得（context）
  // TODO：ポケモン相性の場合、ポケモンのID及び、タイプIDを取得する（防御側タイプ）

  const attackIdList = [...pokeInfo.typeId, teraTypeId]

  if(pokeInfo.typeId.length === 0){
    return <>ロード中</>
  }

  // 相性関係作成
  // debugger
  let quadrupleList
  let doubleList
  let sameList
  let halfList
  let quarterList
  let noList

  if(selectDispEffect === 0){
    doubleList = getTypeEffectMapList({effect: "double", attackIdList: attackIdList, teraTypeId})  
    halfList = getTypeEffectMapList({effect: "half", attackIdList: attackIdList, teraTypeId})  
    noList = getTypeEffectMapList({effect: "no", attackIdList: attackIdList, teraTypeId})  
    sameList = getTypeEffectMapList({effect: "same", attackIdList: attackIdList, teraTypeId})
  } else {
    ({quadrupleList, doubleList, sameList, halfList, quarterList, noList} = getPokeEffectMapList({deffencePokeInfoList: rankingPokeInfo, attackIdList: attackIdList, teraTypeId: teraTypeId}))

  }

  
  return (
    <>
      <DispLabel>
        <span>相性</span>
      </DispLabel>
      <EffectBoxContainerStyled>
        <EffectBox key={"double"} effectMapList={doubleList} />
        <EffectBox key={"half"} effectMapList={halfList}/>
        <EffectBox key={"no"} effectMapList={noList}/>
        <EffectBox key={"same"} effectMapList={sameList}/>
      </EffectBoxContainerStyled>
    </>
    
  )
}

export default PokeEffectContainer