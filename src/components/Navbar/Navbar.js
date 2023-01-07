import React from 'react'
import { NavbarStyle } from '../../styles/components/Navbar/Navbarstyle'
import Select from 'react-select';
import { useState, useEffect } from "react"
import { useAllPokeId, useAllPokeIdDispatch } from '../../utils/context/AllPokeIdContext'
import { customStyles } from './NavbarStyle';
import HeaderLog from './HeaderLog/HeaderLog';

// component
const Navbar = ({ children }) => {
  // log
  console.log("navbar called")

  // state設定
  const [dispOptionList, dispatch] = useState([])


  // stateより全ポケモンのID、名称を取得する
  const allPokeId = useAllPokeId()
  console.log(allPokeId)
    
  // 全てのpokeIDを確報する
  useEffect(() => {
    dispatch(allPokeId)
  
    // return () => {
    //   second
    // }
  }, [allPokeId])
  


  // update
  const updateOption = (e) => {
    console.log("updateOption called")
    // debugger

    console.log(e)

    alert(e.label)

    // ページ遷移
    
  }

  return (
    <>
      <NavbarStyle>
        <HeaderLog />
        <Select
          options={dispOptionList}
          styles={customStyles}
          placeholder={'ポケモン検索'}
          onChange={(e) => {updateOption(e)}}
        />
      </NavbarStyle>
      <div className="layout">{children}</div>
    </>
  )
}

export default Navbar