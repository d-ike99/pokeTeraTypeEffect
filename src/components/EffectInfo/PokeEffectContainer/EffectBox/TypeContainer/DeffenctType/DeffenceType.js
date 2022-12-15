import React from 'react'
import Image from 'next/image'
import { DefenceTypeStyle, TypeName } from './DeffenceTypeStyle'


const DeffenceType = ({img_path, type}) => {
  return (
    <DefenceTypeStyle>
      <Image style={{margin: "auto"}} src={img_path} alt="me" width="23" height="23" />
      <TypeName>{type}</TypeName>
    </DefenceTypeStyle>
  )
}

export default DeffenceType