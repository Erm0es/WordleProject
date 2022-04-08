import React, { useContext, useEffect } from 'react';
import {AppContext} from "../App";

function Letter({letterPos, attemptVal}) {
    const { 
      board,
      correctWord, 
      currAttempt, 
      setDisabledLetters,
      } = useContext(AppContext);

    const letter = board[attemptVal][letterPos];
    const correct = correctWord.toUpperCase()[letterPos] === letter;
    const misplaced = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

    const letterState = currAttempt.attempt > attemptVal &&
    (correct ? "correct" : misplaced ? "misplaced" : "incorrect");

    useEffect(() => {
      if(letter !== "" && !correct && !misplaced)
      setDisabledLetters((prev) => [...prev,letter]);

    }, [currAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>{letter}</div>
  )
}

export default Letter;