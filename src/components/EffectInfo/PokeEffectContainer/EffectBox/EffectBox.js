import React, { useRef, useEffect } from 'react'
import { EffectBoxStyle } from './EffectBoxStyle'
import TypeContainer from './TypeContainer/TypeContainer'
import EffectLabel from './EffectLabel/EffectLabel'

const EffectBox = ({ effectMapList }) => {
  //todo
  console.log("effectbox called")
  console.log(effectMapList)

  return (      
    <EffectBoxStyle>
      <EffectLabel label={effectMapList.dispName}/>
      <TypeContainer effectMapList={effectMapList} />
    </EffectBoxStyle>


  )
}

export default EffectBox