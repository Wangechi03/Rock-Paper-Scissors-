document.addEventListener('DOMContentLoaded', () => {
    const userScoreElement = document.getElementById('user_score');
    const computerScoreElement = document.getElementById('computer_score');
    const userChoiceElement = document.getElementById('user_choice');
    const computerChoiceElement = document.getElementById('comp_choice');
    const resultElement = document.getElementById('result');

    let userScore = 0;
    let computerScore = 0;

    const choices = ['rock', 'paper', 'scissors'];
    const buttons = document.querySelectorAll('.weapons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const userChoice = button.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const result = getResult(userChoice, computerChoice);

            userChoiceElement.textContent = capitalizeFirstLetter(userChoice);
            computerChoiceElement.textContent = capitalizeFirstLetter(computerChoice);
            resultElement.textContent = result;

            if (result === 'You win!') {
                userScore++;
            } else if (result === 'You lose!') {
                computerScore++;
            }

            userScoreElement.textContent = userScore;
            computerScoreElement.textContent = computerScore;
        });
    });

    function getResult(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return 'It\'s a draw!';
        }

        if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        }

        return 'You lose!';
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});
