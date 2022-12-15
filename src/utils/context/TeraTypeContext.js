import { createContext, useContext, useReducer } from "react";

// define createContext
const TeraTypeContext = createContext();
const TeraTypeDispatchContext = createContext();

// reducerの設定
const setTeraType = (prevNote, TeraType) => {
  return TeraType
}

// define component
const TeraTypeProvider = ({ children }) => {
  // useReducerの設定
  const [TeraType, setTeraTypeDispatch] = useReducer(setTeraType, false);


  return (
    <TeraTypeContext.Provider value={TeraType}>
      <TeraTypeDispatchContext.Provider value={setTeraTypeDispatch}>
        {children}
      </TeraTypeDispatchContext.Provider>
    </TeraTypeContext.Provider>
  );
};

// define useContext
const useTeraType = () => useContext(TeraTypeContext);
const useTeraTypeDispatch = () => useContext(TeraTypeDispatchContext);

export { useTeraType, useTeraTypeDispatch, TeraTypeProvider };
