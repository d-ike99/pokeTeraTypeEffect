import React from 'react'
import {DispTypePokeStyled, ButtonStyled} from "./DispSelectStyle"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys)

const colorfulVariant = definePartsStyle((props) => {
  const { colorScheme: c } = props // extract colorScheme from component props

  return {
    tab: {
      border: '2px solid',
      borderColor: 'transparent',
      // use colorScheme to change background color with dark and light mode options
      bg: mode(`${c}.300`, `${c}.600`)(props),
      borderTopRadius: 'lg',
      borderBottom: 'none',
      _selected: {
        bg: mode('#fff', 'gray.800')(props),
        color: mode(`${c}.500`, `${c}.300`)(props),
        borderColor: 'red',
        borderBottom: 'none',
        mb: '-2px',
      },
    },
  }
})

const variants = {
  colorful: colorfulVariant,
}

// export the component theme
export const tabsTheme = defineMultiStyleConfig({ variants })

const DispSelect = () => {
  const typePokeHandler = () => {
    console.log("ter")
  }
  return (
    <DispTypePokeStyled>
      <Tabs isFitted variant='enclosed' onChange={(e) => typePokeHandler(e)}>
        <TabList mb='1em'>
          <Tab>タイプ相性</Tab>
          <Tab>ポケモン相性</Tab>
        </TabList>
      </Tabs>
      {/* <ButtonStyled onClick={typePokeHandler}>タイプ</ButtonStyled>
      <ButtonStyled onClick={typePokeHandler}>ポケモン</ButtonStyled> */}
    </DispTypePokeStyled>
  )
}

export default DispSelect