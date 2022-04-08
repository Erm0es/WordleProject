import React, {useContext} from 'react'
import { AppContext } from '../App';
import Key from './Key';

function Keyboard() {
    const {disabledLetters} = useContext(AppContext);

    const keys1 = ["Q","W","E","R","T","Y","U","I","O","P"];
    const keys2 = ["A","S","D","F","G","H","J","K","L"];
    const keys3 = ["Z","X","C","V","B","N","M"];
  return (
    <div className="keyboard">
        <div className="line1">
            {keys1.map((key) => {
            return <Key keyVal = {key} disabled = {disabledLetters.includes(key)} />;
        })}

        </div>
        <div className="line2">
            {keys2.map((key) => {
            return <Key keyVal = {key} disabled = {disabledLetters.includes(key)} />;
        })}
        </div>
        <div className="line3">
            <Key keyVal = {"ENTER"} bigKey />
            {keys3.map((key) => {
            return <Key keyVal = {key} disabled = {disabledLetters.includes(key)} />;
        })}
         <Key keyVal = {"<<"} bigKey />
        </div> 
    </div>
  )
}

export default Keyboard;