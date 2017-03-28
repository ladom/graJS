var newGameBtn = document.getElementById('js-newGameButton');
var pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var pickScissors = document.getElementById('js-playerPick_scissors');
var gameState = 'notStarted';
var player = {
	name: '',
	score: 0
};
var computer = {
	score: 0
};
var newGameElem = document.getElementById('js-newGameElement');
var pickElem = document.getElementById('js-playerPickElement');
var resultsElem = document.getElementById('js-resultsTableElement');
var playerPointsElem = document.getElementById('js-playerPoints');
var playerNameElem = document.getElementById('js-playerName');
var computerPointsElem = document.getElementById('js-computerPoints');
var playerPickElem = document.getElementById('js-playerPick');
var computerPickElem = document.getElementById('js-computerPick');
var playerResultElem = document.getElementById('js-playerResult');
var computerResultElem = document.getElementById('js-computerResult');
var finalScorePlayer = player.score;
var finalScoreComputer = computer.score;

newGameBtn.addEventListener('click', newGame);

pickRock.addEventListener('click', function() {
	playerPick('Kamień')
});
pickPaper.addEventListener('click', function() {
	playerPick('Papier')
});
pickScissors.addEventListener('click', function() {
	playerPick('Nożyczki')
});

function setGameElements() {
	switch(gameState) {
		case 'started':
			newGameElem.style.display = 'none';
			pickElem.style.display = 'block';
			resultsElem.style.display = 'block';
		break;
		case 'ended':
			newGameBtn.innerText = 'Zagraj jeszcze raz';
		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
	}
}

setGameElements();

function newGame() {
	player.name = prompt('Wpisz swoje imię', 'imię gracza');
	if (player.name) {
		player.score = computer.score = 0;
		gameState = 'started';
		setGameElements();

		playerNameElem.innerHTML = player.name;

	}
}

function playerPick(playerPick) {
	console.log(playerPick);
}

function getComputerPick() {
	var possiblePicks = ['Kamień', 'Papier', 'Nożyczki'];
	return possiblePicks[Math.floor(Math.random()*3)];
}

function playerPick(playerPick) {
	var computerPick = getComputerPick();

	playerPickElem.innerHTML = playerPick;
	computerPickElem.innerHTML = computerPick;

	checkRoundWinner(playerPick, computerPick);
}

function checkRoundWinner(playerPick, computerPick) {
	playerResultElem.innerHTML = computerResultElem.innerHTML = '';

	var winnerIs = 'player';

	if (playerPick == computerPick) {
		winnerIs = 'noone';
	} else if (
		(computerPick == 'Kamień' && playerPick == 'Nożyczki') ||
		(computerPick == 'Nożyczki' && playerPick == 'Papier') ||
		(computerPick == 'Papier' && playerPick == 'Kamień')) {
		
		winnerIs = 'computer';
	}

	if (winnerIs == 'player') {
		playerResultElem.innerHTML = "Wygrana!";
		player.score++;
	} else if (winnerIs == 'computer') {
		computerResultElem.innerHTML = "Wygrana!";
		computer.score++;

	}

	playerPointsElem.innerHTML = player.score;
	computerPointsElem.innerHTML = computer.score;

	
	function gameEnded() {
		if ((player.score == 10) || (computer.score == 10)) {
			function checkWinner() {
				if (player.score > computer.score) {
					alert('Zwycięzcą jest: ' + player.name);
				} else {
					alert('Zwycięzcą jest: Komputer');
				}
			}
			checkWinner();
			gameState = 'ended';
			setGameElements();
		}

		
	}
	
	gameEnded();
	
}








