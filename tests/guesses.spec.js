import {checkGuesses} from "../script/checkGuesses";

test('Compare that rightGuess and guess has output correct', () => {
    expect(checkGuesses('hallå','hallå')).toEqual([
       { letter: 'h', result: 'correct' },
       { letter: 'a', result: 'correct' },
       { letter: 'l', result: 'correct' },
       { letter: 'l', result: 'correct' },
       { letter: 'å', result: 'correct' }
   ]);
});
