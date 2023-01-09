import React from 'react'
import { NavbarStyle } from '../../styles/components/Navbar/Navbarstyle'
import Select from 'react-select';
import { useState, useEffect, useRef } from "react"
import { useAllPokeId, useAllPokeIdDispatch } from '../../utils/context/AllPokeIdContext'
import { customStyles } from './NavbarStyle';
import HeaderLog from './HeaderLog/HeaderLog';
import { usePokeIdDispatch } from '../../utils/context/PokeIdContext';

// component
const Navbar = ({ children }) => {
  // log
  console.log("navbar called")

  // state設定
  const pokeIdDispatch = usePokeIdDispatch()
  const [getid, idDispatch] = useState(false)

  const selectInputRef = useRef();

  // stateより全ポケモンのID、名称を取得する
  const allPokeId = useAllPokeId()
  console.log(allPokeId)

  if(getid != false){
    // 検索フォームクリア
    selectInputRef.current.clearValue();
  }
    
  // update
  const updateOption = (e) => {
    console.log("updateOption called")
    console.log(e)
    
    if(e === null){
      return
    }

    // ディスパッチ更新
    pokeIdDispatch(e.id)
    idDispatch(e.id)
  }

  // returu component
  return (
    <>
      <NavbarStyle>
        <HeaderLog />
        <Select
          ref={selectInputRef}
          options={allPokeId}
          styles={customStyles}
          placeholder={'ポケモン検索'}
          onChange={(e) => {updateOption(e)}}
          noOptionsMessage={() => "該当ポケモンなし"}
        />
      </NavbarStyle>
      <div className="layout">{children}</div>
    </>
  )
}

export default Navbar