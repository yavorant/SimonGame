
//6. Add the new randomChosenColour generated in step 4 to the end of the gamePattern.???

let gamePattern = [];
let userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
let level = 0;

/*
$("body").keydown(function() {
  console.log("Handler for .keypress() called.");
});
*/


$("body").keypress(function() {
  $("h1").text("Level 0");
  nextSequence();
});

function nextSequence() {
  level = level + 1;
  $("h1").text("Level " + level);
  //a new random number between 0 and 3
  let randomNumber = Math.floor(Math.random() * 4);
  // select a random color from the buttonColours array
  let randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  //Use jQuery to select the button with the same id as the randomChosenColour

  $(`#${randomChosenColour}`).fadeOut(500).fadeIn(500);
  //console.log(randomChosenColour);

  playSound(randomChosenColour);
}

//play sound coresponding to color
function playSound(name) {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

$(".btn").click(function(e) {
    let userChosenColour = this.id;
    //console.log("this.id: ", this.id); // 'this.id' Returns the button clicked id's
    playSound(userChosenColour);
    animatePress(userChosenColour);
    userClickedPattern.push(userChosenColour);
    //console.log(userClickedPattern);
});

//add "pressed" class to the button that gets clicked inside animatePress().
// and remove the "pressed" class after a 100 milliseconds.
function animatePress(currentColour) {
  $(`#${currentColour}`).addClass("pressed");
  window.setTimeout(function(){
    $(`#${currentColour}`).removeClass("pressed");
  },100);
  //console.log("inside animatePress()");
}
