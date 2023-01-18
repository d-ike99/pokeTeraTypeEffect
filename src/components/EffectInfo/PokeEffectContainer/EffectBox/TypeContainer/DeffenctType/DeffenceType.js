import React from 'react'
import Image from 'next/image'
import { DefenceTypeStyle, TypeName } from './DeffenceTypeStyle'
import { typeJpName, getTypeInfo } from '../../../../../../utils/data/TypeInfo'
import { useSelectDispEffect } from '../../../../../../utils/context/SelectDispEffect'
import { useRankingPokeInfo } from '../../../../../../utils/context/RankingPokeInfoContext'
import Tooltip from '../../../../../Common/Tooltip/Tooltip'

const myLoader = ({ src, width, quality }) => {
  return src
}

const DeffenceType = ({deffenceId}) => {
  // TODO: タイプ相性、ポケモン相性タブの内容に応じて、防御側の表示アイコンを変える
  // タイプ相性の場合：deffeceIdに紐づいた、タイプアイコン
  // ポケモン相性の場合：deffenctIdに基づいた、ポケモンのアイコン（httpsリクエスト発生）

  // state取得
  const selectDispEffect = useSelectDispEffect()
  const rankingPokeInfo = useRankingPokeInfo()

  // debugger
  let dispName
  let srcPath
  let ranking
  let stats
  let message

  if(selectDispEffect === 0){
    dispName = typeJpName(deffenceId)
    const typeInfo = getTypeInfo(deffenceId)  
    srcPath = typeInfo.icon_path
  } else {
    // TODO
    const pokeInfo = rankingPokeInfo.filter((onePokeInfo) => {
      return onePokeInfo.id === deffenceId
    })
    srcPath = pokeInfo[0].icon_src
    dispName = pokeInfo[0].name
    ranking = pokeInfo[0].ranking
    stats = pokeInfo[0].stats
    // debugger
    message = (
      <>
        <React.Fragment key={0}>
          {`順位：${ranking}`}
          <br />
        </React.Fragment>
        <React.Fragment key={1}>
          {`HP：${stats.H}`}
          <br />
        </React.Fragment>
        <React.Fragment key={2}>
          {`攻撃：${stats.A}`}
          <br />
        </React.Fragment>
        <React.Fragment key={3}>
          {`防御：${stats.B}`}
          <br />
        </React.Fragment>
        <React.Fragment key={4}>
          {`特攻：${stats.C}`}
          <br />
        </React.Fragment>
        <React.Fragment key={5}>
          {`特防：${stats.D}`}
          <br />
        </React.Fragment>
        <React.Fragment key={6}>
          {`素早さ：${stats.S}`}
          <br />
        </React.Fragment>
      </>
    )
  }

  

  // imageサイズの定義
  const imageSize = selectDispEffect === 0 ? "23" : "40"

  return (
    <DefenceTypeStyle>
      {selectDispEffect === 0 ? (
        <>
          <Image loader={myLoader} style={{margin: "auto"}} src={srcPath} alt={srcPath} width={imageSize} height={imageSize} />
          <TypeName>{dispName}</TypeName>
        </>
      ) : (
        <Tooltip
          content={message}
          location="right"
        >
          <Image loader={myLoader} style={{margin: "auto"}} src={srcPath} alt={srcPath} width={imageSize} height={imageSize} />
          <TypeName>{dispName}</TypeName>
        </Tooltip>
      )}
      

    </DefenceTypeStyle>
  )
}

export default DeffenceType