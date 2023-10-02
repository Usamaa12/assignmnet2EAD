// Write an arrow function which calculate the sum of marks provided in an array, average it and
// also show Grade. Follow Grading Policy.

    const calculateGrade = (marks) => {
    if (marks.length === 0) {
        return "No marks available.";
    }

    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    const average = sum / marks.length;
    let grade;

    if (average >= 90) {
        grade = 'A';
    } else if (average >= 80) {
        grade = 'B';
    } else if (average >= 70) {
        grade = 'C';
    } else if (average >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    return {
        sum,
        average,
        grade
    };
};

const marks = [70, 90, 88, 92, 80];

const result = calculateGrade(marks);

console.log('Marks in Subject wise:', marks);
console.log('Total Marks Sum:', result.sum);
console.log('Average:', result.average);
console.log('Your Grade:', result.grade);
