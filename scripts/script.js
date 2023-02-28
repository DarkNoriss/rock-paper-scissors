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

function game() {
    let playerChoice, computerChoice
    let scorePlayer = 0, scoreComputer = 0

    for (let start = 0; start < 5; start++) {
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
        } else {
            alert("type rock, paper or scissor!")
            start--
        }
    }
    console.log("PLAYER ", scorePlayer, " : ", scoreComputer, " COMPUTER")
}

game()

