import React from 'react'
import { getTypeInfo, typeJpName } from '../../../../../../utils/data/TypeInfo'
import Image from 'next/image'
import { AttackTypeContainer, AttackTypeStyle } from './AttackTypeStyle'
import { useTeraType } from '../../../../../../utils/context/TeraTypeContext'


const AttackType = ({ attackIdList }) => {
  // teraType取得
  const teraTypeId = useTeraType();

  // テラスタルタイプによる重複排除
  const dispAttackList = attackIdList.filter((value, index, self) => self.indexOf(value) === index);
  
  // jsx
  return (
    <AttackTypeContainer>
      {
        dispAttackList.map((typeId) => {
          const typeInfo = getTypeInfo(typeId)
          let color = false;

          if(typeId == teraTypeId){ color = typeInfo.color }
          return (
            <AttackTypeStyle key={typeId} color={color}>
              <Image src={typeInfo.icon_path} alt="me" width="23" height="23" />
              {/* <Image key={typeId} src={typeInfo.icon_path} layout='fill' objectFit='contain'  /> */}

            </AttackTypeStyle>
          )
        })
      }
    </AttackTypeContainer>
  )
}

export default AttackType