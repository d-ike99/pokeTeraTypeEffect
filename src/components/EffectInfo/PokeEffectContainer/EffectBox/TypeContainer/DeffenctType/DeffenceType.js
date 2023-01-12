import React from 'react'
import Image from 'next/image'
import { DefenceTypeStyle, TypeName } from './DeffenceTypeStyle'
import { typeJpName, getTypeInfo } from '../../../../../../utils/data/TypeInfo'

const DeffenceType = ({deffenceId}) => {
  const type = typeJpName(deffenceId)
  const typeInfo = getTypeInfo(deffenceId)

  return (
    <DefenceTypeStyle>
      <Image style={{margin: "auto"}} src={typeInfo.icon_path} alt="me" width="23" height="23" />
      <TypeName>{type}</TypeName>
    </DefenceTypeStyle>
  )
}

export default DeffenceType