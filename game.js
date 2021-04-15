
//6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.???

let gamePattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];

/*
$("body").keydown(function() {
  console.log("Handler for .keypress() called.");
});
*/


    $("body").keypress(function(){
        nextSequence();
    });

function nextSequence() {
//a new random number between 0 and 3
let randomNumber = Math.floor(Math.random() * 4);
// select a random color from the buttonColours array
let randomChosenColour = buttonColours[randomNumber];

gamePattern.push(randomChosenColour);

//console.log(gamePattern);

//Use jQuery to select the button with the same id as the randomChosenColour


$(`#${randomChosenColour}`).fadeOut(500).fadeIn(500);
console.log(randomChosenColour);

playSound(randomChosenColour);
//let audio = new Audio("sounds/" + randomColor + ".mp3");
//audio.play();
//new Audio("sounds/red.mp3").play();

//audio.play();

//$(document.body).animate({opacity: '30%'}, 1000);
//$(document.body).fadeOut().fadeIn();
}

function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

console.log(gamePattern);
