import React from 'react'
import { usePokeInfo } from '../../../../utils/context/PokeInfoContext'
import styled from 'styled-components'
import PokeType from './PokeType/PokeType'

const TypeContainerStyle = styled.div`
  display: flex;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
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