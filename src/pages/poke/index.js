import React from 'react'
import styled from 'styled-components'
import EffectInfo from '../../components/EffectInfo/EffectInfo'
import PokeInfo from '../../components/PokeInfo/PokeInfo'
import { usePokeInfo, usePokeInfoDispatch, PokeInfoProvider } from '../../utils/context/PokeInfoContext'
import { TeraTypeProvider } from '../../utils/context/TeraTypeContext'
import getAllPokeId from '../../utils/callAPI/getAllPokeId'
import { useAllPokeIdDispatch } from '../../utils/context/AllPokeIdContext'

const DetailContainer = styled.div`
  /* border-top: solid black; */
  /* border: red; */
  width: 100vw;
  /* height: calc(100vh - 60px); */
  /* display: flex; */

  // margin, padding
  margin-top: 60px;
  margin-right: 0;
  margin-left: 0;
  padding-top: 1rem;

  @media (min-width: 600px) {
    display: flex;
    /* border: solid; */
    margin-right: auto;
    margin-left: auto;
    width: 90vw;
  }
`

const Name = ({ allPokeId }) => {
  // デフォルトID
  const pokeId = 635

  // stateにIDを保持
  const setAllPokeIdDispatch = useAllPokeIdDispatch()
  setAllPokeIdDispatch(allPokeId)

  // components
  return (
    <>
      <DetailContainer>
        <PokeInfoProvider>
          <TeraTypeProvider>
            <PokeInfo pokeID={pokeId} />
            <EffectInfo></EffectInfo>
          </TeraTypeProvider>
        </PokeInfoProvider>
      </DetailContainer>
    </>
    
  )
}

export default Name

// getStaticProps
export async function getStaticProps() {
  console.log("getStaticProps called")
  const result = await getAllPokeId.getPokeAllId();
  return { props: { allPokeId: result } };
}
