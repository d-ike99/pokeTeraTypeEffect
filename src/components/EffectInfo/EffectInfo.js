import React from 'react'
import DispTypePoke from './DispSelect/DispTypePoke'
import { EffectInfoStyled } from './EffectInfoStyle'
import PokeEffectContainer from "./PokeEffectContainer/PokeEffectContainer"
import EffectFilter from "./EffectFilter/EffectFilter"
import { TypeFilterProvider } from '../../utils/context/Filter/TypeFilterContext'

// component
const EffectInfo = () => {
  return (
    <EffectInfoStyled>
      <DispTypePoke />
      <TypeFilterProvider>
        <EffectFilter />
        <PokeEffectContainer />
      </TypeFilterProvider>
    </EffectInfoStyled>
  )
}

export default EffectInfo