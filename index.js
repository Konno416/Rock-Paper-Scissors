var player = 0
var bot = 0
var tie = 0
var choices = ["rock", "paper", "scissors"]

function playerWin(){
    player++;
    $("#p-score").text(player);
    $(".the-text").text("The player wins!");
}

function botWin(){
    bot++;
    $("#bot-score").text(bot);
    $(".the-text").text("The computer wins!")
}

function tieWin(){
    tie++;
    $("#tie").text(tie);
    $(".the-text").text("It's a tie!")
}


$(".img1").click(function(){
    playerChoice = choices[0];
    whoWon();
})

$(".img2").click(function(){
    playerChoice = choices[1];
    whoWon();
})

$(".img3").click(function(){
    playerChoice = choices[2];
    whoWon();
})

function botOptions(){
    botChoice = choices[Math.floor(Math.random()*4 -1)]
    return botChoice
}

function whoWon(){
    botOptions()
    if(playerChoice === "rock"){
        if(botChoice === "rock"){
            $(".computerChose").text("Computer chose rock!");
            tieWin();
        }
        else if(botChoice === "paper"){
            $(".computerChose").text("Computer chose paper!");
            botWin();
        }
        else if(botChoice === "scissors"){
            $(".computerChose").text("Computer chose scissors!");
            playerWin();
        }
    }
    else if(playerChoice === "paper"){
        if(botChoice === "rock"){
            $(".computerChose").text("Computer chose rock!");
            playerWin();
        }
        else if(botChoice === "paper"){
            $(".computerChose").text("Computer chose paper!");
            tieWin();
        }
        else if(botChoice === "scissors"){
            $(".computerChose").text("Computer chose scissors!");
            botWin();
        }
    }
    else if(playerChoice === "scissors"){
        if(botChoice === "rock"){
            $(".computerChose").text("Computer chose rock!");
            botWin();
        }
        else if(botChoice === "paper"){
            $(".computerChose").text("Computer chose paper!");
            playerWin();
        }
        else if(botChoice === "scissors"){
            $(".computerChose").text("Computer chose scissors!");
            tieWin();
        }
    }
}