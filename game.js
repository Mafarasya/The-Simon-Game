let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

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

    // play sounds
    playSound(userChosenColour);

    // User clicks animation
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern);
})

    // Detect keyboard key
    $(document).keypress(function () {
        if (!started) {
            nextSequence();
            $('#level-title').text("Level " + level);
        }
        started = true;
    });


// Function check answer
function checkAnswer(currentLevel) {

    // if user click is the same as the game pattern
        if (currentLevel[currentLevel.length - 1] === gamePattern[currentLevel.length - 1]) {
            // current level = userClickedPattern
            // console.log(userClickedPattern);
            // console.log("Ini adlaah index terakhir dari gamePattern");
            // console.log(gamePattern);
            // console.log(gamePattern[gamePattern.length - 1]);
            // console.log("ini adalah index terakhir dari currentLevel yang adalah userClickedPattern");
            // console.log(gamePattern[currentLevel.length - 1]);
            console.log("Success");

            // check again if the most recent answer right in step 3
            if (userClickedPattern.length === gamePattern.length) {
                setTimeout(function() {
                    nextSequence();
                }, 1000);
            }
        }
         else {
            // gameOver();
            console.log("Wrong");
            playSound("wrong")


            $('body').addClass('game-over');
            setTimeout(() => {
                $('body').removeClass('game-over');
            }, 200);

            $('#level-title').text("Game Over, Press Any Key to Restart");

            startOver();
    }

    // return currentLevel.length - 1;
}

// function sounds when button is clicked
function playSound(name) {
// add sounds
let audio = new Audio('sounds/' + name + '.mp3');
audio.play();
}

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);


    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    // push into empty array (gamePattern)
    gamePattern.push(randomChosenColour);

    // add sounds
    let audio = new Audio('sounds/' + randomChosenColour + '.mp3');


    // add animations
    $("#" + randomChosenColour).fadeOut(50).fadeIn(50);
    audio.play();
}

// function animations to User Clicks

function animatePress(currentColour) {
    $('#' + currentColour).addClass('pressed');
    setTimeout(function() {
        $('#' + currentColour).removeClass('pressed');
    }, 100);
}


// function startOver to restart the game

function startOver () {
    level = 0;
    gamePattern = []
    started = false;
}