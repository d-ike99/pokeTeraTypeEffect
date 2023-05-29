import React from 'react'
import styled from 'styled-components'
import { PokeInfoLabelContainer } from '../../PokeInfoStyle'

// style定義
const PokeStatStyle = styled(PokeInfoLabelContainer)`
  /* border: solid; */
  display: flex;
  color: gray;
`
const StatNameStyle = styled.div`
  font-size: smaller;
  width: 10%;
`
const GraphStyle = styled.div`
  width: 100%;
  border: solid;
  text-align: left;
  background: linear-gradient(to right, whitesmoke 0%, whitesmoke ${({value}) => value.main / 200 * 100}%, lightblue ${({value}) => value.main / 200 * 100}%,  lightblue 100%);

  margin-left: 0.5rem;
  font-size: x-small;

  padding-top: 0;
  padding-bottom: 0;
  padding-left: 0.5rem;
`

const PokeStat = ({statName, value}) => {
  return (
    <PokeStatStyle>
      <StatNameStyle>{statName}</StatNameStyle>
      <GraphStyle value={{main: value}}>{value}</GraphStyle>
    </PokeStatStyle>
  )
}

export default PokeStat