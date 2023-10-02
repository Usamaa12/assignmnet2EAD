// Write a function which checks number till given input/parameter is odd or even. 5.

function checkOddOrEven(n) {
    for (let i = 1; i <= n; i++) {
        const result = i % 2 === 0 ? 'Even' : 'Odd';
        console.log(`${i} is ${result}`);
    }
}
checkOddOrEven(5);
