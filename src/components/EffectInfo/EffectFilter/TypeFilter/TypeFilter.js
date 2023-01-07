import React from 'react'
import styled from 'styled-components'
import Select from 'react-select';
import { typeInfo } from '../../../../utils/data/TypeInfo';
import { TypeFilterStyle } from './TypeFilterStyle';
import { useTypeFilter, useTypeFilterDispatch } from '../../../../utils/context/Filter/TypeFilterContext';

const customStyles = {
  container: (base, state) => ({
    ...base,
    margin: "0rem",
    padding: "0rem",
  }),
  valueContainer: (base, state) => ({
    ...base,
    margin: "0",
    padding: "0",
    color: "white",
    textAlign: "left"
  }),
  control: (base, state) => ({
    ...base,
    // この設定で、タイプボックスの背景色が変わる
    padding: "0",
    margin: "0.5rem",
  }),
  multiValue: (styles, { data }) => {
    const color = data.color;
    return {
      ...styles,
      backgroundColor: color,
      color: "white"
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "white",
  }),
};

const TypeFilter = () => {
  // logs
  console.log("type filter called")
  // state
  const typeFilterDispatch = useTypeFilterDispatch()
  
  // タイプリスト生成
  const getTypeList = typeInfo.map((oneType) => {
    return {
      value: oneType.name.jp,
      label: oneType.name.jp,
      id: oneType.id,
      color: oneType.color
    }
  })

  // 
  const FilterTypeChange = (e) => {
    const newFilterList = e.map((type) => {
      return type.id
    })
    typeFilterDispatch(newFilterList)
  }

  return (
    <TypeFilterStyle>
      <Select
        isMulti
        styles={customStyles}
        options={getTypeList}
        placeholder={'非表示タイプ（防御側）'}
        onChange={(e) => FilterTypeChange(e)}
      />
      <Select
        isMulti
        styles={customStyles}
        options={getTypeList}
        placeholder={'相性'}
      />
    </TypeFilterStyle>
  )
}

export default TypeFilter