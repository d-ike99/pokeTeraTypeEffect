import { createContext, useContext, useReducer } from "react";

// define createContext
const EffectFilterContext = createContext();
const EffectFilterDispatchContext = createContext();

// reducerの設定
const setEffectFilter = (prevEffectFilter, EffectFilter) => {
  return EffectFilter
}

const EffectFilterJson = []

// define component
const EffectFilterProvider = ({ children }) => {
  // useReducerの設定
  const [EffectFilter, setEffectFilterDispatch] = useReducer(setEffectFilter, EffectFilterJson);


  return (
    <EffectFilterContext.Provider value={EffectFilter}>
      <EffectFilterDispatchContext.Provider value={setEffectFilterDispatch}>
        {children}
      </EffectFilterDispatchContext.Provider>
    </EffectFilterContext.Provider>
  );
};

// define useContext
const useEffectFilter = () => useContext(EffectFilterContext);
const useEffectFilterDispatch = () => useContext(EffectFilterDispatchContext);

export { useEffectFilter, useEffectFilterDispatch, EffectFilterProvider };
