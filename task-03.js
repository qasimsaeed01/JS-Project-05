// Task 3: AI Love Calculator


let name1 = prompt("Enter the first name: ");
let name2 = prompt("Enter the second name: ");
let loveScore = Math.ceil(Math.random() * 100);

alert(`Love Score for ${name1} & ${name2}: ${loveScore}% ❤️`);

if (loveScore >= 90) {
    alert("Perfect match! ❤️");
}
else if (loveScore >= 50) {
    alert("Good compatibility! 😊");
}
else {
    alert("Maybe just friends! 😅");
}
