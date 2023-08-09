var gamePattern = [];
var buttonColors = ["red","blue","green","yellow"];
var userClickedPattern =[];
var level =0;
var started = false;
$(document).keydown(function(){
    if(!started){
    nextSequence();
    started= true;
    }
});

function nextSequence(){
    level= level + 1 ;
    $("h1").text("level "+level);
    var randomNumber = Math.floor((Math.random())*4);
    var randomChosenColor= buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);

}

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function playSound(name){
    var audio = new Audio("./sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success");
        console.log(gamePattern);
        console.log(userClickedPattern);

        if(userClickedPattern.length === gamePattern.length){
            userClickedPattern=[];
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        
        started=false;
        level =0;
        gamePattern=[];
        userClickedPattern=[];
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function(){
        $("body").removeClass("game-over");
        },200);
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();

        console.log("wrong");
        console.log(gamePattern);
        console.log(userClickedPattern);
    }
}

// Sample output:
// success
// game.js:47 ['green']
// game.js:48 ['green']
// game.js:46 success
// game.js:47 (2) ['green', 'blue']
// game.js:48 ['green']
// game.js:46 success
// game.js:47 (2) ['green', 'blue']
// game.js:48 (2) ['green', 'blue']
// game.js:46 success
// game.js:47 (3) ['green', 'blue', 'green']
// game.js:48 ['green']
// game.js:46 success
// game.js:47 (3) ['green', 'blue', 'green']
// game.js:48 (2) ['green', 'blue']
// game.js:46 success
// game.js:47 (3) ['green', 'blue', 'green']
// game.js:48 (3) ['green', 'blue', 'green']
// game.js:46 success
// game.js:47 (4) ['green', 'blue', 'green', 'blue']
// game.js:48 ['green']
// game.js:46 success
// game.js:47 (4) ['green', 'blue', 'green', 'blue']
// game.js:48 (2) ['green', 'blue']
// game.js:46 success
// game.js:47 (4) ['green', 'blue', 'green', 'blue']
// game.js:48 (3) ['green', 'blue', 'green']
// game.js:46 success
// game.js:47 (4) ['green', 'blue', 'green', 'blue']
// game.js:48 (4) ['green', 'blue', 'green', 'blue']
// game.js:46 success
// game.js:47 (5) ['green', 'blue', 'green', 'blue', 'blue']
// game.js:48 ['green']
// game.js:46 success
// game.js:47 (5) ['green', 'blue', 'green', 'blue', 'blue']
// game.js:48 (2) ['green', 'blue']
// game.js:46 success
// game.js:47 (5) ['green', 'blue', 'green', 'blue', 'blue']
// game.js:48 (3) ['green', 'blue', 'green']
// game.js:46 success
// game.js:47 (5) ['green', 'blue', 'green', 'blue', 'blue']
// game.js:48 (4) ['green', 'blue', 'green', 'blue']
// game.js:46 success
// game.js:47 (5) ['green', 'blue', 'green', 'blue', 'blue']
// game.js:48 (5) ['green', 'blue', 'green', 'blue', 'blue']
// game.js:46 success
// game.js:47 (6) ['green', 'blue', 'green', 'blue', 'blue', 'red']0: "green"1: "blue"2: "green"3: "blue"4: "blue"5: "red"6: "yellow"length: 7[[Prototype]]: Array(0)
// game.js:48 ['green']