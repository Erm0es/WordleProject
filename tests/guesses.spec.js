import {checkGuesses} from "../script/checkGuesses";

test('check if guess and rightAnswer === correct', () => {
    const guess = "abc";
    const rightAnswer = ["a","b","c"];
    const output = checkGuesses(guess,rightAnswer);
    const result = [
        { letter: 'a', result: 'correct' },
        { letter: 'b', result: 'correct' },
        { letter: 'c', result: 'correct' },
    ];
    expect(output).toEqual(result);
});

test('check if guess and rightAnswer === incorrect', () => {
    const guess = "abc";
    const rightAnswer = ["ö","ä","å"];
    const output = checkGuesses(guess,rightAnswer);
    const result = [
        { letter: 'a', result: 'incorrect' },
        { letter: 'b', result: 'incorrect' },
        { letter: 'c', result: 'incorrect' },
    ];
    expect(output).toEqual(result);
});

test('check if guess and rightAnswer === correct and incorrect', () => {
    const guess = "aböä";
    const rightAnswer = ["a","b","c","d"];
    const output = checkGuesses(guess,rightAnswer);
    const result = [
        { letter: 'a', result: 'correct' },
        { letter: 'b', result: 'correct' },
        { letter: 'ö', result: 'incorrect' },
        { letter: 'ä', result: 'incorrect' },
    ];
    expect(output).toEqual(result);
});


test('check if guess and rightAnswer can handle misplaced', () => {
    const guess = "abc";
    const rightAnswer = ["c","a","b"];
    const output = checkGuesses(guess,rightAnswer);
    const result = [
        { letter: 'a', result: 'misplaced' },
        { letter: 'b', result: 'misplaced' },
        { letter: 'c', result: 'misplaced' },
    ];
    expect(output).toEqual(result);
});

test('check if misplaced can handle double letters', () => {
    const guess = "hallå";
    const rightAnswer = ["m","å","l","a","r"];
    const output = checkGuesses(guess,rightAnswer);
    const result = [
        { letter: 'h', result: 'incorrect' },
        { letter: 'a', result: 'misplaced' },
        { letter: 'l', result: 'correct' },
        { letter: 'l', result: 'incorrect' },
        { letter: 'å', result: 'misplaced' },
    ];
    expect(output).toEqual(result);
});

test('check if guess and rightAnswer can handle uppercase', () => {
    const guess = "ABC";
    const rightAnswer = ["a","b","c"];
    const output = checkGuesses(guess,rightAnswer);
    const result = [
        { letter: 'A', result: 'correct' },
        { letter: 'B', result: 'correct' },
        { letter: 'C', result: 'correct' },
    ];
    expect(output).toEqual(result);
});

test('check if guess and rightAnswer can handle uppercase', () => {
    const guess = "abc";
    const rightAnswer = ["A","B","C"];
    const output = checkGuesses(guess,rightAnswer);
    const result = [
        { letter: 'a', result: 'correct' },
        { letter: 'b', result: 'correct' },
        { letter: 'c', result: 'correct' },
    ];
    expect(output).toEqual(result);
});
/*im checking every possible output that i can think off 
and therefor i belive that the tests is succesfull and comprehensive*/




//TOLOWERCASE?