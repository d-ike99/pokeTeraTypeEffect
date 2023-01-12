import React from 'react'
import DispTypePoke from './DispSelect/DispTypePoke'
import { EffectInfoStyled } from './EffectInfoStyle'
import PokeEffectContainer from "./PokeEffectContainer/PokeEffectContainer"
import EffectFilter from "./EffectFilter/EffectFilter"
import { TypeFilterProvider } from '../../utils/context/Filter/TypeFilterContext'
import { SelectDispEffectProvider } from '../../utils/context/SelectDispEffect'

// component
const EffectInfo = () => {
  return (
    <EffectInfoStyled>
      <SelectDispEffectProvider>
        <DispTypePoke />
        <TypeFilterProvider>
          <EffectFilter />
          <PokeEffectContainer />
        </TypeFilterProvider>
      </SelectDispEffectProvider>
    </EffectInfoStyled>
  )
}

export default EffectInfo