import React from 'react'
import { usePokeInfo } from '../../../utils/context/PokeInfoContext'
import Image from 'next/image'
import styled from 'styled-components'

const PokeInfoStyled = styled.div`
  margin-top: 10px;
  /* border: solid; */
  top: 100px;
  width: 95%;
  display: flex;
  justify-content: space-between;

  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: auto;
`

const PokeNameStyled = styled.div`
  /* margin-top: 80px; */
  /* border: solid; */
  width: 50%;
  
  text-align: left;
  margin: auto;
  margin-left: 2rem;
  font-size: 20px;
  padding-top: 0.1em;
  padding-bottom: 0.1em;
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
      <PokeInfoStyled>
        <Image loader={myLoader} src={pokeInfo.icon_src} alt={pokeInfo.icon_src} width="60" height="60"></Image>
        {/* <Image src={pokeInfo.icon_src} alt="me" width="44" height="44" /> */}
        <PokeNameStyled>{pokeInfo.name}</PokeNameStyled>

      </PokeInfoStyled>

    </>
  )
}

export default PokeName