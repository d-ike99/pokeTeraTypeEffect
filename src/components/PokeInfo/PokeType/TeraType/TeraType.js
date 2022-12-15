import React from 'react'
import Image from 'next/image'
import { SelectPokeTypeName, TeraTypeContainer, SelectBox } from './TeraTypeStyle'
import { useTeraType, useTeraTypeDispatch } from '../../../../utils/context/TeraTypeContext'
import { getTypeInfo, typeInfo } from '../../../../utils/data/TypeInfo'
import Select from "react-select"
import { components } from 'react-select';

const customStyles = {
  container: (base, state) => ({
    ...base,
    margin: "0rem",
    padding: "0rem",
  }),
  valueContainer: (base, state) => ({
    ...base,
    margin: "0rem",
    padding: "0rem",
    color: "white",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    width: "0rem",
    margin: "0rem",
    padding: "0rem",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    width: "0rem",
    // border: "solid",
    margin: "0rem",
    padding: "0rem",
  }),
  option: (base, state) => ({
    ...base,
    // border: "solid",
    height: '100%',
    margin: "0rem",
    padding: "0rem",
    borderBottom: "solid",
    border: "none",
    color: "black",
    backgroundColor: "none"
  }),
  control: (base, state) => ({
    ...base,
    border: "solid",

    // この設定で、タイプボックスの背景色が変わる
    // backgroundColor: state.data,
    // backgroundColor: "white",

    padding: "0rem",
    margin: "0rem",
    border: "none"
  }),
};

const singleValue = (props) => {
  console.log("singlevaluue called")
  console.log(props.data)
  return (
    <components.SingleValue {...props}>
      {props.data.id !== 0 ?
        (<Image src={props.data.src} alt="me" width="100" height="40" />) :
        (<div>{props.data.name}</div>)}

    </components.SingleValue>
  )
};

const formatOptionLabel = ({ id, name, src, color }) => (
  <SelectBox>
    <SelectPokeTypeName widhMax={true} color={true}>{name}</SelectPokeTypeName>
  </SelectBox>
);

const TeraType = () => {
  // タイプリスト生成
  const getTypeList = typeInfo.map((oneType) => {
    return {
      id: oneType.id,
      name: oneType.name.jp,
      src: oneType.image_path,
      color: oneType.color
    }
  })
  const dummy = {
    id: 0,
    name: "テラタイプなし",
    src: "",
    color: "",
  }
  const typeList = [dummy, ...getTypeList]

  // context呼び出し
  const teraTypeId = useTeraType()
  const setTeraType = useTeraTypeDispatch()

  let color = ""
  let src = ""
  if(teraTypeId !== false){
    const teraTypeInfo = getTypeInfo(teraTypeId)
    color = teraTypeInfo.color
    src = teraTypeInfo.image_path

  }
  
  // テラタイプ変更イベント
  const teraTypeChange = (e) => {
    // useState更新
    console.log("tera type selected")
    console.log(e)
    setTeraType(e)
  }

  const handleChange = selectedOption => {
    console.log("handleChange called")
    console.log(selectedOption)

    if(selectedOption.id === 0){
      setTeraType(false)
      return
    }
    setTeraType(selectedOption.id)
  };

  return (
    <>
      <TeraTypeContainer color={color} src={src}>
        <Select 
          styles={customStyles}
          options={typeList}
          placeholder="テラタイプ選択"

          formatOptionLabel={formatOptionLabel}
          onChange={handleChange}
          isSearchable={false}
          components={{ 
            SingleValue: singleValue
          }}
          />
      </TeraTypeContainer>
    </>
  )
}

export default TeraType