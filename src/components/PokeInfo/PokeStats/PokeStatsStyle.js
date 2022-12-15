import styled from 'styled-components'

const PokeStatsStyled = styled.div`
  /* border: solid 1px; */
  text-align: justify;
  /* font-size: auto; */
  display: block;
  justify-content: center;

  /* justify-content: space-between; */

  /* background-color: #EEEEEE; */

  width: 80%;

  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;

  padding-left: 1rem;
  padding-right: 1rem;
`

const TypeValue = styled.div`
  /* margin-top: 2rem; */
  margin-bottom: 0.2rem;

  font-size: small;
  text-align: left;
`

const Testdiv = styled.div`
  font-size: auto;
  white-space: nowrap;
  /* border: solid; */

  font-size: 0.8rem;

  padding-top: auto;
  padding-bottom: auto;

  color: gray;
`

export { PokeStatsStyled, Testdiv, TypeValue }