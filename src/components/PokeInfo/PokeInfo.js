import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import callAPI from '../../utils/callAPI/ExCallAPI'
import PokeName from './PokeName/PokeName'
import { usePokeInfo, usePokeInfoDispatch } from '../../utils/context/PokeInfoContext'
import { getTypeIdFromEnName } from '../../utils/data/TypeInfo'
import PokeStats from './PokeStats/PokeStats'
import PokeTypeContainer from './PokeType/PokeTypeContainer'

const PokeInfoStyled = styled.div`
  /* border: solid 5px; */
  border-right: solid 2px whitesmoke;
  width: 100vw;
  /* width: 25%; */

  // margin, padding
  margin-top: 0rem;
  margin-bottom: 0rem;

  @media (min-width: 600px) {
    width: 25%;
  }
`

const pokeInfoJson = {
  name: "",
  typeId: [],
  icon_src: "",
  stats: []
}

const PokeInfo = ({ pokeID }) => {
  console.log("pokeInfo called")
  console.log("pokeInfo called test")
  console.log(process.env.NEXT_PUBLIC_POKE_INFO_URL)

  // context呼び出し
  const pokeInfo = usePokeInfo()
  const pokeInfoDispatch = usePokeInfoDispatch()
  

  // useEffectで、引数のIDに応じたポケモンの名称、画像、タイプを取得する
  useEffect(() => {
    const getPokeInfo = async () => {
      console.log("useeffect start")
      // ポケモンの情報取得（アイコン、タイプ（英語））
      const res_info = await callAPI.getPokeInfo(pokeID)
      console.log(res_info)
      const type = getTypeIdFromEnName(res_info.types)

      // 名称取得
      const res_name = await callAPI.getPokeName(pokeID)
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
  }, [])

  // ロード状態判定
  if(pokeInfo === false){
    return <>ロード中</>
  }

  // return
  return (
    <PokeInfoStyled>
      <PokeName pokeID={pokeID}/>
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