import React from 'react'
import { usePokeInfo } from '../../../utils/context/PokeInfoContext'
import Image from 'next/image'
import styled from 'styled-components'
import { PokeInfoContainer } from '../PokeInfoStyle'

const PokeInfoNameContainer = styled(PokeInfoContainer)`
  /* margin-top: 10px; */
  /* top: 100px; */
  width: 95%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`

const PokeNameStyled = styled.div`
  /* border: solid; */
  width: 50%;  
  margin: auto;
  font-size: 20px;
`

const myLoader = ({ src, width, quality }) => {
  return src
}

// component
const PokeName = ({ pokeID }) => {
  console.log("poke name")
  console.log(pokeID)

  // context使用
  const pokeInfo = usePokeInfo()

  console.log(pokeInfo)

  // return jsx
  return (
    <>
      <PokeInfoNameContainer>
        <Image loader={myLoader} src={pokeInfo.icon_src} alt={pokeInfo.icon_src} width="60" height="60"></Image>
        {/* <Image src={pokeInfo.icon_src} alt="me" width="44" height="44" /> */}
        <PokeNameStyled>{pokeInfo.name}</PokeNameStyled>

      </PokeInfoNameContainer>

    </>
  )
}

export default PokeName