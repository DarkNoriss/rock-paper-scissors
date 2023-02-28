function getComputerChoice() {
    let choice
    let random = Math.random() * 3

    if (random < 1) {
        choice = "rock"
    } else if (random < 2) {
        choice = "paper"
    } else {
        choice = "scissor"
    }

    return choice
}

function playGame() {
    let playerChoice, computerChoice
    let scorePlayer = 0, scoreComputer = 0

    for (let gameRound = 1; gameRound < 6; gameRound++) {
        playerChoice = prompt("what is your choice").toLowerCase()
        computerChoice = getComputerChoice()

        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissor") {
            if (playerChoice === computerChoice) {
            } else {
                if (playerChoice === "rock") {
                    if (computerChoice === "scissor") {
                        scorePlayer++
                    } else {
                        scoreComputer++
                    }
                } else if (playerChoice === "paper") {
                    if (computerChoice === "rock") {
                        scorePlayer++
                    } else {
                        scoreComputer++
                    }
                } else {
                    if (computerChoice === "paper") {
                        scorePlayer++
                    } else {
                        scoreComputer++
                    }
                }
            }
            console.log("Round ", gameRound)
            console.log("PLAYER ", scorePlayer, " : ", scoreComputer, " COMPUTER")
        } else {
            alert("type rock, paper or scissor!")
            gameRound--
        }
    }
    
    if (scorePlayer > scoreComputer) {
        console.log("PLAYER WON!")
    } else if (scorePlayer === scoreComputer) {
        console.log("TIE!")
    } else {
        console.log("COMPUTER WON!")
    }

    let playAgain = prompt("play again? YES or NO").toLowerCase()

    if (playAgain === "yes") {
        console.log("----- NEW GAME -----")
        playGame()
    }
}

playGame()
