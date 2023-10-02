// Write an anonymous program to reverse a string
const reverseString = function(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};

const originalString = 'Usama Memon';
const reversedString = reverseString(originalString);
console.log('Original string:', originalString);
console.log('Reversed string:', reversedString);
