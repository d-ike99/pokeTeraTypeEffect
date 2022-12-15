import React from 'react'
import { TypeContainerStyle, TypeBox } from './TypeContainerStyle'
import { getTypeInfo, typeJpName } from '../../../../../utils/data/TypeInfo'
import DeffenceType from './DeffenctType/DeffenceType'
import AttackType from './AttackType/AttackType'
import styled, { createGlobalStyle } from 'styled-components'
import { useTypeFilter } from '../../../../../utils/context/Filter/TypeFilterContext'

const EffectLabelBox = styled.div`
  /* border: solid; */
  display: flex;
  justify-content: space-between;

  margin-top: 0.3rem;
  margin-bottom: 0.6rem;
  /* padding-right: 0.3rem;
  padding-left: 0.1rem; */
  
  /* padding: auto; */
`

const EffectRightLabelName = styled.div`
  font-size: x-small;
  margin-right: 0.5rem;
`

const EffectLeftLabelName = styled(EffectRightLabelName)`
  /* font-size: x-small; */
  margin-right: auto;
  margin-left: 0.6rem;
  /* color: lightblue */
`

const TypeContainer = ({effectMapList}) => {
  console.log("TypeContainer")
  console.log(effectMapList)
  
  // filter取得
  const typeFilter = useTypeFilter()
  const dispEffectMapList = effectMapList.list.filter((oneType) => {
    return !typeFilter.includes(oneType.deffenceId)
  })
  console.log(dispEffectMapList)


  return (
    <TypeContainerStyle>
      <EffectLabelBox>
        <EffectLeftLabelName>防御タイプ</EffectLeftLabelName>
        <EffectRightLabelName>攻撃タイプ</EffectRightLabelName>
      </EffectLabelBox>
      {dispEffectMapList.map((oneType) => {
          const type = typeJpName(oneType.deffenceId)
          const typeInfo = getTypeInfo(oneType.deffenceId)
          return (
            <TypeBox key={oneType.id}>
              <DeffenceType img_path={typeInfo.icon_path} type={type}/>
              <AttackType attackIdList={oneType.attackIdList}/>
            </TypeBox>
          )})}
    </TypeContainerStyle>
  )
}

export default TypeContainer