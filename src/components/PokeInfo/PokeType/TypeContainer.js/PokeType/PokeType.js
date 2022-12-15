import React from 'react'
import Image from 'next/image'
import { getTypeInfo, typeJpName } from '../../../../../utils/data/TypeInfo'
import styled from 'styled-components'

const PokeTypeStyle = styled.div`
  margin-top: 20px;
  width: 100%; /* pokeInfoに対する幅 */
  display: flex;
  
  justify-content: space-around;
  /* border: solid 1px gray; */

  // padding, margin
  margin-top: 0;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0rem;
  padding-right: 0rem;

`

const PokeType = ({typeId}) => {
  // タイプに応じたアイコンを表示する
  const type = typeJpName(typeId)

  // debugger
  const typeInfo = getTypeInfo(typeId);
  console.log("src")
  console.log(typeInfo)

  return (
    <PokeTypeStyle color={typeInfo.color}>
      <Image src={typeInfo.image_path} alt="me" width="100" height="25" />
    </PokeTypeStyle>
  )
}

export default PokeType