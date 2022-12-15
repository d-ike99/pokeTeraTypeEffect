import styled from "styled-components";

const AttackTypeContainer = styled.div`
  display: flex;
  margin-right: 0.5rem;
  /* border: solid */
`

const AttackTypeStyle = styled.div`
  height: 30px;
  /* border-radius: 15px; */
  /* box-shadow: 0px 0px 10px ; */
  /* border: solid; */
  /* margin-right: 0.1rem; */
  filter: 
    drop-shadow(0 0 0.15rem ${({ color }) => color ? color: "none"})
    drop-shadow(0 0 0.15rem ${({ color }) => color ? color: "none"})
    drop-shadow(0 0 0.15rem ${({ color }) => color ? color: "none"})
  ;
`

export { AttackTypeContainer, AttackTypeStyle }