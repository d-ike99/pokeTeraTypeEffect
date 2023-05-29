import React from 'react'
import { usePokeInfo } from '../../../utils/context/PokeInfoContext'
import TeraType from './TeraType/TeraType'
import styled from 'styled-components'
import { DispLabel } from '../../Common/Label'
import TypeContainer from './TypeContainer.js/TypeContainer'
import { PokeInfoContainer } from '../PokeInfoStyle'

const TeraTypeValue = styled(DispLabel)`
  margin-top: 2rem;
`

const PokeTypeContainer = () => {
  // context呼び出し
  const pokeInfo = usePokeInfo()

  return (
    <PokeInfoContainer>
      <DispLabel>
        <span>タイプ</span>
      </DispLabel>
      <TypeContainer />
      <TeraTypeValue><span>テラスタイプ</span></TeraTypeValue>
      <TeraType></TeraType>
    </PokeInfoContainer>
  )
}

export default PokeTypeContainer