let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice(){
    const choices = ["r", "p", "s"];
    const randomChoice = Math.floor(Math.random()*3);
    return choices[randomChoice];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissors";
}

function win(userChoice, compChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}. You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() { userChoice_div.classList.remove('green-glow')}, 300);
    document.add(userChoice_div);
}

function lose(userChoice, compChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord}. You lose!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() { userChoice_div.classList.remove('red-glow')}, 300);
}

function draw(userChoice, compChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} draws to ${convertToWord(compChoice)}${smallCompWord}. You tie!`;
    userChoice_div.classList.add('gray-glow');

    setTimeout(function() { userChoice_div.classList.remove('gray-glow')}, 300)
}


function game(userChoice){
    const compChoice = getCompChoice();
    switch(userChoice + compChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
        
    }
}


function main(){
    rock_div.addEventListener('click', function(){
        game("r");
    })

    paper_div.addEventListener('click', function(){
        game("p");
    })

    scissors_div.addEventListener('click', function(){
        game("s");
    })
}

main();