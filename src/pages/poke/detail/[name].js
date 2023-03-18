import React from 'react'
import styled from 'styled-components'
import EffectInfo from '../../../components/EffectInfo/EffectInfo'
import PokeInfo from '../../../components/PokeInfo/PokeInfo'
import { StyledContainer } from '../../../styles/styles'
import { usePokeInfo, usePokeInfoDispatch, PokeInfoProvider } from '../../../utils/context/PokeInfoContext'
import { TeraTypeProvider } from '../../../utils/context/TeraTypeContext'
import getAllPokeId from '../../../utils/callAPI/getAllPokeId'

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

const Name = ({ pokeID }) => {

  return (
    <>
      <DetailContainer>
        <PokeInfoProvider>
          <TeraTypeProvider>
            <PokeInfo pokeID={pokeID} />
            <EffectInfo></EffectInfo>
          </TeraTypeProvider>
        </PokeInfoProvider>
        
        {/* <div> test</div>
        <div>{message}</div> */}

      </DetailContainer>
    </>
    
  )
}

export default Name

// getServerSidePropsについて
export async function getServerSideProps(context) {
  const { cookie } = context.req.headers;
  const query = context.query;

  console.log("getServerSideProps called")
  console.log(cookie)
  console.log(query)
  return {
    // redirect: {
    //   destination: '/',
    //   permanent: false
    // },
    props: { pokeID: query.name }
  }
}

// export async function getStaticPaths() {
//   const result = await axios.get(ENDPOINT).then((res) => res.data);

//   if (!result) return;

//   const paths = result.map((article) => ({
//     params: { detail: `${article.id}` },
//   }));

//   return { paths, fallback: true };
// }

// // getStaticProps
// export async function getStaticProps() {
//   console.log("getStaticProps called")
//   const result = await getAllPokeId.getPokeAllId();
//   return { props: { allPokeInfo: result } };
// }
