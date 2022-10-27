function generate_random(max_number) {

    return Math.floor(Math.random()* max_number);
}

let button = document.querySelector("button");
let answer = document.querySelector("#answer");

// adding a clickevent to the button
button.addEventListener("click", function() {

    let randomNumber = generate_random(4);

let answerText = "";

if (randomNumber ==0) {

    answerText = "It is decidely so";
}
else if (randomNumber === 1) {
    answerText = "No, it is flat";
}
else if (randomNumber === 2) {
    answerText = "Yes,definitely!";
}
else if (randomNumber ===3) {
    answerText = "It is still uncertain";
    
}
else {
    answerText = "It is roundly a sphere";
}

answer.innerHTML = answerText;

});

