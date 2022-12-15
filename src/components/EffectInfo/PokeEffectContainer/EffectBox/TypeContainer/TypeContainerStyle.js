import styled from "styled-components"

const TypeContainerStyle = styled.div`
  /* overflow-y: scroll; */
  /* border: solid; */
  border-radius: 5px;
  margin: 0;
  margin-bottom: 0;
  /* border: solid red; */

  padding-left: 0.3rem;
  padding-right: 0.5rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;

  height: calc(100% - 5vh);

  background-color: white;

  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0 0 1px rgb(10 10 10 / 2%);
`

const TypeBox = styled.div`
  /* border: solid; */
  display: flex;
  justify-content: space-between;
  border-top: solid 1px gray;
  /* height: 8vh; */

  // margin, padding
  margin: 0;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  padding-top: 0.2rem

  /* height: 90%; */
`


export { TypeContainerStyle, TypeBox }