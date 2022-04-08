import React, { useContext } from 'react'
import { AppContext } from '../App';


function GameOver() {
    const {gameOver, currAttempt, guessedWord, correctWord} = useContext(AppContext);
  return (
    <div className='gameOver'>
        <h2>
            {gameOver.guessedWord
            ? "You Correctly Guessed The Emel-le!" 
            : "You failed :(..try again!"}
        </h2>
        <h1 id = "correctWord">Correct Word: {correctWord}</h1>
        {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts!</h3>
        )}
    </div>
  );
}

export default GameOver;