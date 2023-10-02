// Find the number of occurrences of minimum value in the numbers list and replace all the
// occurrences with -1 value
function replaceMinOccurrencesWithNegativeOne(numbers) {
    if (numbers.length == 0) {
        console.log('list is empty.');
        return;
    }

    const min = Math.min(...numbers);
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == min) {
            numbers[i] = -1;
            count++;
        }
    }
    console.log(`Number of occurrences of the Minimum value (${min}): ${count}`);
    console.log('List after  the replacements:', numbers);
}

// Example usage
const numbersList = [6, 1, 3, 1, 9, 1,];
console.log('Original list:', numbersList);
replaceMinOccurrencesWithNegativeOne(numbersList);
