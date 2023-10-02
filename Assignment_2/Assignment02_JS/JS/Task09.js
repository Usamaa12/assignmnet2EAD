// Write a function which can check if a given object is empty or not. If not empty, then display all
// the keys as well as values of an object. (Also values of nested objects)
function displayObjectKeysAndValues(obj) {
    if (Object.keys(obj).length == 0) {
        console.log('Object is empty.');
    } else {
        for (let key in obj) {
            if (typeof obj[key] == 'object' && obj[key] !== null) {
                console.log(`${key}:`);
                displayObjectKeysAndValues(obj[key]);
            } else {
                console.log(`${key}: ${obj[key]}`);
            }
        }
    }
}
const exampleObject = {
    name: 'Usama Memon',
    age: 22,
    address: {
        city: 'Khairpur Mirs',
        postalCode: 66160
    },
    hobbies: ['Scrolling', 'Sports'],
    emptyObj: {},
};

console.log('Displaying object keys and values:');
displayObjectKeysAndValues(exampleObject);
