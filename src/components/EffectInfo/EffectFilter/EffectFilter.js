import React from 'react'
import styled from 'styled-components'
import TypeFilter from './TypeFilter/TypeFilter'
import { DispLabel } from '../../Common/Label'

const EffectFilterStyled = styled.div`
  /* border: solid; */
  width: 100%;
  /* height: 10vh; */

  display: block;
  /* justify-content: center; */
  // margin, padding

  padding-left: auto;
  padding-right: auto;
  margin-top: 3rem;
  margin-bottom: 1rem;
`

const FilterLabel = styled.div`
  /* border: solid; */

  font-size: small;

  // margin, padding
  margin: 0;
  padding-left: 0rem;
  padding-right: auto;
  text-align: left;


`

const EffectFilter = () => {
  return (
    <EffectFilterStyled>
      <DispLabel>
        <span>表示制限</span>
      </DispLabel>
      <TypeFilter />
    </EffectFilterStyled>
  )
}

export default EffectFilter