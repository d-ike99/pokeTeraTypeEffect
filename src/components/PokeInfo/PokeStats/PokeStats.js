import React from 'react'
import { usePokeInfo } from '../../../utils/context/PokeInfoContext'
import { PokeStatsStyled, Testdiv } from  "./PokeStatsStyle"
import PokeStat from './PokeStat/PokeStat'
import { TypeValue } from './PokeStatsStyle'
import { DispLabel } from '../../Common/Label'
const PokeStats = () => {
  // context呼び出し
  const pokeInfo = usePokeInfo()

  if(pokeInfo.stats == false){
    return <></>
  }

  return (
    <PokeStatsStyled>
      <DispLabel><span>種族値</span></DispLabel>
      {pokeInfo.stats.map((stat) => {
        // return <Testdiv key={stat.name}>{stat.name}:{stat.stat}&nbsp;</Testdiv>
        return <PokeStat key={stat.name} statName={stat.name} value={stat.stat}></PokeStat>
      })}
    </PokeStatsStyled>
  )
}

export default PokeStats