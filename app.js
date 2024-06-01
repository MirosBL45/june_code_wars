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