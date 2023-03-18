import React, { useEffect, useState } from 'react'
import { PokeInfoStyled } from './PokeInfoStyle'
import callAPI from '../../utils/callAPI/ExCallAPI'
import PokeName from './PokeName/PokeName'
import { usePokeInfo, usePokeInfoDispatch } from '../../utils/context/PokeInfoContext'
import { treatPokeInfoData  } from '../../utils/data/TypeInfo'
import PokeStats from './PokeStats/PokeStats'
import PokeTypeContainer from './PokeType/PokeTypeContainer'
import { usePokeId, usePokeIdDispatch } from '../../utils/context/PokeIdContext'
import { useRankingPokeInfoDispatch } from '../../utils/context/RankingPokeInfoContext'


const PokeInfo = () => {
  console.log("pokeInfo called")

  // context呼び出し
  const pokeInfo = usePokeInfo()
  const pokeInfoDispatch = usePokeInfoDispatch()
  let pokeId = usePokeId()
  const rankingPokeInfoDispatch = useRankingPokeInfoDispatch()

  // IDに応じたポケモンの名称、画像、タイプを取得する
  useEffect(() => {
    const getPokeInfo = async () => {
      console.log("useeffect start")

      // ポケモンの情報取得（アイコン、タイプ（英語））
      const res_info = await callAPI.getPokeInfo(pokeId)
      console.log(res_info)
      
      // APIよりデータ取得
      const res_name = await callAPI.getPokeName(pokeId)
      console.log(res_name.names[0].name)

      // データ加工
      const newPokeInfo = treatPokeInfoData({"res_info": res_info, "name": res_name.names[0].name})

      // ディスパッチ更新
      pokeInfoDispatch(newPokeInfo)
    }

    getPokeInfo()
  }, [pokeId])

  // ランキング上位のポケモンデータ取得する
  useEffect(() => {
    const getRankingPokeInfo = async () => {
      console.log("useeffect start")

      // ポケモンの情報取得（アイコン、タイプ（英語））
      const res_info = await callAPI.getRankingPokeInfo(pokeId)

      // ディスパッチ更新
      rankingPokeInfoDispatch(res_info)
    }

    getRankingPokeInfo()
  }, [])
  

  // ロード状態判定
  if(pokeInfo === false){
    return <>ロード中</>
  }

  // return
  return (
    <PokeInfoStyled>
      <PokeName pokeID={pokeId}/>
      <PokeStats />
      <PokeTypeContainer />


      {/* {pokeInfo["typeId"].map((typeId) => {
          return (<PokeType key={typeId} typeId={typeId} />)
        })
      }
      <TeraType></TeraType> */}
    </PokeInfoStyled>
  )
}

export default PokeInfo