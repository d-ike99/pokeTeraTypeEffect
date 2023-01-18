import React from 'react'
import DispTypePoke from './DispSelect/DispTypePoke'
import { EffectInfoStyled } from './EffectInfoStyle'
import PokeEffectContainer from "./PokeEffectContainer/PokeEffectContainer"
import EffectFilter from "./EffectFilter/EffectFilter"
import { TypeFilterProvider } from '../../utils/context/Filter/TypeFilterContext'
import { SelectDispEffectProvider } from '../../utils/context/SelectDispEffect'
import { EffectFilterProvider } from '../../utils/context/Filter/EffectFilterContext'

// component
const EffectInfo = () => {
  return (
    <EffectInfoStyled>
      <SelectDispEffectProvider>
        <DispTypePoke />
        <TypeFilterProvider>
          <EffectFilterProvider>
            <EffectFilter />
            <PokeEffectContainer />
          </EffectFilterProvider>
        </TypeFilterProvider>
      </SelectDispEffectProvider>
    </EffectInfoStyled>
  )
}

export default EffectInfo