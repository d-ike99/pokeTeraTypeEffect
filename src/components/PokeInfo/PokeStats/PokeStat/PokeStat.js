import React from 'react'
import styled from 'styled-components'

const PokeStatStyle = styled.div`
  /* border: solid; */
  display: flex;

  margin-top: 0.1rem;
  margin-bottom: 0.1rem;

  color: gray;
`

const TestStyle = styled.div`
  font-size: smaller;
  /* border: solid; */
  width: 10%;
  /* padding-right: 1rem; */


  /* padding-top: auto;
  padding-bottom: auto; */
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
      <TestStyle>{statName}</TestStyle>
      <GraphStyle value={{main: value}}>{value}</GraphStyle>
    </PokeStatStyle>
  )
}

export default PokeStat