import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";

import StopWatch from "./components/StopWatch";
import { createContext, useEffect, useState } from "react";
import { boardShell } from './Words';

import GameOver from "./components/GameOver";
export const AppContext = createContext();

function App() {

//timer  ----------------------------------------------------
const [time, setTime] = useState({ms:0, s:0, m:0});
const [interv, setInterv] = useState();

var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m

const run = () => {
  if(updatedS === 60){
    updatedM++;
    updatedS = 0;
  }
  if(updatedMs === 100){
    updatedS++;
    updatedMs = 0;
  }
  updatedMs++;
  return setTime({ms:updatedMs, s:updatedS, m:updatedM});
};

let start = () => {
  run();
  setInterv(setInterval(run,10));
};

//function for turning off the timer when game is done
let stop = () => {
  console.log("STÄNG AV DIG")
}

//game  --------------------------------------------------------
  const [board, setBoard]= useState(boardShell);
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0})
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({gameOver: false, guessedWord: false});
  
  let [correctWord, setCorrectWord] = useState("");
  let [words, setWords] = useState ([])

 
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
      setWords(words = Object.keys(data).filter((data) => data.length === 5));//&& data.length > 3));
      setCorrectWord(correctWord = words[Math.floor(Math.random() * words.length)])
      console.log(correctWord)
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
    if(words.includes(currWord.toLowerCase())){
      start({start});
      setCurrAttempt({attempt: currAttempt.attempt + 1, letterPos: 0})
    }else {
      alert("Hey! Thats not even a word..");
    }
    if(currWord.toLowerCase() === correctWord.toLowerCase()){
      setGameOver({gameOver:true, guessedWord: true})
      //stop watch
      stop({stop});
      return;
    } 
    if(currAttempt.attempt === 5){
      setGameOver ({gameOver: true, guessedWord:false});
      //stop watch
      stop({stop});
    }
     
  };

  return (
    <div className="App" >
      <nav>
        <h1>Emel-le</h1>
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
          setDisabledLetters,
          disabledLetters,
          setGameOver,
          gameOver,
          time,
        }}>
          <div className="clockHolder">
            <div className="stopWatch">
              <StopWatch time={time}/>
           </div>
          </div>
        <div className="game">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;