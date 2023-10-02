// Write a function which returns a list of elements which contains at least one character as digit

function findElementsWithDigit(arr) {
    return arr.filter(element => /[0-9]/.test(element));
}
const inputList = ['xyz246', 'abc', 123, 'def45', 'ghi','Usama','Memon0'];
const elementsWithDigit = findElementsWithDigit(inputList);

console.log('Input List:', inputList);
console.log('Elements with at least one digit:', elementsWithDigit);
