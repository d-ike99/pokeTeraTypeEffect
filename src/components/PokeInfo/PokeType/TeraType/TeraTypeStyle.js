import styled from "styled-components";

const TeraTypeContainer = styled.div`
  /* border: solid blue; */
  margin-top: 0;
  width: 50%; /* pokeInfoに対する幅 */
  border-radius: 5px;

  // padding, margin
  margin-left: 0.5rem;
  margin-right: auto;
  padding: 0rem;

  ::after{
    position: relative;
    background-image: url(${props => (props.src)});
    top: 50px
  }

`

const SelectBox = styled.div`
  /* border: solid; */
  margin: 0;
  padding: 0;

  background-color: none;

  /* border-color: black; */
  box-shadow:0px 0px 10px ${props => (props.color ? props.color  : "white")};

/* background-color: ${props => (props.color ? props.color  : "white")};; */

`

const SelectPokeTypeName = styled.div`
  text-align: center;

  margin: 0;
  padding: 0;
  margin-top: auto;
  margin-bottom: auto;

  width: ${props => (props.widhMax ? "100%" : "70%")};

  /* color: black; */
  font-size: auto;
  font-weight: 200;
`

export { TeraTypeContainer, SelectPokeTypeName, SelectBox }