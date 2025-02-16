// Task 2: Lucky Draw Program

let userName = prompt("Enter your name: ");
let luckyNumber = Math.ceil(Math.random() * 100);

alert(`${userName}, your lucky number is ${luckyNumber}`);

if (luckyNumber === 50) {
    alert("You won a special prize!");
}
