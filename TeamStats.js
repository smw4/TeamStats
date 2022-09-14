//TeamStats

//Declare a const variable called team
const team = {
	_players: [
		//populate the empty_players array with three players. Each player should be an object containing three properties: firstName, lastName, and age. Put each player on a new line to prevent the line from getting too long.
		{ firstName: 'Sean', lastName: 'Sean', age: 36 }, //player 1
		{ firstName: 'Linda', lastName: 'Groen', age: 33 }, //player 2
		{ firstName: 'Ron', lastName: 'Groen', age: 30 }, //player 3
	],
	_games: [
		{ opponent: 'Beagles', teamPoint: 42, opponentPoints: 45 },
		{ opponent: 'Beagles', teamPoint: 32, opponentPoints: 95 },
		{ opponent: 'Beagles', teamPoint: 24, opponentPoints: 5 },
	],
	get players() {
		// STEP 5.
		return this._players;
	},
	get games() {
		// STEP 6.
		return this._games;
	},
	//STEP 7. NOT WORKING YET. Not throwing any error codes, but not appending "Sal Haroldino, 94 to the players list." Trying to let the computer know that the inputs for addPlayer should equate to the keys in _players
	addPlayer(newFirstName, newLastName, newAge) {
		newFirstName = this._players.firstName;
		newLastName = this._players.lastName;
		newAge = this._players.age;
		//if newFirstName, newLastName === strings AND newAge === 'number'
		return this._players.push(); //use the .push() method to add object to array
	},
};

team.addPlayer('Sal', 'Haroldino', 94);

console.log(team._players);
console.log(team._games);
