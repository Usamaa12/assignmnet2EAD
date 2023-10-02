function printStringProperties(obj) {
    const values = Object.values(obj);

    for (const value of values) {
        if (value !== null && value !== undefined && typeof value === 'string') {
            console.log(value);
        }
    }
}

const exampleObject = {
    name: "Usama Memon",
    age: 22,
    address: "P/O Therhi Khairpur Mir's",
    email: "usamamemon971@gmail.com",
    phone:03053661312
};

printStringProperties(exampleObject);



