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
	//STEP 7. NOT WORKING YET. Expected Outcome: append "Sal Haroldino, 94 to the players list.
	//throwing any error codes
	//Trying to let the computer know that inputs for constPlayer should equate to the keys in _players.
	//"this" is aqua instead of purple.
	//using 'team' doesn't help.
	// "unexpected token '." ()line 31
	//Might be working now that I've made const player an array instead of an object......

	addPlayer(newFirstName, newLastName, newAge) {
		const player = {
			/*My incorrect code
			newFirstName : this.players.firstName,
			newLastName : this.players.lastName,
			newAge : this.players.age,
			*/
			firstName: newFirstName,
			lastName: newLastName, //correct code from @10:42 https://youtu.be/wxk9WKidl48
			age: newAge,
			//if newFirstName, newLastName === strings AND newAge === 'number'
		};
		return this._players.push(player); //use the .push() method to add object to array. Notice that "player" is invoked here so that it is no longer greyed out on line 33
	},
	addGame(newOpponent, newTeamPoints, newOpponentPoints) {
		const game = {
			opponent: newOpponent,
			teamPoint: newTeamPoints,
			opponentPoints: newOpponentPoints,
		};
		return this._games.push(game); // notice that "game" is invoked here so that it is no longer greyed out on line 47
	},
};
team.addPlayer('Sal', 'Haroldino', 94);
team.addGame('Titans', 69, 14);
console.log(team.players);
console.log(team.games);
