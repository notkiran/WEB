const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Enter a Proper choice- rock,paper or scissors!')
    }
};

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 3:
            return 'scissors';
    }
};

console.log(getComputerChoice());

// console.log(getUserChoice('rock'));