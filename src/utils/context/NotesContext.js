import { createContext, useContext, useReducer, useEffect } from "react";
import callAPI from "../callAPI/ExCallAPI";

// define createContext
const NotesContext = createContext();
const NotesDispatchContext = createContext();

// reducerの設定
const setNotes = (prevNotes, { action, argNote }) => {
  switch (action) {
    case "init":
      return argNote
    case "add":
      return [...prevNotes, argNote];
      break;
    
    case "delete":
      return prevNotes.filter((prevNote) => {
        return prevNote.id !== argNote.id;
      });
    
    case "patch":
      console.log("patch start")
      const filterNote = prevNotes.filter((prevNote) => {
        return prevNote.id !== argNote.id;
      })
      const patchNote = [...filterNote, argNote]

      console.log(patchNote)

      return patchNote

      
    default:
      break;
  }
  return 
}

// define component
const NotesProvider = ({ children }) => {
  // useReducerの設定
  const [notes, setNotesDispatch] = useReducer(setNotes, [])

  // 初回データの取得
  useEffect(() => {
    
    // getでデータ取得
    const getData = async () => {
      const res = await callAPI.getAll();
      console.log(res)

      // dispatch更新
      setNotesDispatch({ action: "init", argNote: res });
    }

    getData();

  }, []);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={setNotesDispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
};

// define useContext
const useNotes = () => useContext(NotesContext);
const useNotesDispatch = () => useContext(NotesDispatchContext);

export { useNotes, useNotesDispatch, NotesProvider };
