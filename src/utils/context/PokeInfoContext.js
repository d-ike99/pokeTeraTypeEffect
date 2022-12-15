import { createContext, useContext, useReducer } from "react";

// define createContext
const PokeInfoContext = createContext();
const PokeInfoDispatchContext = createContext();

// reducerの設定
const setPokeInfo = (prevNote, PokeInfo) => {
  return PokeInfo
}

const pokeInfoJson = {
  name: "",
  typeId: [],
  icon_src: "",
  stats: false
}
// define component
const PokeInfoProvider = ({ children }) => {
  // useReducerの設定
  const [PokeInfo, setPokeInfoDispatch] = useReducer(setPokeInfo, pokeInfoJson);


  return (
    <PokeInfoContext.Provider value={PokeInfo}>
      <PokeInfoDispatchContext.Provider value={setPokeInfoDispatch}>
        {children}
      </PokeInfoDispatchContext.Provider>
    </PokeInfoContext.Provider>
  );
};

// define useContext
const usePokeInfo = () => useContext(PokeInfoContext);
const usePokeInfoDispatch = () => useContext(PokeInfoDispatchContext);

export { usePokeInfo, usePokeInfoDispatch, PokeInfoProvider };
