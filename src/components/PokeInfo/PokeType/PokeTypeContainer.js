import React from 'react'
import { usePokeInfo } from '../../../utils/context/PokeInfoContext'
import PokeType from './TypeContainer.js/PokeType/PokeType'
import TeraType from './TeraType/TeraType'
import styled from 'styled-components'
import { DispLabel } from '../../Common/Label'
import TypeContainer from './TypeContainer.js/TypeContainer'

const PokeTypeContainerStyle = styled.div`
  /* border: solid; */
  border-radius: 5px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;


`

const TeraTypeValue = styled(DispLabel)`
  margin-top: 2rem;
`

const PokeTypeContainer = () => {
  // context呼び出し
  const pokeInfo = usePokeInfo()

  return (
    <PokeTypeContainerStyle>
      <DispLabel>
        <span>タイプ</span>
      </DispLabel>
      <TypeContainer />
      {/* {pokeInfo["typeId"].map((typeId) => {
            return (<PokeType key={typeId} typeId={typeId} />)
          })
        } */}
      <TeraTypeValue><span>テラタイプ</span></TeraTypeValue>
      <TeraType></TeraType>
    </PokeTypeContainerStyle>
  )
}

export default PokeTypeContainer