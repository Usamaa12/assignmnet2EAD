// Write a function which checks given input/parameter:
// a. If input/parameter is below speedlimit of 70 print => 'Good Safe Driving'
// b. If input/parameter is above speedlimit of 70, every 5 kilometers is Penalty Point, print
// => 'Speed Limit Crossed by Penalty Point' + Point
// c. If Driver gets more than 10 penalty points ie. above the speed limit 120, print =>
// 'License Suspended'

function checkSpeed(speed) {
    const speedLimit = 70;
    const penaltyIncrement = 5; // Every five kilometer when speed Above 70
    const penaltyThreshold = 120;
    let penaltyPoints = 0;  // Initially Zero

    if (speed < speedLimit) {
        return 'Good Safe Driving';
    } else if (speed >= speedLimit && speed < penaltyThreshold) {
        penaltyPoints = speedLimit > 0 ? parseInt((speed - speedLimit) / penaltyIncrement) : 0;
        return `Speed Limit Crossed by Penalty Point ${penaltyPoints}`;
    } else {
        penaltyPoints = penaltyThreshold > 0 ? parseInt((speed - speedLimit) / penaltyIncrement) : 0;
        return `License Suspended. Penalty Points: ${penaltyPoints}`;
    }
}

const speed1 = 60;
const speed2 = 77;
const speed3 = 125;

console.log('Speed 1:', checkSpeed(speed1));
console.log('Speed 2:', checkSpeed(speed2));
console.log('Speed 3:', checkSpeed(speed3));
