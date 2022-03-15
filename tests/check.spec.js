import checkGuesses from "../script";

test('Compare that sting wordBase and string input has output "correct"', () => {
    const wordBase = "a";
    const input = "a";
    const output = checkGuesses(wordBase,input);

    expect(output).toEqual[{
        letter: "a",
        result: "correct",
    }];  
});

test('Compare that string wordBase and string input has outout "incorrect"', () => {
    const wordBase = "a";
    const input = "b";
    const output = checkGuesses(wordBase, input);

    expect(output).toEqual[{
        letter: "b",
        result: "incorrect",
    }];
});

test('See if "toLowerCase" works', () => {
    const wordBase = "a";
    const input = "A";
    const output = checkGuesses(wordBase, input);

    expect(output).toEqual[{
        letter: "A",
        result: "correct",
    }];
});

test('check if "misplaced" is working', () => {
    const wordBase = "hello";
    const input = "olleh";
    const output = checkGuesses(wordBase, input);

    expect(output).toEqual[
        {
            letter: "o",
            result:"misplaced",
        },
        {
            letter: "l",
            result:"misplaced",
        },
        {
            letter: "l",
            result:"correct"
        },
        {
            letter:"e",
            result:"misplaced"
        },
        {
            letter:"h",
            result:"misplaced"
        }
    ];
});

