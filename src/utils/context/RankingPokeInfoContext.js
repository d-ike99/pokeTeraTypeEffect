import { createContext, useContext, useReducer } from "react";

// define createContext
const RankingPokeInfoContext = createContext();
const RankingPokeInfoDispatchContext = createContext();

// 初期値設定
const RankingPokeInfoData = [
  {
    "0": {
      name: "",
      typeId: [],
      icon_src: "",
      stats: []
    }
  }
]

// reducerの設定
const setRankingPokeInfo = (prev, RankingPokeInfo) => {
  return RankingPokeInfo
}

// define component
const RankingPokeInfoProvider = ({ children }) => {
  // useReducerの設定
  const [RankingPokeInfo, setRankingPokeInfoDispatch] = useReducer(setRankingPokeInfo, RankingPokeInfoData);

  return (
    <RankingPokeInfoContext.Provider value={RankingPokeInfo}>
      <RankingPokeInfoDispatchContext.Provider value={setRankingPokeInfoDispatch}>
        {children}
      </RankingPokeInfoDispatchContext.Provider>
    </RankingPokeInfoContext.Provider>
  );
};

// define useContext
const useRankingPokeInfo = () => useContext(RankingPokeInfoContext);
const useRankingPokeInfoDispatch = () => useContext(RankingPokeInfoDispatchContext);

export { useRankingPokeInfo, useRankingPokeInfoDispatch, RankingPokeInfoProvider };
