import styled from "styled-components";

const PokeInfoStyled = styled.div`
  border: solid 1px red;
  /* width: 100vw; */
  /* width: 25%; */

  // margin, padding
  margin-top: 0rem; 
  margin-bottom: 0rem;

  // 横幅600px"以上"で適応
  @media (min-width: 600px) {
    width: 30%;
    margin-left: 0rem;
    margin-right: 0rem;
  }
  @media (min-width: 1000px) {
    width: 25%;
    margin-left: 0rem;
    margin-right: 0rem;
    border-right: solid 2px whitesmoke;

  }
`
const PokeInfoContainer = styled.div`
  // test
  /* border: solid 1px; */

  width: 80%;
  margin-top: 1rem;
  margin-bottom: 0rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0rem 1rem;
`
const PokeInfoLabelContainer = styled.div`
  margin: 0.1rem 0.5rem;
  /* border: solid 1px */
`

export {PokeInfoStyled, PokeInfoContainer, PokeInfoLabelContainer}