import React, { useEffect, useState } from 'react'
import { PokeInfoStyled } from './PokeInfoStyle'
import callAPI from '../../utils/callAPI/ExCallAPI'
import PokeName from './PokeName/PokeName'
import { usePokeInfo, usePokeInfoDispatch } from '../../utils/context/PokeInfoContext'
import { getTypeIdFromEnName } from '../../utils/data/TypeInfo'
import PokeStats from './PokeStats/PokeStats'
import PokeTypeContainer from './PokeType/PokeTypeContainer'
import { usePokeId, usePokeIdDispatch } from '../../utils/context/PokeIdContext'

const pokeInfoJson = {
  name: "",
  typeId: [],
  icon_src: "",
  stats: []
}

const PokeInfo = () => {
  console.log("pokeInfo called")

  // context呼び出し
  const pokeInfo = usePokeInfo()
  const pokeInfoDispatch = usePokeInfoDispatch()
  let pokeId = usePokeId()

  // useEffectで、引数のIDに応じたポケモンの名称、画像、タイプを取得する
  useEffect(() => {
    const getPokeInfo = async () => {
      console.log("useeffect start")
      // ポケモンの情報取得（アイコン、タイプ（英語））
      const res_info = await callAPI.getPokeInfo(pokeId)
      console.log(res_info)
      const type = getTypeIdFromEnName(res_info.types)

      // 名称取得
      const res_name = await callAPI.getPokeName(pokeId)
      console.log(res_name.names[0].name)

      // 種族値取得
      const stats = [
        {
          name: "H",
          stat: res_info.stats[0].base_stat
        },
        {
          name: "A",
          stat: res_info.stats[1].base_stat
        },
        {
          name: "B",
          stat: res_info.stats[2].base_stat
        },
        {
          name: "C",
          stat: res_info.stats[3].base_stat,
        },
        {
          name: "D",
          stat: res_info.stats[4].base_stat
        },
        {
          name: "S",
          stat: res_info.stats[5].base_stat,
        }
      ]

      // json作成
      let newPokeInfo = {...pokeInfoJson}
      newPokeInfo["name"] = res_name.names[0].name
      newPokeInfo["icon_src"] = res_info.sprites.front_default
      newPokeInfo["typeId"] = type
      newPokeInfo["stats"] = stats

      console.log("newpoke info")
      console.log(newPokeInfo)

      pokeInfoDispatch(newPokeInfo)
    }
    getPokeInfo()
  }, [pokeId])

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