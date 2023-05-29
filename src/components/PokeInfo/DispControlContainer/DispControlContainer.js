import React from 'react'
import styled from 'styled-components'
import { DispLabel } from '../../Common/Label'
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { PokeInfoContainer, PokeInfoLabelContainer } from '../PokeInfoStyle'

const DispControlContainer = () => {
  // context呼び出し
  const [value, setValue] = React.useState('1')

  return (
    <PokeInfoContainer>
      <DispLabel><span>表示選択</span></DispLabel>
      <PokeInfoLabelContainer>
        <RadioGroup onChange={setValue} value={value}>
          <Stack>
            <Radio value='1'>攻撃相性</Radio>
            <Radio value='2'>防御相性</Radio>
          </Stack>
        </RadioGroup>
      </PokeInfoLabelContainer>
      
    </PokeInfoContainer>
  )
}

export default DispControlContainer