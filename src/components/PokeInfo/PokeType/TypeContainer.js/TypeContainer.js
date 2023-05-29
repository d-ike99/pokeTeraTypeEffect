import React from 'react'
import { usePokeInfo } from '../../../../utils/context/PokeInfoContext'
import styled from 'styled-components'
import PokeType from './PokeType/PokeType'
import { PokeInfoLabelContainer } from '../../PokeInfoStyle'

// style定義
const TypeContainerStyle = styled(PokeInfoLabelContainer)`
  display: flex;
`

const TypeContainer = () => {
  // context呼び出し
  const pokeInfo = usePokeInfo()

  return (
    <TypeContainerStyle>
      {pokeInfo["typeId"].map((typeId) => {
            return (<PokeType key={typeId} typeId={typeId} />)
          })
        }
    </TypeContainerStyle>
  )
}

export default TypeContainer