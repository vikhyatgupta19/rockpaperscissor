// Declaring Variables
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.querySelector('.score-board')
const result_div = document.querySelector('.result > p')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissor_div = document.getElementById('s')

// Creating a function to get random value 
function getComputerChoice(){
    const choices = ['r', 'p', 's']
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber];
}

function convert(letter){
    if (letter==="r") return "Rock"
    if (letter==="p") return "Paper"
    return "Scissors"
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore 
    result_div.innerHTML = convert(user) + " beats " + convert(computer) + " You Win "
}

function lost(user, computer){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore 
    result_div.innerHTML = convert(user) + " losses to " + convert(computer) + " You Lost "
}

function draw(user, computer){
    result_div.innerHTML = "It's a Draw"
}

// Creating function to be excuted on click event
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lost(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

// Adding Event Listeners
function main(){
    rock_div.addEventListener('click', function(){
        game('r')
    }) 

    paper_div.addEventListener('click', function(){
        game('p')
    }) 

    scissor_div.addEventListener('click', function(){
        game('s')
    }) 
}

main();