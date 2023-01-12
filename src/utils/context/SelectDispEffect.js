import { createContext, useContext, useReducer } from "react";

// define createContext
const SelectDispEffectContext = createContext();
const SelectDispEffectDispatchContext = createContext();

// reducerの設定
const setSelectDispEffect = (prevNote, SelectDispEffect) => {
  return SelectDispEffect
}

// define component
const SelectDispEffectProvider = ({ children }) => {
  // useReducerの設定
  const [SelectDispEffect, setSelectDispEffectDispatch] = useReducer(setSelectDispEffect, 0);


  return (
    <SelectDispEffectContext.Provider value={SelectDispEffect}>
      <SelectDispEffectDispatchContext.Provider value={setSelectDispEffectDispatch}>
        {children}
      </SelectDispEffectDispatchContext.Provider>
    </SelectDispEffectContext.Provider>
  );
};

// define useContext
const useSelectDispEffect = () => useContext(SelectDispEffectContext);
const useSelectDispEffectDispatch = () => useContext(SelectDispEffectDispatchContext);

export { useSelectDispEffect, useSelectDispEffectDispatch, SelectDispEffectProvider };
