import React from 'react'
import { usePokeInfo } from '../../../utils/context/PokeInfoContext'
import { useTeraType } from '../../../utils/context/TeraTypeContext'
import { getTypeEffectMapList, getPokeEffectMapList } from '../../../utils/data/TypeInfo'
import EffectBox from './EffectBox/EffectBox'
import { EffectBoxContainerStyled } from "./PokeEffectContainerStyle"
import { DispLabel } from '../../Common/Label'
import { useRankingPokeInfo } from '../../../utils/context/RankingPokeInfoContext'


const PokeEffectContainer = () => {
  // typeId取得
  const pokeInfo = usePokeInfo();
  const typelist = pokeInfo["typeId"]
  const teraTypeId = useTeraType();
  const rankingPokeInfo = useRankingPokeInfo();

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
  const newEffectMapList = getTypeEffectMapList({effect: "double", attackIdList: attackIdList, teraTypeId})  
  const newHarlMapList = getTypeEffectMapList({effect: "half", attackIdList: attackIdList, teraTypeId})  
  const newNoMapList = getTypeEffectMapList({effect: "no", attackIdList: attackIdList, teraTypeId})  
  const newSameMapList = getTypeEffectMapList({effect: "same", attackIdList: attackIdList, teraTypeId})

  const test = getPokeEffectMapList({deffencePokeInfoList: rankingPokeInfo, attackIdList: attackIdList, teraTypeId: teraTypeId})

  debugger

  return (
    <>
      <DispLabel>
        <span>相性</span>
      </DispLabel>
      <EffectBoxContainerStyled>
        <EffectBox key={"double"} effectMapList={newEffectMapList} />
        <EffectBox key={"half"} effectMapList={newSameMapList}/>
        <EffectBox key={"no"} effectMapList={newHarlMapList}/>
        <EffectBox key={"same"} effectMapList={newNoMapList}/>
      </EffectBoxContainerStyled>
    </>
    
  )
}

export default PokeEffectContainer