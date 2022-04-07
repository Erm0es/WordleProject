import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext, useEffect, useState } from "react";
import { boardShell } from './Words';

export const AppContext = createContext();

function App() {
  const [board, setBoard]= useState(boardShell);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0})

  const [data, setData] = useState(null);
  //WORDS, SETWORDS?? Hur sparar jag words variablen så att jag når den utanför useEffect?
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const correctWord = "RIGHT";

  useEffect (() => {
    fetch("https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json")
    .then(res => {
      if(res.ok){
        return res.json()
      }
      throw res;
    })
    .then(data => {
      setData(data.json);
      //hur får jag med all information här men ändå har det i en variabel?
      words = Object.keys(data).filter((word) => word.length <= 5 && word.length > 3);
      console.log(words)
    })
    .catch(error => {
      console.error("Error", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [])

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > 4) return;
      const current = [...board];
      current[currAttempt.attempt][currAttempt.letterPos] = keyVal;
      setBoard(current);
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  }
  const onDelete = () => {
    if(currAttempt.letterPos === 0) return;
      const current = [...board];
      current[currAttempt.attempt][currAttempt.letterPos -1] = "";
      setBoard(current);
      setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos - 1});
  }

  const onEnter = () => {
    if(currAttempt.letterPos !== 5) return;
    let currWord = "";
    for(let i = 0; i < 5; i++){
      currWord += board[currAttempt.attempt][i];
    }
    //här ska WORDS jämföras med currWord, HUR?
    if(setAllWord.has(currWord.toLowerCase())){
    setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0})
    }else {
      alert("Word not found :(");
    }
  }

  return (
    <div className="App" >
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider 
        value={{
          board,
          setBoard, 
          currAttempt, 
          setCurrAttempt, 
          onSelectLetter, 
          onDelete, 
          onEnter,
          correctWord,
          data,
          loading,
          error,
          words,
        }}>
        <div className="game">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;