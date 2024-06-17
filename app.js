console.log('1. assigment');
console.log('The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers.');

function solution(list) {
    let result = [];
    let i = 0;

    while (i < list.length) {
        let start = list[i];

        let end = start;
        while (i + 1 < list.length && list[i + 1] == list[i] + 1) {
            end = list[i + 1];
            i++;
        }

        if (end - start >= 2) {
            result.push(start + '-' + end);
        } else {
            result.push(start);
            if (end != start) result.push(end);
        }

        i++;
    }

    return result.join(',');
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
console.log('####################----------------####################');


console.log('2. assigment');
console.log('Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.');

function formatDuration(seconds) {
    if (seconds === 0) return 'now';

    const units = [
        { name: 'year', value: 365 * 24 * 60 * 60 },
        { name: 'day', value: 24 * 60 * 60 },
        { name: 'hour', value: 60 * 60 },
        { name: 'minute', value: 60 },
        { name: 'second', value: 1 },
    ];

    const result = [];

    for (let unit of units) {
        if (seconds >= unit.value) {
            const unitCount = Math.floor(seconds / unit.value);
            seconds %= unit.value;
            result.push(`${unitCount} ${unit.name}${unitCount > 1 ? 's' : ''}`);
        }
    }

    if (result.length === 1) {
        return result[0];
    }

    return result.slice(0, -1).join(', ') + ' and ' + result.slice(-1);
}

console.log(formatDuration(3662));
console.log('####################----------------####################');


console.log('3. assigment');
console.log('regular expression capable of evaluating binary strings (strings with only 1s and 0s) and determining whether the given string represents a number divisible by 3.');

const multipleof3Regex = /^(0*(1(01*0)*1)*)*$/;

console.log(multipleof3Regex.test('110'));
console.log('####################----------------####################');


console.log('4. assigment');
console.log('Multiply two numbers. The arguments are passed as strings.');

function multiply(a, b) {
    if (a === '0' || b === '0') return '0';

    const num1 = a.split('').reverse();
    const num2 = b.split('').reverse();
    const result = Array(num1.length + num2.length).fill(0);

    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            result[i + j] += num1[i] * num2[j];
            result[i + j + 1] += Math.floor(result[i + j] / 10);
            result[i + j] %= 10;
        }
    }

    while (result[result.length - 1] === 0) {
        result.pop();
    }

    return result.reverse().join('');
}

console.log(multiply("123456789", "987654321"));
console.log('####################----------------####################');


console.log('5. assigment');
console.log('Convert a string into an integer. The strings simply represent the numbers in words.');

function parseInt(string) {
    const numWords = {
        'zero': 0, 'one': 1, 'two': 2, 'three': 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10, "eleven": 11, "twelve": 12, "thirteen": 13, "fourteen": 14, "fifteen": 15, "sixteen": 16, "seventeen": 17, "eighteen": 18, "nineteen": 19, "twenty": 20, "thirty": 30, "forty": 40, "fifty": 50, "sixty": 60, "seventy": 70, "eighty": 80, "ninety": 90
    };

    const magnitudes = {
        'hundred': 100,
        'thousand': 1000,
        'million': 1000000
    };

    const parts = string.replace(/-/, ' ').split(/[\s-]+/);

    let result = 0;
    let current = 0;

    parts.forEach(part => {
        if (numWords.hasOwnProperty(part)) {
            current += numWords[part];
        } else if (magnitudes.hasOwnProperty(part)) {
            if (part === 'hundred' && current !== 0) {
                current *= magnitudes[part];
            } else {
                current *= magnitudes[part];
                result += current;
                current = 0;
            }
        }
    });

    return result + current;
};

console.log(parseInt("seven hundred eighty-three thousand nine hundred and nineteen"));
console.log('####################----------------####################');


console.log('6. assigment');
console.log('Help the general decode secret enemy messages.');
const device = {
    decode: function (string) {
        return string.split('').map(char => {
            if (/[a-z]/.test(char)) {
                return String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) - 1 + 26) % 26 + 'a'.charCodeAt(0));
            } else if (/[A-Z]/.test(char)) {
                return String.fromCharCode((char.charCodeAt(0) - 'A'.charCodeAt(0) - 1 + 26) % 26 + 'A'.charCodeAt(0));
            } else {
                return char;
            }
        }).join('');
    }
};


console.log(device.decode('What the hell'));
console.log('####################----------------####################');

console.log('7. assigment');
console.log('Last digit of a huge number.');

function lastDigit(list) {
    if (list.length === 0) return 1;

    function modExp(base, exponent, mod) {
        if (mod === 1) return 0;
        let result = 1;
        base = base % mod;
        while (exponent > 0) {
            if (exponent % 2 === 1) {
                result = (result * base) % mod;
            }
            exponent = Math.floor(exponent / 2);
            base = (base * base) % mod;
        }
        return result;
    }

    let result = 1;
    for (let i = list.length - 1; i >= 0; i--) {
        if (result === 0) {
            result = 1;
        } else {
            result = modExp(list[i], result, 4) || 4;
        }
    }

    return Math.pow(list[0], result) % 10;
}

console.log(lastDigit([12, 30, 21]));
console.log('####################----------------####################');



console.log('8. assigment');
console.log('Sudoku Solver.');

function sudoku(puzzle) {
    solveSudoku(puzzle);
    return puzzle;
}

function solveSudoku(grid) {
    const emptyPos = findEmptyPosition(grid);
    if (!emptyPos) {
        return true;
    }
    const [row, col] = emptyPos;

    for (let num = 1; num <= 9; num++) {
        if (isValidPlacement(grid, row, col, num)) {
            grid[row][col] = num;

            if (solveSudoku(grid)) {
                return true;
            }

            grid[row][col] = 0;
        }
    }

    return false;
}

function findEmptyPosition(grid) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] === 0) {
                return [row, col];
            }
        }
    }
    return null;
}

function isValidPlacement(grid, row, col, num) {
    return !inRow(grid, row, num) &&
        !inCol(grid, col, num) &&
        !inBox(grid, row - (row % 3), col - (col % 3), num);
}

function inRow(grid, row, num) {
    return grid[row].includes(num);
}

function inCol(grid, col, num) {
    for (let row = 0; row < 9; row++) {
        if (grid[row][col] === num) {
            return true;
        }
    }
    return false;
}

function inBox(grid, startRow, startCol, num) {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (grid[startRow + row][startCol + col] === num) {
                return true;
            }
        }
    }
    return false;
}

var puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

console.log(sudoku(puzzle));