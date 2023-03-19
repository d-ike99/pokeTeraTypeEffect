import React from 'react'
import styled from 'styled-components'
import EffectInfo from '../../components/EffectInfo/EffectInfo'
import PokeInfo from '../../components/PokeInfo/PokeInfo'
import { usePokeInfo, usePokeInfoDispatch, PokeInfoProvider } from '../../utils/context/PokeInfoContext'
import { TeraTypeProvider } from '../../utils/context/TeraTypeContext'
import getAllPokeId from '../../utils/callAPI/getAllPokeId'
import { useAllPokeIdDispatch } from '../../utils/context/AllPokeIdContext'
import { RankingPokeInfoProvider } from '../../utils/context/RankingPokeInfoContext'

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

  // 横幅600px"以上"で適応
  @media (min-width: 600px) {
    display: flex;
    /* border: solid; */
    margin-right: 0;
    margin-left: 0;

    // 全体の横幅に余裕を持たせる
    /* width: 100vw; */
  }
  // 横幅1000px"以上"で適応
  @media (min-width: 1000px) {
    display: flex;
    /* border: solid; */
    margin-right: auto;
    margin-left: auto;

    // 全体の横幅に余裕を持たせる
    width: 90vw;
  }
`

const Name = ({ allPokeId }) => {
  // stateにIDを保持
  const setAllPokeIdDispatch = useAllPokeIdDispatch()
  setAllPokeIdDispatch(allPokeId)

  // components
  return (
    <>
      <DetailContainer>
        <PokeInfoProvider>
          <TeraTypeProvider>
            <RankingPokeInfoProvider>
              <PokeInfo />
              <EffectInfo></EffectInfo>
            </RankingPokeInfoProvider>
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
