import { createContext, useContext, useReducer } from "react";

// define createContext
const PokeIdContext = createContext();
const PokeIdDispatchContext = createContext();

// reducerの設定
const setPokeId = (prev, PokeId) => {
  return PokeId
}

// define component
const PokeIdProvider = ({ children }) => {
  // useReducerの設定
  const [PokeId, setPokeIdDispatch] = useReducer(setPokeId, 635);

  return (
    <PokeIdContext.Provider value={PokeId}>
      <PokeIdDispatchContext.Provider value={setPokeIdDispatch}>
        {children}
      </PokeIdDispatchContext.Provider>
    </PokeIdContext.Provider>
  );
};

// define useContext
const usePokeId = () => useContext(PokeIdContext);
const usePokeIdDispatch = () => useContext(PokeIdDispatchContext);

export { usePokeId, usePokeIdDispatch, PokeIdProvider };
