
//6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.???

let gamePattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];

//a new random number between 0 and 3
let randomNumber = function nextSequence(max = 4) {
  return Math.floor(Math.random() * max);
}
// select a random color from the buttonColours array
let randomChosenColour = () => buttonColours[randomNumber()];

gamePattern.push(randomChosenColour());

//console.log(gamePattern);

//Use jQuery to select the button with the same id as the randomChosenColour

let randomColor = randomChosenColour();
console.log(randomColor);
$(`#${randomColor}`).fadeOut().fadeIn();
let currentColorSound = new Audio(`sounds/${randomColor}.mp3`);
currentColorSound.play();

//$(document.body).animate({opacity: '30%'}, 1000);
//$(document.body).fadeOut().fadeIn();
audioObj = new Audio(url);
myAudioElement.play();
