let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

// when button is pressed
$('.btn').click(function(event) {
    // my methods
    let userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);

    // udemy methods
    // let userChosenColour = this.id;
    // userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern);

    // other udemy methods

    playSound(userChosenColour);

})

// function sounds when button is clicked
function playSound(name) {
// add sounds
let audio = new Audio('sounds/' + name + '.mp3');
audio.play();
}

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    // push into empty array (gamePattern)
    gamePattern.push(randomChosenColour);

    // add sounds
    let audio = new Audio('sounds/' + randomChosenColour + '.mp3');
    audio.play();

    // add animations
    $("#" + randomChosenColour).fadeOut(50).fadeIn(50);




}