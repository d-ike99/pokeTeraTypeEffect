import styled from "styled-components";

const PokeInfoStyled = styled.div`
  /* border: solid 5px; */
  width: 100vw;
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

export {PokeInfoStyled}