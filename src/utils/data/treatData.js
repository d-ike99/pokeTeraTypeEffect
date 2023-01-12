const effectObj = {
  deffenceId: "",
  attackIdList: false
}

const addData = ({deffenceId, attackId, argList, sameAddFlg}) => {
  // debugger
  const retList = {...argList}
  const newList = { ...effectObj }
  newList["deffenceId"] = deffenceId
  newList["attackIdList"] = [attackId]

  // debugger
  
  if(!sameAddFlg){
    retList["list"].push(newList)
  } else {    
    // 最後の配列に対してデータ追加
    retList.list.push(attackId)
  }

  return retList
}

export { addData }