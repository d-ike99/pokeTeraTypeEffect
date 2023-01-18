import React from 'react'
import styled from 'styled-components'
import TypeFilter from './TypeFilter/TypeFilter'
import { DispLabel } from '../../Common/Label'
import { typeInfo } from '../../../utils/data/TypeInfo';
import { useTypeFilterDispatch } from '../../../utils/context/Filter/TypeFilterContext';
import { useEffectFilterDispatch } from '../../../utils/context/Filter/EffectFilterContext';

const EffectFilterStyled = styled.div`
  /* border: solid; */
  width: 100%;
  /* height: 10vh; */

  display: block;
  /* justify-content: center; */
  // margin, padding

  padding-left: auto;
  padding-right: auto;
  margin-top: 3rem;
  margin-bottom: 1rem;
`

const FilterLabel = styled.div`
  /* border: solid; */

  font-size: small;

  // margin, padding
  margin: 0;
  padding-left: 0rem;
  padding-right: auto;
  text-align: left;


`

const effectIdList = [
  {
    id: 0,
    name: "×4 抜群"
  },
  {
    id: 1,
    name: "×2 抜群"
  },
  {
    id: 2,
    name: "×1 等倍"
  },
  {
    id: 3,
    name: "×1/2 いまひとつ"
  },
  {
    id: 4,
    name: "×1/4 いまひとつ"
  },
  {
    id: 5,
    name: "×0 効果なし"
  }
]

const EffectFilter = () => {
  // オプション設定
  const getTypeList = typeInfo.map((oneType) => {
    return {
      value: oneType.name.jp,
      label: oneType.name.jp,
      id: oneType.id,
      color: oneType.color,
      wordColor: "white"
    }
  })
  // placeholder
  const typePlaceHolder = '非表示タイプ（防御側）'
  // dispatch
  const typeFilterDispatch = useTypeFilterDispatch()

  // オプション設定
  const effectOption = effectIdList.map((data) => {
    // debugger
    return {
      value: data.name,
      label: data.name,
      id: data.id,
      color: "#e6e6fa",
      wordColor: "black"
    }
  })
  // placeholder
  const effectPlaceHolder = '相性'
  // dispatch
  const effectFilterDispatch = useEffectFilterDispatch()

  return (
    <EffectFilterStyled>
      <DispLabel>
        <span>表示制限</span>
      </DispLabel>
      <TypeFilter 
        dispList={getTypeList}
        placeHolder={typePlaceHolder}
        dispatch={typeFilterDispatch}/>
      <TypeFilter 
        dispList={effectOption}
        placeHolder={effectPlaceHolder}
        dispatch={effectFilterDispatch}/>
    </EffectFilterStyled>
  )
}

export default EffectFilter