//Create game function that will encompass all variables and functions needed
const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Play Match
    const playMatch = function() {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-choice');
        const computerHand = document.querySelector('.computer-choice');
        const choiceimg = document.querySelectorAll('.choiceimg img');

        choiceimg.forEach(choice => {
            choice.addEventListener("animationend", function() {
                this.style.animation = "";
            });
        });
        //Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];
        
        options.forEach((option) => {
            option.addEventListener('click', function(){
                //computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //Here is where we call compare hands
                compareHands(this.textContent, computerChoice);

                //Update Images
                playerHand.src = `/assets/${this.textContent}.png`;
                computerHand.src = `/assets/${computerChoice}.png`;

                playerHand.style.animation = "fade .5s ";
                computerHand.style.animation = "fade .5s ";

            });
        });

        const computerNumber = Math.floor(Math.random() * 3);
        
    };

    //Update Score Function
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };


    const compareHands = (playerChoice, computerChoice) => {
            //Uupdate Text
            const winner = document.querySelector('.winner');
            //Checking for a tie
            if(playerChoice === computerChoice){
                winner.textContent = "It is a tie!";
                return;
            }
            //Check for Rock
            if(playerChoice === 'rock'){
                if(computerChoice === 'scissors'){
                    winner.textContent = "Player Wins";
                    pScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = "Computer Wins";
                    cScore++;
                    updateScore();
                    return;
                }
            }

            //Check for paper
            if(playerChoice === 'paper'){
                if(computerChoice === 'rock'){
                    winner.textContent = "Player Wins";
                    pScore++;
                    updateScore();
                    return;
                }else{
                    winner.textContent = "Computer Wins";
                    cScore++;
                    updateScore();
                    return;
                }
            }

            //Check for scissors
            if(playerChoice === 'scissors'){
                if(computerChoice === 'paper'){
                    pScore++;
                    updateScore();
                    winner.textContent = "Player Wins";
                    return;
                }else{
                    winner.textContent = "Computer Wins";
                    cScore++;
                    updateScore();
                    return;
                }
            }
    }




    //Call all inner functions
    playMatch();
    
};


//Start game function
game();
