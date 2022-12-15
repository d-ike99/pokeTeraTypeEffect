import styled, { keyframes } from "styled-components"

// pokeInfoの下に存在する（タイプの画像、タイプ名称を梱包している）

const PokeTypeStyle = styled.div`
  margin-top: 20px;
  width: 90%; /* pokeInfoに対する幅 */
  display: flex;
  
  justify-content: space-around;
  /* border: solid 1px gray; */
  border-radius: 5px;

  // padding, margin
  margin-top: 0;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0rem;
  padding-right: 0rem;

  background-color: ${props => (props.color ? props.color  : "white")};;
`





const PokeTypeName = styled.div`
  text-align: center;

  margin: 0;
  padding: 0;
  margin-top: auto;
  margin-bottom: auto;

  width: ${props => (props.widhMax ? "100%" : "70%")};

  font-size: auto;
  background-color: none;
  font-weight: 200;

  color: ${props => (props.color ? "black" : "white")};
`

const TeraTypeName = styled.select`
  border: none;
  width: 60%;
  font-size: 1.2rem;


  padding-top: 0.1rem;
  padding-bottom: 0.1em;
  margin-left: 0.5em;
  /* animation: ${fadeIn} 3s ease-in-out infinite; */

`


export {PokeTypeStyle, PokeTypeName, TeraTypeName, SelectBox, SelectPokeTypeName}