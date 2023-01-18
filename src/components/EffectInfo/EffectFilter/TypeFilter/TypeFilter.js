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
    const wordColor = data.wordColor;

    debugger

    return {
      ...styles,
      backgroundColor: color,
      color: wordColor
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "white",
  }),
};

const TypeFilter = ({dispList, placeHolder, dispatch}) => {
  // logs
  console.log("type filter called")
  
  // 
  const FilterTypeChange = (e) => {
    const newFilterList = e.map((list) => {
      return list.id
    })
    dispatch(newFilterList)
  }

  return (
    <TypeFilterStyle>
      <Select
        isMulti
        styles={customStyles}
        options={dispList}
        placeholder={placeHolder}
        onChange={(e) => FilterTypeChange(e)}
      />
    </TypeFilterStyle>
  )
}

export default TypeFilter