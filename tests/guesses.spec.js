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

/*Efter att ha provat spelet "wordle" tycker jag att mina tester är heltäckande. Eftersom
att man använder ett inprogramerat "keyboard" i spelet kan man inte skicka in en tom sträng eller en sträng med 
små eller stora bokstäver(beroende på vad man använder på "keyboardet") som då inte skulle matcha "WordBase",
därför har jag valt att inte lägga tester för detta. Hade velat testa hur och om WordBase tar ett random ord men
vet inte hur man gör det.*/
