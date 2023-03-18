import { createContext, useContext, useReducer } from "react";

// define createContext
const AllPokeIdContext = createContext();
const AllPokeIdDispatchContext = createContext();

// reducerの設定
const setAllPokeId = (prev, AllPokeId) => {
  return AllPokeId
}

const AllPokeIdJson = []

// define component
const AllPokeIdProvider = ({ children }) => {
  // useReducerの設定
  const [AllPokeId, setAllPokeIdDispatch] = useReducer(setAllPokeId, AllPokeIdJson);


  return (
    <AllPokeIdContext.Provider value={AllPokeId}>
      <AllPokeIdDispatchContext.Provider value={setAllPokeIdDispatch}>
        {children}
      </AllPokeIdDispatchContext.Provider>
    </AllPokeIdContext.Provider>
  );
};

// define useContext
const useAllPokeId = () => useContext(AllPokeIdContext);
const useAllPokeIdDispatch = () => useContext(AllPokeIdDispatchContext);

export { useAllPokeId, useAllPokeIdDispatch, AllPokeIdProvider };
