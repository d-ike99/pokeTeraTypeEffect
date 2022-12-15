import React from 'react'
import { EffectLabelStyle, EffectName } from './EffectLabelStyle'


const EffectLabel = ({ label }) => {
  return (
    <EffectLabelStyle>
      <EffectName>{label}</EffectName>
    </EffectLabelStyle>
  )
}

export default EffectLabel