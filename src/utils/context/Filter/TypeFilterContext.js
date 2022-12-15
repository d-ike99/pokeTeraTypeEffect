import { createContext, useContext, useReducer } from "react";

// define createContext
const TypeFilterContext = createContext();
const TypeFilterDispatchContext = createContext();

// reducerの設定
const setTypeFilter = (prevTypeFilter, TypeFilter) => {
  return TypeFilter
}

const TypeFilterJson = []

// define component
const TypeFilterProvider = ({ children }) => {
  // useReducerの設定
  const [TypeFilter, setTypeFilterDispatch] = useReducer(setTypeFilter, TypeFilterJson);


  return (
    <TypeFilterContext.Provider value={TypeFilter}>
      <TypeFilterDispatchContext.Provider value={setTypeFilterDispatch}>
        {children}
      </TypeFilterDispatchContext.Provider>
    </TypeFilterContext.Provider>
  );
};

// define useContext
const useTypeFilter = () => useContext(TypeFilterContext);
const useTypeFilterDispatch = () => useContext(TypeFilterDispatchContext);

export { useTypeFilter, useTypeFilterDispatch, TypeFilterProvider };
