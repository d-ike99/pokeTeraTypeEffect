import React from 'react'
import { usePokeInfo } from '../../../utils/context/PokeInfoContext'
import { useTeraType } from '../../../utils/context/TeraTypeContext'
import { getTypeEffectMapList, getPokeEffectMapList } from '../../../utils/data/TypeInfo'
import EffectBox from './EffectBox/EffectBox'
import { EffectBoxContainerStyled } from "./PokeEffectContainerStyle"
import { DispLabel } from '../../Common/Label'
import { useRankingPokeInfo } from '../../../utils/context/RankingPokeInfoContext'
import { useSelectDispEffect } from '../../../utils/context/SelectDispEffect'
import { useState, useEffect } from 'react'

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
} 

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

  const attackIdList = [...pokeInfo.typeId, teraTypeId]

  if(pokeInfo.typeId.length === 0){
    return <>ロード中</>
  }

  // 相性関係作成
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

  // 画面サイズ取得
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  console.log("size")
  console.log(windowDimensions)

  // 前提：相性の表示制限は、3つまで可能
  // - 横幅が600px以下の場合
  //   - 表示数が3-4：一段に表示しきる
  //   - 表示数が5-6：二段
  // - 横幅が600px-1000pxの場合、
  //   - 表示数が3：一段に表示しきる
  //   - 表示数が4-6：二段に表示する
  // - 横幅が600px-1000pxの場合、
  //   - 表示数が3：一段に表示しきる
  //   - 表示数が4-6：二段に表示する
  // - 横幅が1000px-1300pxの場合、
  //   - 表示数が3-4：一段に表示しきる
  //   - 表示数が5-6：二段に表示する
  // - 横幅が1300px-の場合、
  //   - 表示数が3-6：一段に表示しきる

  
  return (
    <>
      <DispLabel>
        <span>相性</span>
        <div>
          {windowDimensions.width}
        </div>
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