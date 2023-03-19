import styled from "styled-components";

const EffectInfoStyled = styled.div`
  border: solid red;
  /* margin-left: 3rem; */
  
  /* height: 90vh; */
  width: 100vw;

  /* width: auto; */
  // margin
  /* margin-top: 0rem;
  margin-bottom: 0rem; */

  // 横幅600px以上で適応
  @media (min-width: 600px) {
    width: 70%;
    margin-left: 0rem;
    margin-left: 0rem;
    
  }
  @media (min-width: 1000px) {
    width: 75%;
    /* margin-right: 0; */
    margin-left: 1rem;
  }
`


export {EffectInfoStyled}